import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Phone, Mail } from 'lucide-react'
import TestimonialCard from '../components/testimonial-card'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-teal-500 to-blue-500 text-white'>
        <div className='container-custom py-20 md:py-28'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>RESTORE YOUR MENTAL, PHYSICAL AND EMOTIONAL HEALTH</h1>
            <p className='text-xl md:text-2xl mb-8'>Energy4Life - A Bioenergetic Healing System</p>
            <Link href='/discovery-call?service=default#discovery-form' className='btn bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4'>
              Set Up A Discovery Call Today
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>HEALTHIER LIVING, MADE EASIER.</h2>
            <p className='text-lg mb-6'>For dedicated health seekers, it's often hard to believe that the answers we've been searching for are right here, within reach. Science has made incredible advancements, allowing us to seamlessly blend ancient wisdom of wellness into a comprehensive health prevention system.</p>
            <p className='text-lg mb-6'>This innovative Energy4Life approach makes healthier living significantly easier, literally at our fingertips. The way we approach health is evolving, and this new paradigm offers a fresh perspective.</p>
            <p className='text-lg mb-8'>Give it a try. You might be surprised by the hidden blockages you uncover and the simple steps that can dramatically change the trajectory of your life.</p>
            <Link href='/discovery-call?service=default#discovery-form' className='btn btn-primary text-lg'>
              Set Up A Discovery Call Today
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className='section bg-gray-50'>
        <div className='container-custom'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>SERVICES</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Energy Audit Card */}
            <Card className='bg-white shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <CardTitle>Energy Audit</CardTitle>
                <CardDescription>(Online or In person)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='mb-4 flex justify-center'>
                  <Image src={'/images/energyAudit.webp'} alt='Energy Audit Visualization' width={400} height={400} className='rounded-lg h-48 object-cover w-full' />
                </div>
                <p className='mb-4'>Unlock the Secrets of Your Energy with Our Cutting-Edge E4L Bioenergetic Scan. Using your voice, discover hidden traumas impacting your vitality and well-being, identify recurring thought patterns that are limiting your potential, and discover real support for breakthrough and lasting change.</p>
              </CardContent>
              <CardFooter>
                <Link href='/services/energy-audit' className='btn btn-secondary w-full text-center'>
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
                <div className='mb-4 flex justify-center'>
                  <Image src='/images/MiHealthInPerson.jpg' alt='MiHealth Device' width={200} height={300} className='rounded-lg h-48 object-contain' />
                </div>
                <p className='mb-4'>Up-level your health and simplify your life with the award-winning MiHealth device. Experience the power of PEMF, TENS, and SCENAR biofeedback technologies, all integrated into one innovative device designed to enhance your well-being.</p>
              </CardContent>
              <CardFooter>
                <Link href='/services/mihealth-in-person' className='btn btn-secondary w-full text-center'>
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
                <div className='mb-4 flex justify-center'>
                  <Image src='/images/BirthdayBlessings.webp' alt='Birthday Blessings' width={400} height={400} className='rounded-lg h-48 object-cover w-full' />
                </div>
                <p className='mb-4'>Start a new birth year with greater consciousness and grace! Using the MiHealth device, receive 4 hours of focused frequency support during your birthday season, all delivered with the highest intention.</p>
              </CardContent>
              <CardFooter>
                <Link href='/services/birthday-blessings' className='btn btn-secondary w-full text-center'>
                  Learn More
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* MiHealth Beauty Care */}
            <div className='bg-gray-50 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold mb-4'>MIHEALTH BEAUTY CARE</h3>
              <div className='mb-4 flex justify-center'>
                <Image src='/images/BeautyCare.webp' alt='MiHealth Beauty Care' width={400} height={400} className='rounded-lg h-48 object-cover w-full' />
              </div>
              <p className='mb-4'>Discover how to use the MiHealth device to enhance your beauty regimen, both for yourself and others, with simple protocols.</p>
            </div>

            {/* Travelling with Confidence */}
            <div className='bg-gray-50 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold mb-4'>TRAVELLING WITH CONFIDENCE</h3>
              <div className='mb-4 flex justify-center'>
                <Image src='/images/Travel-With-Confidence.jpeg' alt='Travelling with Confidence' width={400} height={400} className='rounded-lg h-48 object-cover w-full' />
              </div>
              <p className='mb-4'>Discover how the MiHealth device can enhance your travels! Learn which infoceuticals to pack to help you:</p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Beat Jet Lag: Adjust to new time zones faster and feel refreshed upon arrival.</li>
                <li>Boost Your Immunity: Stay healthy and prevent flus and colds while traveling.</li>
                <li>Energize Your Adventures: Stay energized and ready to explore, no matter where you go.</li>
              </ul>
            </div>

            {/* MiHealth Training Courses */}
            <div className='bg-gray-50 p-8 rounded-lg md:col-span-2'>
              <h3 className='text-2xl font-bold mb-4'>MIHEALTH TRAINING COURSES (Coming soon!)</h3>
              <div className='mb-4 flex justify-center'>
                <Image
                  // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TrainingCourses-Pn0cHmkFZyVsYfS1Y4qDui4IBhU0PM.webp"
                  src='/images/training.webp'
                  alt='MiHealth Training Courses'
                  width={400}
                  height={200}
                  className='rounded-lg h-48 object-cover w-full'
                />
              </div>
              <p className='mb-4'>Empowering Practitioners and Individuals. Learn advanced techniques for both professional practice and personal well-being.</p>
              <Link href='/waitlist/mihealth-training#waitlist-form' className='btn btn-secondary'>
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className='section bg-gray-50'>
        <div className='container-custom'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>PRODUCTS</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* MiHealth Device */}
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>MIHEALTH DEVICE</h3>
              <div className='mb-4 flex justify-center'>
                {/* <Image src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new-miHealth-249x300-OHHaYW5RvWzZNQujVlAYF6O7E7rhQ0.png' alt='MiHealth Device' width={200} height={300} className='h-48 object-contain' /> */}
                <Image src='/images/new-miHealth.png' alt='MiHealth Device' width={200} height={300} className='h-48 object-contain' />
              </div>
              <p className='mb-6'>As a licensed practitioner of Energy4Life, I'm able to sell the MiHealth device to my clients. If you're interested in learning more about it and purchasing one, please don't hesitate to contact me.</p>
              <p className='font-bold text-xl mb-4'>AUD5,200</p>
              <p className='text-gray-600 mb-6'>(approximately SGD$4,600, USD$3,500, or EUR$3,200 depending on the exchange rate)</p>
              <Link href='/discovery-call?service=purchase#discovery-form' className='btn btn-primary'>
                Contact for Purchase
              </Link>
            </div>

            {/* Other Products */}
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>RECOMMENDED PRODUCTS</h3>
              <div className='grid grid-cols-2 gap-4 mb-6'>
                <div className='flex justify-center'>
                  <Image src='/images/renu28.jpeg' alt='RENU28' width={100} height={200} className='h-32 object-contain' />
                </div>
                <div className='flex justify-center'>
                  <Image src='/images/olylife_P90.jpeg' alt='OLYLIFE TERAHERTZ FOOT MACHINE' width={200} height={200} className='h-32 object-contain' />
                </div>
              </div>
              <p className='mb-6'>The following energetic products have been making a real difference for me, and I think they could be a great fit for you too! If you decide to check them out, please use this link to sign up and support me as a referral. They ship worldwide!</p>

              <div className='space-y-6'>
                <div>
                  <h4 className='text-xl font-bold mb-2'>RENU28</h4>
                  <a href='https://1800639445.myasealive.com/' target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:underline'>
                    Visit Website
                  </a>
                </div>

                <div>
                  <h4 className='text-xl font-bold mb-2'>OLYLIFE TERAHERTZ FOOT MACHINE</h4>
                  <a href='https://olylifeglobal.com/' target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:underline block mb-2'>
                    Read More
                  </a>
                  <p>For purchase inquiry, please contact me directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='section bg-white'>
        <div className='container-custom'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>TESTIMONIALS</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Testimonial 1 */}
            <TestimonialCard quote='Since taking the 2 rounds of infoceuticals I have been successful in discontinuing one long term medicine and significantly lowering the dose of the other... It is an incredible relief to have moved beyond the level of social anxiety that I would experience most days and which had gone on for many years.' name='VICKY' location='SINGAPORE' showReadMore={true} />

            {/* Testimonial 2 */}
            <TestimonialCard quote="It's really amazing that my finger is no longer triggered in the past 3 days, though still have mild and transient stiffness in the morning. The triggering should be mechanical and underlying cause is inflammation. How the electromagnetic field therapy works probably is beyond my knowledge." name='TERENCE' location='HONG KONG' showReadMore={false} />

            {/* Testimonial 3 */}
            <TestimonialCard quote="As a parent who seeks natural remedies, Energy4Life is like a mini-doctor at home.... I've witnessed improvements in their overall well-being, be it better immunity or faster recovery from illness or increased mental strength." name='JOLYN TAN' location='SINGAPORE' showReadMore={true} />
          </div>

          <div className='text-center mt-8'>
            <Link href='/testimonials' className='btn btn-secondary'>
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className='section bg-teal-600 text-white'>
        <div className='container-custom text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8'>GET IN TOUCH</h2>
          <div className='flex flex-col md:flex-row justify-center items-center gap-6 mb-8'>
            <a href='tel:+6588825587' className='text-xl hover:underline flex items-center'>
              <Phone size={24} className='mr-2' /> +65 8882 5587
            </a>
            <a href='mailto:shivayaskp@gmail.com' className='text-xl hover:underline flex items-center'>
              <Mail size={24} className='mr-2' /> shivayaskp@gmail.com
            </a>
          </div>
          <Link href='/discovery-call?service=default#discovery-form' className='btn bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4'>
            SET UP DISCOVERY CALL
          </Link>
        </div>
      </section>
    </>
  )
}
