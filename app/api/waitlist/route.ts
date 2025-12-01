import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
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
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to add to waitlist")
    }

    return NextResponse.json({ success: true, message: "Successfully joined waitlist!" })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 })
  }
}
