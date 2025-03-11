"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function MiHealthTrainingWaitlist() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using FormSubmit.co service - a secure, free form submission service
      // This will send the email to the specified address without exposing credentials
      const response = await fetch("https://formsubmit.co/ajax/shivayaskp@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: "Waitlist for MiHealth Training Course",
          email: email,
          _template: "table", // Formats the email nicely
          _captcha: "true", // Enables CAPTCHA protection
        }),
      })

      const data = await response.json()

      if (data.success === "true" || data.success === true) {
        setResult({
          success: true,
          message: "Thank you for joining the waitlist! We will notify you when the training courses are available.",
        })
        setEmail("")
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setResult({
        success: false,
        message: "There was an error joining the waitlist. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MIHEALTH TRAINING COURSES</h1>
          <p className="text-xl md:text-2xl">
            Join the waitlist to be notified when our training courses are available.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div id="waitlist-form" className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Join the Waitlist</h2>

              <p className="mb-6">
                Our comprehensive MiHealth Training Courses are coming soon! Be the first to know when they're available
                by joining our waitlist.
              </p>

              {result ? (
                <div
                  className={`p-4 mb-6 rounded-lg ${result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  <div className="flex items-start">
                    {result.success ? (
                      <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    )}
                    <p>{result.message}</p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Enter your email:</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Joining..." : "Join MiHealth Training Courses Waitlist"}
                  </Button>
                </div>
              </form>

              {result?.success && (
                <div className="mt-6 text-center">
                  <Link href="/" className="text-teal-600 hover:underline">
                    Return to Home
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">What to Expect from Our Training Courses</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive instruction on using the MiHealth device</li>
                <li>Advanced protocols for various health conditions</li>
                <li>Personalized support from certified trainers</li>
                <li>Certification upon completion</li>
                <li>Ongoing access to resources and community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

