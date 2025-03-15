import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function BirthdayBlessingsPage() {
  return (
    <>
      <section className='bg-gradient-to-r from-teal-500 to-blue-500 text-white'>
        <div className='container-custom py-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>BIRTHDAY BLESSINGS FOR THE SOUL</h1>
          <p className='text-xl md:text-2xl'>Start a new birth year with greater consciousness and grace!</p>
        </div>
      </section>

      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-8 flex justify-center'>
              <Image src='/images/Blessings-Service.webp' alt='Birthday Blessings Service - Peaceful spa setting with flowers' width={800} height={800} className='rounded-lg w-full max-w-2xl h-auto' priority />
            </div>

            <p className='text-lg mb-8'>This special spiritual and emotional blessing service is designed to support you and your loved ones as you embark on a new chapter in life. During your birthday season, you'll receive loving and compassionate frequencies that foster an open heart, peace of mind, and a deeper connection to your higher self.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
              <div className='bg-teal-50 p-6 rounded-lg'>
                <h3 className='text-xl font-bold mb-4'>One Month Before Your Birthday</h3>
                <p className='mb-4'>Often referred to as the "dark moon" phase, you may experience a period of introspection, confronting shadows and areas in need of healing.</p>
                <p className='mb-4'>Embrace this beautiful opportunity for self-reflection, taking stock of the past year and gently releasing anything that no longer serves your highest good.</p>
                <p className='mb-4'>To support your release process, you will receive two frequencies, each for 30 minutes:</p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>
                    <strong>Liberator:</strong> A potent frequency that releases trauma by bringing hidden emotions into conscious awareness.
                  </li>
                  <li>
                    <strong>Emotional Stress Release:</strong> This frequency ensures a gentle and smooth release, alleviating emotional burdens as they dissolve.
                  </li>
                </ul>
              </div>

              <div className='bg-teal-50 p-6 rounded-lg'>
                <h3 className='text-xl font-bold mb-4'>Midway to Your Birthday</h3>
                <p className='mb-4'>This is a time of movement and flow in your life, where things begin to align.</p>
                <p className='mb-4'>To support you during this vibrant period, you will receive:</p>
                <ul className='list-disc pl-6 space-y-2'>
                  <li>A 27-minute "Chakra" frequency to support and energize your body's energy centers.</li>
                  <li>A 30-minute "Energy Alignment" frequency to harmonize your energetic body with the Earth and clear away any unwanted energies.</li>
                </ul>
              </div>

              <div className='bg-teal-50 p-6 rounded-lg'>
                <h3 className='text-xl font-bold mb-4'>One Day Before Your Birthday</h3>
                <p>As your birthday approaches, clarity and hopefulness begin to blossom.</p>
                <p>You will receive the "Rejuvenation" frequency to support you as you prepare for the new year ahead.</p>
              </div>

              <div className='bg-teal-50 p-6 rounded-lg'>
                <h3 className='text-xl font-bold mb-4'>On Your Birthday</h3>
                <p>On your special day, experience the highest "Love" frequency, allowing unconditional love to warmly anchor within your being.</p>
              </div>
            </div>

            <div className='bg-gray-100 p-8 rounded-lg text-center mb-8'>
              <h3 className='text-2xl font-bold mb-4'>Book Now for yourself or as a gift for someone dear!</h3>
              <p className='mb-4'>Whatsapp +6588825587 to schedule a Zoom call to discuss more about frequencies that are appropriate for you and your family.</p>
              <p className='text-xl font-bold'>SGD 162 / USD 123 / EUR 111</p>
            </div>

            <div className='bg-gray-50 p-8 rounded-lg mb-8'>
              <h3 className='text-2xl font-bold mb-4 text-center'>What Our Clients Say</h3>
              <p className='italic text-center mb-6'>"The Birthday Blessings service was a gift from my daughter. I was turning 60 and feeling apprehensive about aging. The frequencies I received during my birthday month helped me process my fears and embrace this new chapter with excitement instead of dread. It was the most meaningful birthday gift I've ever received."</p>
              <div className='text-center'>
                <p className='font-bold mb-4'>LINDA, UNITED STATES</p>
                <Link href='/testimonials' className='text-teal-600 hover:underline'>
                  Read More Testimonials
                </Link>
              </div>
            </div>

            <div className='flex justify-center mt-8'>
              <Link href='/discovery-call?service=birthday-blessings#discovery-form' className='btn btn-primary text-lg'>
                Set Up A Discovery Call Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
