import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for IP tracking (consider using Redis or database in production)
const ipSubmissions = new Map<string, { email: string; timestamp: number }>()

// Clean up old entries every hour (entries older than 24 hours)
setInterval(() => {
  const now = Date.now()
  const oneDayAgo = now - 24 * 60 * 60 * 1000
  
  for (const [ip, data] of ipSubmissions.entries()) {
    if (data.timestamp < oneDayAgo) {
      ipSubmissions.delete(ip)
    }
  }
}, 60 * 60 * 1000)

function getClientIP(request: NextRequest): string {
  // Priority order for getting real client IP:
  // 1. Cloudflare connecting IP (most reliable with Cloudflare)
  // 2. X-Real-IP (nginx/other proxies)
  // 3. X-Forwarded-For (most common proxy header)
  // 4. Vercel forwarded IP
  // 5. Direct IP from request
  
  const cfConnectingIP = request.headers.get("cf-connecting-ip")
  const realIP = request.headers.get("x-real-ip")
  const forwardedFor = request.headers.get("x-forwarded-for")
  const vercelForwardedIP = request.headers.get("x-vercel-forwarded-for")
  
  if (cfConnectingIP) return cfConnectingIP.trim()
  if (realIP) return realIP.trim()
  if (vercelForwardedIP) return vercelForwardedIP.split(",")[0].trim()
  if (forwardedFor) return forwardedFor.split(",")[0].trim()
  
  // Fallback to request IP
  return request.ip || "unknown"
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Get client IP address
    const clientIP = getClientIP(request)
    
    // Reject if IP cannot be determined
    if (clientIP === "unknown" || !clientIP) {
      return NextResponse.json(
        { error: "Unable to verify your device. Please try again." },
        { status: 400 }
      )
    }
    
    // Check if this IP has already submitted
    const existingSubmission = ipSubmissions.get(clientIP)
    
    if (existingSubmission) {
      // Check if it's the same email
      if (existingSubmission.email.toLowerCase() === email.toLowerCase()) {
        return NextResponse.json(
          { error: "You have already joined the waitlist with this email from this device." },
          { status: 429 }
        )
      } else {
        return NextResponse.json(
          { error: "This device has already been used to join the waitlist. Only one registration per device is allowed." },
          { status: 429 }
        )
      }
    }

    // Additional check: ensure email hasn't been used from a different IP
    for (const [ip, data] of ipSubmissions.entries()) {
      if (data.email.toLowerCase() === email.toLowerCase() && ip !== clientIP) {
        return NextResponse.json(
          { error: "This email has already been registered from another device." },
          { status: 429 }
        )
      }
    }

    const GOOGLE_SHEETS_URL =
      "https://script.google.com/macros/s/AKfycbyaWqOmtw8uuK-qgm03ZHddYGkwr4fUufmDhxPRGOl1ZEAcna9yBWEdhJYPK4b_i6f8/exec"

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
        source: "devae-waitlist",
        ip: clientIP,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to add to waitlist")
    }

    // Store the IP and email with timestamp after successful submission
    ipSubmissions.set(clientIP, {
      email: email.toLowerCase(),
      timestamp: Date.now(),
    })

    return NextResponse.json({ success: true, message: "Successfully joined waitlist!" })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 })
  }
}
