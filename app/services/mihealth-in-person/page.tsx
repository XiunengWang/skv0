import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function MiHealthInPersonPage() {
  return (
    <>
      <section className='bg-gradient-to-r from-teal-500 to-blue-500 text-white'>
        <div className='container-custom py-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>MIHEALTH IN-PERSON</h1>
          <p className='text-xl md:text-2xl'>Up-level your health and simplify your life with the award-winning MiHealth device.</p>
        </div>
      </section>

      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-8 flex justify-center'>
              <Image src='/images/MiHealthInPerson-Service.jpg' alt='MiHealth In-Person Service - Person using device' width={600} height={600} className='rounded-lg w-full max-w-md h-auto' priority />
            </div>

            <p className='text-lg mb-6'>Experience the power of the award-winning MiHealth device, incorporating PEMF, TENS, and SCENAR biofeedback technologies. This innovative device helps to:</p>

            <ul className='list-disc pl-8 space-y-3 mb-8 text-lg'>
              <li>
                <strong>Harmonize and Rejuvenate:</strong> Correct your body's energy field, release energetic blockages, and re-educate energy flow for optimal balance and well-being.
              </li>
              <li>
                <strong>Boost Cellular Regeneration:</strong> Stimulate stem cell production, promoting natural healing and tissue repair.
              </li>
              <li>
                <strong>Enhance Immune Function:</strong> Support a normal immune system response, strengthening your body's natural defenses.
              </li>
              <li>
                <strong>Optimize Circulation:</strong> Promote healthy circulation, delivering essential nutrients and oxygen throughout your body.
              </li>
              <li>
                <strong>Support Healthy Blood Pressure:</strong> Contribute to healthy blood pressure levels, supporting cardiovascular health.
              </li>
              <li>
                <strong>Increase Oxygen Absorption:</strong> Enhance cellular oxygen absorption, boosting energy levels and vitality.
              </li>
            </ul>

            <div className='bg-teal-50 p-8 rounded-lg mb-8'>
              <h3 className='text-2xl font-bold mb-4'>MiHealth Effectiveness</h3>
              <p className='text-lg mb-4'>
                <strong>MiHealth scores 93% EFFECTIVENESS IN OUTCOME STUDY</strong>
              </p>
              <p className='text-lg'>Based on NES HEALTH research, in just one session, 88% of participants noticed benefits. After a second session, 93% felt their treatment was successful - when other modalities used previously hadn't worked.</p>
            </div>

            <div className='bg-gray-100 p-8 rounded-lg mb-8'>
              <h3 className='text-2xl font-bold mb-4'>Fees:</h3>
              <p className='text-xl'>SGD$150 / 60mins session</p>
              <p className='mt-4'>
                <a href='https://wa.me/6588825587' className='text-teal-600 hover:underline'>
                  Whatsapp to schedule: +65 8882-5587
                </a>
              </p>
            </div>

            <div className='bg-gray-50 p-8 rounded-lg mb-8'>
              <h3 className='text-2xl font-bold mb-4 text-center'>What Our Clients Say</h3>
              <p className='italic text-center mb-6'>"It's really amazing that my finger is no longer triggered in the past 3 days, though still have mild and transient stiffness in the morning. The triggering should be mechanical and underlying cause is inflammation. How the electromagnetic field therapy works probably is beyond my knowledge."</p>
              <div className='text-center'>
                <p className='font-bold mb-4'>TERENCE, HONG KONG</p>
                <Link href='/testimonials' className='text-teal-600 hover:underline'>
                  Read More Testimonials
                </Link>
              </div>
            </div>

            <div className='flex justify-center mt-8'>
              <Link href='/discovery-call?service=mihealth#discovery-form' className='btn btn-primary text-lg'>
                Set Up A Discovery Call Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
