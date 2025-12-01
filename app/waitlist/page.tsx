"use client"

import type React from "react"

import { Shader, Swirl, ChromaFlow } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { WaitlistSuccessDialog } from "@/components/waitlist-success-dialog"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Waitlist() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const navItems = ["Get Early Access", "Privacy Policy"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setEmail("")
        setShowSuccessDialog(true)
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black" itemScope itemType="https://schema.org/WebSite">
      {/* SEO-friendly hidden content for crawlers */}
      <div className="sr-only">
        <h1>Devae - Social Media Platform for Developers</h1>
        <h2>The Ultimate Developer Collaboration Network</h2>
        <p>
          Devae is the ultimate social media and collaboration platform for developers worldwide. Connect with software
          engineers, programmers, and developers. Build teams, collaborate on projects, share code, and network with
          the global developer community. Join the best developer social network for real-time collaboration, code
          sharing, and team building.
        </p>
        <h3>Features for Developers:</h3>
        <ul>
          <li>Developer social media platform - Connect with programmers globally</li>
          <li>Collaboration network for programmers - Work together seamlessly</li>
          <li>Connect with developers worldwide - Build your professional network</li>
          <li>Build developer teams - Find the perfect collaborators</li>
          <li>Real-time code collaboration - Pair programming made easy</li>
          <li>Developer community and networking - Join discussions and forums</li>
          <li>Threads and discussions for developers - Share knowledge and insights</li>
          <li>Software engineering collaboration tools - Boost productivity</li>
          <li>Open source project collaboration - Contribute to amazing projects</li>
          <li>Remote developer networking - Work from anywhere</li>
          <li>Tech mentorship platform - Learn from experienced developers</li>
          <li>Full stack developer community - Frontend, backend, and everything between</li>
        </ul>
        <h3>Why Choose Devae?</h3>
        <p>
          Unlike traditional social media platforms, Devae is built specifically for developers. Whether you're a web
          developer, mobile app developer, DevOps engineer, data scientist, or AI researcher, Devae provides the tools
          and community you need to succeed. Join thousands of developers who are already collaborating, learning, and
          building amazing projects together.
        </p>
        <h3>Perfect For:</h3>
        <ul>
          <li>Software Engineers looking for collaboration opportunities</li>
          <li>Web Developers seeking project partners</li>
          <li>Mobile App Developers building cross-platform teams</li>
          <li>Frontend Developers sharing UI/UX insights</li>
          <li>Backend Developers discussing architecture patterns</li>
          <li>Full Stack Developers showcasing their versatility</li>
          <li>DevOps Engineers automating workflows together</li>
          <li>Data Scientists collaborating on ML projects</li>
          <li>Blockchain Developers building decentralized apps</li>
          <li>AI/ML Researchers sharing breakthroughs</li>
          <li>Open Source Contributors finding projects</li>
          <li>Coding Bootcamp Students networking with peers</li>
          <li>Tech Entrepreneurs finding co-founders</li>
          <li>Freelance Developers expanding their network</li>
        </ul>
        <h3>Join the Developer Revolution</h3>
        <p>
          Devae is more than just a social network - it's a movement to connect developers across the globe. Whether
          you're looking for mentorship, seeking collaborators, sharing your latest project, or simply wanting to
          connect with like-minded developers, Devae is your platform. Sign up for early access today and be part of
          the future of developer collaboration.
        </p>
        <address>
          <strong>Devae</strong><br />
          Email: hello@devae.us<br />
          Web: https://devae.us
        </address>
      </div>
      
      <CustomCursor />
      <GrainOverlay />

      {/* Shader Background */}
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#ffffff"
            colorB="#000000"
            speed={0.4}
            detail={0.95}
            blend={55}
            coarseX={60}
            coarseY={60}
            mediumX={50}
            mediumY={50}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#0a0a0a"
            upColor="#ffffff"
            downColor="#000000"
            leftColor="#1a1a1a"
            rightColor="#f5f5f5"
            intensity={0.6}
            radius={2.5}
            momentum={15}
            maskType="alpha"
            opacity={0.9}
          />
        </Shader>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {/* Gradient background for navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-xl" />
        
        <div className="relative mx-auto flex items-center px-4 py-4 sm:px-6 md:px-12 lg:px-20">
          {/* Left side - Nav Items */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-2xl md:flex">
            {navItems.map((item) => {
              if (item === "Privacy Policy") {
                return (
                  <Link
                    key={item}
                    href="/privacy"
                    className="rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white xl:px-5"
                  >
                    {item}
                  </Link>
                )
              }
              return (
                <button
                  key={item}
                  className="rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white xl:px-5"
                >
                  {item}
                </button>
              )
            })}
          </div>

          {/* Center - Logo */}
          <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
            <Image
              src="/images/devae-20white-20transparent.webp"
              alt="Devae - Official Developer Platform"
              width={140}
              height={35}
              className="h-6 w-auto sm:h-7 md:h-8"
              title="Devae™ Logo"
            />
          </Link>

          {/* Right side - Get Started + Mobile Menu */}
          <div className="flex items-center gap-3 ml-auto">
            

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1">
                <span
                  className={`h-0.5 w-4 bg-white transition-all duration-300 ${mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
                />
                <span
                  className={`h-0.5 w-4 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-4 bg-white transition-all duration-300 ${mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-2xl sm:mx-6">
            {navItems.map((item) => {
              if (item === "Privacy Policy") {
                return (
                  <Link
                    key={item}
                    href="/privacy"
                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {item}
                  </Link>
                )
              }
              return (
                <button
                  key={item}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      <div
        className={`relative z-10 flex min-h-screen flex-col justify-center px-4 pt-20 pb-24 sm:px-6 md:px-12 lg:px-20 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-5xl">
          {/* Coming Soon Badge */}
          <div className="mb-6 animate-in fade-in slide-in-from-left-8 duration-1000 sm:mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur-xl sm:px-4 sm:py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/80 sm:text-xs sm:tracking-[0.3em]">
                Coming Soon
              </span>
            </span>
          </div>

          {/* Main Heading with Mixed Typography */}
          <h1 className="mb-6 animate-in fade-in slide-in-from-left-12 delay-200 duration-1000 sm:mb-8" itemProp="headline">
            <span className="block font-serif text-5xl font-light leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Where
            </span>
            <span className="block font-serif text-5xl font-light italic leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Developers
            </span>
            <span className="block font-serif text-5xl font-light leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="font-serif italic text-white/80">truly</span> Connect
              <span className="text-white/40">.</span>
            </span>
          </h1>

          {/* Description with enhanced typography */}
          <p className="mb-8 max-w-lg animate-in fade-in slide-in-from-left-8 text-sm leading-relaxed text-white/50 delay-400 duration-1000 sm:mb-10 sm:max-w-xl sm:text-base md:text-lg lg:text-xl" itemProp="description">
            <span className="text-pretty">
              The <span className="font-serif italic text-white/70">ultimate</span> collaboration platform that brings
              developers together. Find your tribe, build{" "}
              <span className="font-serif italic text-white/70">extraordinary</span> things.
            </span>
          </p>

          {/* Email Signup - Responsive */}
          <div className="mb-8 animate-in fade-in slide-in-from-left-8 delay-500 duration-1000 sm:mb-10">
            <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 backdrop-blur-xl transition-all duration-300 focus:border-white/30 focus:bg-white/10 focus:outline-none sm:px-6 sm:py-4"
                disabled={isSubmitting}
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 disabled:opacity-50 disabled:hover:scale-100 sm:px-8 sm:py-4"
              >
                <span className="relative z-10">{isSubmitting ? "Joining..." : "Join Waitlist"}</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white via-neutral-100 to-white transition-transform duration-700 group-hover:translate-x-0" />
              </button>
            </form>
            {submitStatus === "success" && (
              <p className="mt-3 text-xs text-green-400 sm:mt-4">Welcome aboard! You're on the list.</p>
            )}
            {submitStatus === "error" && (
              <p className="mt-3 text-xs text-red-400 sm:mt-4">{errorMessage}</p>
            )}
            {submitStatus === "idle" && (
              <p className="mt-3 text-[10px] text-white/40 sm:mt-4 sm:text-xs">
                Be the first to experience the <span className="font-serif italic">future</span> of developer
                collaboration.
              </p>
            )}
          </div>

          {/* Features Row - Responsive grid */}
          <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-left-8 delay-700 duration-1000 sm:grid-cols-3 sm:gap-8">
            {[
              { num: "01", title: "Real-time Collab", desc: "Code together, beautifully" },
              { num: "02", title: "Smart Matching", desc: "Find your perfect team" },
              { num: "03", title: "Ship Together", desc: "Launch faster than ever" },
            ].map((feature) => (
              <div
                key={feature.num}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 sm:p-5"
              >
                <span className="absolute right-4 top-4 font-mono text-[10px] text-white/20 sm:text-xs">
                  {feature.num}
                </span>
                <h3 className="mb-1 font-serif text-base font-medium text-white transition-colors group-hover:text-white/90 sm:text-lg">
                  {feature.title}
                </h3>
                <p className="text-xs text-white/40 sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links - Bottom Left */}
        <div className="mt-12 animate-in fade-in slide-in-from-left-4 delay-[900ms] duration-1000 sm:absolute sm:bottom-8 sm:left-6 sm:mt-0 md:left-12 lg:left-20">
          <nav className="flex items-center gap-3 sm:gap-4" aria-label="Social media links">
            <span className="text-[10px] uppercase tracking-widest text-white/30 sm:text-xs">Follow</span>
            <div className="h-px w-6 bg-white/20 sm:w-8" />
            <a
              href="https://x.com/devaeus"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-white/50 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10 sm:text-xs"
              aria-label="Follow Devae on X (Twitter)"
              title="Devae on X"
            >
              Tw
            </a>
            <a
              href="https://discord.gg/FqzRXBsW"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-white/50 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10 sm:text-xs"
              aria-label="Join Devae on Discord"
              title="Devae on Discord"
            >
              Dc
            </a>
          </nav>
        </div>

        <div className="hidden animate-in fade-in zoom-in delay-[1000ms] duration-1000 sm:absolute sm:bottom-8 sm:right-6 sm:block md:right-12 lg:right-20">
          <Image
            src="/images/d-20logo-20white-20transparent.webp"
            alt="Devae - Social Media Platform for Developers"
            width={80}
            height={80}
            className="h-16 w-16 opacity-10 transition-opacity duration-500 hover:opacity-20 lg:h-20 lg:w-20"
            title="Devae Logo"
          />
        </div>
      </div>

      <div className="pointer-events-none fixed inset-0 z-5 overflow-hidden">
        <div
          className={`absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-white/3 blur-3xl transition-opacity delay-500 duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <WaitlistSuccessDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog} />

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}
