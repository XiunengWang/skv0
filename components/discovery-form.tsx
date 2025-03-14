"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface ServiceInfo {
  [key: string]: { title: string } | undefined
}

export function DiscoveryForm({ service = "default" }: { service?: string }) {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const serviceInfo: ServiceInfo = {
    default: { title: "Energy4Life Services" },
    coaching: { title: "Personal Coaching" },
    healing: { title: "Energy Healing" },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({})

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

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({
          success: true,
          message:
            "Thank you! We've received your request and will contact you shortly to confirm your discovery call.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        // Optionally redirect to a thank you page
        // router.push('/thank-you')
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus({
        success: false,
        message: "There was a problem submitting your request. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          What would you like to discuss? *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Schedule Your Discovery Call"}
      </button>

      {submitStatus.message && (
        <div
          className={`p-4 rounded-md ${submitStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
        >
          {submitStatus.message}
        </div>
      )}

      <p className="text-xs text-gray-500 mt-4">
        By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
      </p>
    </form>
  )
}

