"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <>
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH</h1>
          <p className="text-xl md:text-2xl">We'd love to hear from you and answer any questions you may have.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone size={24} className="mr-4 text-teal-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-lg">
                      <a href="tel:+6588825587" className="hover:text-teal-600">
                        +65 8882 5587
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="mr-4 text-teal-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-lg">
                      <a href="mailto:shivayaskp@gmail.com" className="hover:text-teal-600">
                        shivayaskp@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Set Up a Discovery Call</h3>
                <p className="mb-4">
                  Ready to explore how Energy4Life can help you restore your mental, physical, and emotional health?
                </p>
                <a
                  href="https://www.e4l.com/p/?id=siokkhoonpoh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary block text-center"
                >
                  Schedule Your Discovery Call
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

