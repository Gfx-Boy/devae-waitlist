"use client"

import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import Image from "next/image"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* SEO Meta Tags */}
      <div className="sr-only">
        <h1>Devae Privacy Policy - Developer Social Media Platform</h1>
        <p>
          Privacy policy for Devae, the social media and collaboration platform for developers. Learn how we protect
          your data and respect your privacy on our developer networking platform.
        </p>
      </div>
      
      <CustomCursor />
      <GrainOverlay />

      {/* Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-neutral-950 to-black" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 lg:px-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/devae-20white-20transparent.webp"
              alt="Devae"
              width={140}
              height={35}
              className="h-6 w-auto sm:h-7 md:h-8"
            />
          </Link>

          <Link
            href="/"
            className="group relative overflow-hidden rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="relative z-10">Back to Home</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white via-neutral-200 to-white transition-transform duration-700 group-hover:translate-x-0" />
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-28 pb-24 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="mb-4 font-serif text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-white/50 sm:text-base">Last updated: November 30, 2025</p>
        </div>

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 delay-200 duration-1000">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">Introduction</h2>
            <p className="leading-relaxed text-white/70">
              Welcome to Devae. We respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we handle your personal data when you visit our website and tell you
              about your privacy rights.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-medium text-white">Email Address</h3>
                <p className="leading-relaxed text-white/70">
                  When you join our waitlist, we collect your email address to notify you about our platform launch and
                  updates.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-white">Usage Data</h3>
                <p className="leading-relaxed text-white/70">
                  We may collect information about how you access and use our website, including your IP address,
                  browser type, pages visited, and time spent on pages.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">How We Use Your Information</h2>
            <ul className="space-y-2 leading-relaxed text-white/70">
              <li className="flex gap-2">
                <span className="text-white/40">•</span>
                <span>To provide you with updates about our platform launch</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/40">•</span>
                <span>To send you marketing communications (with your consent)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/40">•</span>
                <span>To improve our website and services</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/40">•</span>
                <span>To analyze usage patterns and trends</span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">Data Security</h2>
            <p className="leading-relaxed text-white/70">
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized or unlawful processing, accidental loss, destruction, or damage. Your email information is
              stored securely and is only accessible to authorized personnel.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">Your Rights</h2>
            <p className="mb-4 leading-relaxed text-white/70">You have the right to:</p>
            <ul className="space-y-2 leading-relaxed text-white/70">
              <li className="flex gap-2">
                <span className="text-white/40">•</span>
                <span>Access your personal data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/40">•</span>
                <span>Correct inaccurate personal data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/40">•</span>
                <span>Request deletion of your personal data</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/40">•</span>
                <span>Withdraw consent for marketing communications at any time</span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">Data Retention</h2>
            <p className="leading-relaxed text-white/70">
              We will retain your personal data only for as long as necessary to fulfill the purposes for which it was
              collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">Third-Party Services</h2>
            <p className="leading-relaxed text-white/70">
              We use Google Sheets to store waitlist information. By joining our waitlist, you acknowledge that your
              email address will be processed through Google's services. We encourage you to review Google's privacy
              policy for information about their data practices.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">
              Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed text-white/70">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new
              privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-white sm:text-3xl">Contact Us</h2>
            <p className="leading-relaxed text-white/70">
              If you have any questions about this privacy policy or our data practices, please contact us through our
              social media channels or by email once our platform launches.
            </p>
          </section>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none fixed inset-0 z-5 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-white/3 blur-3xl" />
      </div>
    </main>
  )
}
