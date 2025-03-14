'use client'

import type React from 'react'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function EnergyAuditRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: "I'm interested in registering for an Energy Audit session."
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using FormSubmit.co service
      const response = await fetch('https://formsubmit.co/ajax/shivayaskp@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          subject: 'Energy Audit Registration',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _template: 'table',
          _captcha: 'true'
        })
      })

      const data = await response.json()

      if (data.success === 'true' || data.success === true) {
        setResult({
          success: true,
          message: 'Thank you for registering! We will contact you soon to schedule your Energy Audit session.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: "I'm interested in registering for an Energy Audit session."
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setResult({
        success: false,
        message: 'There was an error submitting your registration. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className='bg-gradient-to-r from-teal-500 to-blue-500 text-white'>
        <div className='container-custom py-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>ENERGY AUDIT REGISTRATION</h1>
          <p className='text-xl md:text-2xl'>Register for your Energy Audit session</p>
        </div>
      </section>

      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='max-w-3xl mx-auto'>
            <div className='mb-8 flex justify-center'>
              <Image src='/images/EnergyAudit-Service3.jpg' alt='Energy Audit Service - MiHealth device with spiritual elements' width={600} height={800} className='rounded-lg w-full max-w-md h-auto' />
            </div>

            <div id='registration-form' className='bg-gray-50 p-8 rounded-lg shadow-md mb-8'>
              <h2 className='text-2xl font-bold mb-6'>Register for Your Energy Audit</h2>

              <p className='mb-6'>Our cutting-edge E4L Bioenergetic Scan uses your voice to uncover hidden traumas impacting your vitality and well-being, identify recurring thought patterns that are limiting your potential, and discover real support for breakthrough and lasting change.</p>

              {result ? (
                <div className={`p-4 mb-6 rounded-lg ${result.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  <div className='flex items-start'>
                    {result.success ? <CheckCircle2 className='h-5 w-5 mr-2 mt-0.5 flex-shrink-0' /> : <AlertCircle className='h-5 w-5 mr-2 mt-0.5 flex-shrink-0' />}
                    <p>{result.message}</p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className='space-y-4'>
                  <div>
                    <Label htmlFor='name'>Name</Label>
                    <Input id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Your name' required className='mt-1' />
                  </div>

                  <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' name='email' type='email' value={formData.email} onChange={handleChange} placeholder='your.email@example.com' required className='mt-1' />
                  </div>

                  <div>
                    <Label htmlFor='phone'>Phone (optional)</Label>
                    <Input id='phone' name='phone' value={formData.phone} onChange={handleChange} placeholder='Your phone number' className='mt-1' />
                  </div>

                  <div>
                    <Label htmlFor='message'>Additional Information (optional)</Label>
                    <Textarea id='message' name='message' value={formData.message} onChange={handleChange} rows={4} className='mt-1' />
                  </div>

                  <Button type='submit' className='w-full' disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Register Now'}
                  </Button>
                </div>
              </form>

              {result?.success && (
                <div className='mt-6 text-center'>
                  <Link href='/' className='text-teal-600 hover:underline'>
                    Return to Home
                  </Link>
                </div>
              )}
            </div>

            <div className='bg-teal-50 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold mb-4'>What to Expect</h3>
              <p className='mb-4'>After registering, you will receive:</p>
              <ul className='list-disc pl-8 space-y-2 mb-6'>
                <li>A confirmation email with details about your Energy Audit session</li>
                <li>Instructions on how to prepare for your session</li>
                <li>Information about fees and payment options</li>
              </ul>
              <p>
                <strong>Fees:</strong> SGD$150 for a 60-minute Consultation + Scan + Report session
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
