"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from "lucide-react"

// Add a new entry to the serviceInfo object for purchase inquiries
const serviceInfo = {
  "energy-audit": {
    title: "Energy Audit",
    description:
      "Unlock the Secrets of Your Energy with Our Cutting-Edge E4L Bioenergetic Scan. Using your voice, discover hidden traumas impacting your vitality and well-being.",
    defaultMessage:
      "I'm interested in learning more about the Energy Audit service and how it can help me discover hidden traumas and limiting thought patterns.",
  },
  mihealth: {
    title: "MiHealth In-Person",
    description:
      "Experience the power of PEMF, TENS, and SCENAR biofeedback technologies, all integrated into one innovative device designed to enhance your well-being.",
    defaultMessage:
      "I'm interested in learning more about the MiHealth In-Person service and how it can help enhance my well-being.",
  },
  "birthday-blessings": {
    title: "Birthday Blessings for the Soul",
    description:
      "Start a new birth year with greater consciousness and grace! Using the MiHealth device, receive 4 hours of focused frequency support during your birthday season.",
    defaultMessage:
      "I'm interested in learning more about the Birthday Blessings service and how it can help me start my new birth year with greater consciousness.",
  },
  purchase: {
    title: "MiHealth Device Purchase",
    description:
      "The MiHealth device combines PEMF, TENS, and SCENAR biofeedback technologies in one powerful handheld device. It's designed for both professional practitioners and home users.",
    defaultMessage:
      "I'm interested in purchasing the MiHealth device. Please provide me with more information about pricing, payment options, and the purchase process.",
  },
  default: {
    title: "Energy4Life Services",
    description:
      "Discover how our bioenergetic healing services can help restore your mental, physical, and emotional health.",
    defaultMessage: "I'm interested in learning more about your Energy4Life services and how they can help me.",
  },
}

export default function DiscoveryCallPage() {
  const searchParams = useSearchParams()
  const service = searchParams.get("service") || "default"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: serviceInfo[service as keyof typeof serviceInfo]?.defaultMessage || serviceInfo.default.defaultMessage,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  // Update the message when the service changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      message: serviceInfo[service as keyof typeof serviceInfo]?.defaultMessage || serviceInfo.default.defaultMessage,
    }))
  }, [service])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using FormSubmit.co service
      const response = await fetch("https://formsubmit.co/ajax/shivayaskp@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: `Discovery Call Request: ${serviceInfo[service as keyof typeof serviceInfo]?.title || "Energy4Life Services"}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _template: "table",
          _captcha: "true",
        }),
      })

      const data = await response.json()

      if (data.success === "true" || data.success === true) {
        setResult({
          success: true,
          message: "Thank you for your interest! We will contact you soon to schedule your discovery call.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          message:
            serviceInfo[service as keyof typeof serviceInfo]?.defaultMessage || serviceInfo.default.defaultMessage,
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setResult({
        success: false,
        message: "There was an error submitting your request. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const info = serviceInfo[service as keyof typeof serviceInfo] || serviceInfo.default

  return (
    <>
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DISCOVERY CALL</h1>
          <p className="text-xl md:text-2xl">{info.title}</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div id="discovery-form" className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6">Schedule Your Discovery Call</h2>

              <p className="mb-6">{info.description}</p>

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
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Request Discovery Call"}
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

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">What to Expect During Your Discovery Call</h3>
              <p className="mb-6">
                During your 15-minute discovery call, we'll discuss your health goals, current challenges, and how our
                Energy4Life services can help you restore your mental, physical, and emotional health. This is a
                no-obligation conversation to determine if our services are the right fit for your needs.
              </p>
              <p>
                After submitting this form, we'll contact you within 24-48 hours to schedule your call at a time that
                works for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

