import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function EnergyAuditPage() {
  return (
    <>
      <section className='bg-gradient-to-r from-teal-500 to-blue-500 text-white'>
        <div className='container-custom py-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>ENERGY AUDIT</h1>
          <p className='text-xl md:text-2xl'>Unlock Your Potential with a Powerful Bioenergetic Scan</p>
        </div>
      </section>

      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-8 flex justify-center'>
              <Image src='/images/EnergyAudit-Service3.jpg' alt='Energy Audit Service - MiHealth device with spiritual elements' width={800} height={1000} className='rounded-lg w-full max-w-2xl h-auto' priority />
            </div>

            <h2 className='text-3xl font-bold mb-6'>Discover Hidden Traumas and Limiting Thoughts</h2>
            <p className='text-lg mb-6'>Our cutting-edge E4L Bioenergetic Scan uses your voice to uncover:</p>
            <ul className='list-disc pl-8 space-y-2 mb-8 text-lg'>
              <li>Hidden traumas impacting your vitality and well-being.</li>
              <li>Recurring thought patterns that are limiting your potential.</li>
              <li>Discover real support for breakthrough and lasting change.</li>
            </ul>

            <h3 className='text-2xl font-bold mb-4'>Who Can Benefit:</h3>
            <ul className='list-disc pl-8 space-y-2 mb-8 text-lg'>
              <li>Those struggling to find solutions for health issues.</li>
              <li>Individuals seeking to overcome traumas, emotional triggers and stressors.</li>
              <li>Caregivers seeking effective ways to manage pain for chronic patients.</li>
              <li>Parents and teachers looking for increased energy and balance.</li>
              <li>Children seeking support to manage emotions.</li>
            </ul>

            <div className='bg-teal-50 p-8 rounded-lg mb-8'>
              <h3 className='text-2xl font-bold mb-4 text-center'>READY TO TAKE CHARGE OF YOUR WELL-BEING?</h3>
              <p className='text-center mb-6'>NEW CLIENTS, KINDLY FILL UP HERE AND I'D BE HAPPY TO RESPOND TO YOU.</p>
              <div className='flex justify-center'>
                <Link href='/register/energy-audit#registration-form' className='btn btn-primary'>
                  Register Today
                </Link>
              </div>
            </div>

            <h3 className='text-2xl font-bold mb-4'>Register Today and Receive:</h3>
            <ul className='list-disc pl-8 space-y-2 mb-8 text-lg'>
              <li>Clear Insights and a Detailed Report.</li>
              <li>Know Where You Stand.</li>
              <li>Gain access to expert energetic tools to overcome emotional, mental, and physical blockages.</li>
            </ul>

            <h3 className='text-2xl font-bold mb-4'>Fees:</h3>
            <ul className='list-none space-y-2 mb-8 text-lg'>
              <li>
                <strong>Consultation + Scan + Report:</strong> SGD$150 (60 minutes)
              </li>
              <li className='font-bold mt-4'>Existing Clients:</li>
              <li>• Scan + Report (Read Yourself): SGD$50</li>
              <li>• Scan + Report + 30mins Consultation: SGD$77 (60-minute consultation remains at SGD$150)</li>
            </ul>

            <h3 className='text-2xl font-bold mb-4'>Additional Charges:</h3>
            <p className='mb-8 text-lg'>The recommended remedy typically consists of 5 bottles of infoceuticals at SGD$30 each, plus shipping.</p>

            <h3 className='text-2xl font-bold mb-4'>MiHealth Device Purchase:</h3>
            <p className='mb-8 text-lg'>AUD$5,000</p>

            <div className='bg-gray-50 p-8 rounded-lg mb-8'>
              <h3 className='text-2xl font-bold mb-4 text-center'>What Our Clients Say</h3>
              <p className='italic text-center mb-6'>"Since taking the 2 rounds of infoceuticals I have been successful in discontinuing one long term medicine and significantly lowering the dose of the other... It is an incredible relief to have moved beyond the level of social anxiety that I would experience most days and which had gone on for many years."</p>
              <div className='text-center'>
                <p className='font-bold mb-4'>VICKY, SINGAPORE</p>
                <Link href='/testimonials' className='text-teal-600 hover:underline'>
                  Read More Testimonials
                </Link>
              </div>
            </div>

            <div className='flex justify-center mt-8'>
              <Link href='/discovery-call?service=energy-audit#discovery-form' className='btn btn-primary text-lg'>
                Set Up A Discovery Call Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
