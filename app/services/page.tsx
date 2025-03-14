import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'

export default function ServicesPage() {
  return (
    <>
      <section className='bg-gradient-to-r from-teal-500 to-blue-500 text-white'>
        <div className='container-custom py-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>SERVICES</h1>
          <p className='text-xl md:text-2xl'>Discover our range of bioenergetic healing services.</p>
        </div>
      </section>

      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {/* Energy Audit Card */}
            <Card className='bg-white shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <CardTitle>Energy Audit (Online/In person)</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <Image src='/images/EnergyAudit-Service3.jpg?height=200&width=400' alt='Energy Audit' width={400} height={200} className='rounded-lg mb-4 w-full' />
                <p className='mb-4'>Unlock the Secrets of Your Energy with Our Cutting-Edge E4L Bioenergetic Scan. Using your voice, discover hidden traumas impacting your vitality and well-being, identify recurring thought patterns that are limiting your potential, and discover real support for breakthrough and lasting change.</p>
              </CardContent>
              <CardFooter>
                <Link href='/services/energy-audit' className='btn btn-primary w-full text-center'>
                  Learn More
                </Link>
              </CardFooter>
            </Card>

            {/* MiHealth In-Person Card */}
            <Card className='bg-white shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <CardTitle>MiHealth In-Person</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src='/images/MiHealthInPerson.jpg?height=200&width=400' alt='MiHealth In-Person' width={400} height={200} className='rounded-lg mb-4 w-full' />
                <p className='mb-4'>Up-level your health and simplify your life with the award-winning MiHealth device. Experience the power of PEMF, TENS, and SCENAR biofeedback technologies, all integrated into one innovative device designed to enhance your well-being.</p>
              </CardContent>
              <CardFooter>
                <Link href='/services/mihealth-in-person' className='btn btn-primary w-full text-center'>
                  Learn More
                </Link>
              </CardFooter>
            </Card>

            {/* Birthday Blessings Card */}
            <Card className='bg-white shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <CardTitle>Birthday Blessings for the Soul</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src='/images/Blessings-Service.webp?height=200&width=400' alt='Birthday Blessings' width={400} height={200} className='rounded-lg mb-4 w-full' />
                <p className='mb-4'>Start a new birth year with greater consciousness and grace! Using the MiHealth device, receive 4 hours of focused frequency support during your birthday season, all delivered with the highest intention.</p>
              </CardContent>
              <CardFooter>
                <Link href='/services/birthday-blessings' className='btn btn-primary w-full text-center'>
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          </div>

          <h2 className='text-3xl font-bold text-center mb-8'>Additional Services</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16'>
            {/* MiHealth Beauty Care */}
            <div className='bg-gray-50 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold mb-4'>MIHEALTH BEAUTY CARE</h3>
              <p className='mb-4'>Discover how to use the MiHealth device to enhance your beauty regimen, both for yourself and others, with simple protocols.</p>
              <p className='mb-4'>The MiHealth device can help improve skin tone, reduce the appearance of fine lines and wrinkles, and promote a healthy, radiant complexion through its advanced bioenergetic technology.</p>
              <Link href='/contact' className='btn btn-secondary'>
                Inquire About Beauty Care
              </Link>
            </div>

            {/* Travelling with Confidence */}
            <div className='bg-gray-50 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold mb-4'>TRAVELLING WITH CONFIDENCE</h3>
              <p className='mb-4'>Discover how the MiHealth device can enhance your travels! Learn which infoceuticals to pack to help you:</p>
              <ul className='list-disc pl-5 space-y-2 mb-6'>
                <li>Beat Jet Lag: Adjust to new time zones faster and feel refreshed upon arrival.</li>
                <li>Boost Your Immunity: Stay healthy and prevent flus and colds while traveling.</li>
                <li>Energize Your Adventures: Stay energized and ready to explore, no matter where you go.</li>
              </ul>
              <Link href='/contact' className='btn btn-secondary'>
                Learn Travel Support Options
              </Link>
            </div>

            {/* MiHealth Training Courses */}
            <div className='bg-gray-50 p-8 rounded-lg md:col-span-2'>
              <h3 className='text-2xl font-bold mb-4'>MIHEALTH TRAINING COURSES (Coming soon!)</h3>
              <p className='mb-4'>Empowering Practitioners and Individuals. Learn advanced techniques for both professional practice and personal well-being.</p>
              <p className='mb-4'>Our comprehensive training courses will cover everything from basic operation to advanced protocols, helping you maximize the benefits of your MiHealth device for yourself, your family, or your clients.</p>
              <Link href='/waitlist/mihealth-training#waitlist-form' className='btn btn-secondary'>
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
