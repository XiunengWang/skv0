import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function ProductsPage() {
  return (
    <>
      <section className='bg-gradient-to-r from-teal-500 to-blue-500 text-white'>
        <div className='container-custom py-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>PRODUCTS</h1>
          <p className='text-xl md:text-2xl'>Enhance your well-being with our curated selection</p>
        </div>
      </section>

      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold mb-8'>MiHealth Device</h2>

            <div className='bg-gray-50 p-8 rounded-lg mb-12'>
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2'>
                  <Image src='/images/new-miHealth.png' alt='MiHealth Device' width={300} height={400} className='rounded-lg w-full h-auto' />
                </div>
                <div className='md:w-1/2'>
                  <h3 className='text-2xl font-bold mb-4'>Award-Winning Technology</h3>
                  <p className='mb-4'>As a licensed practitioner of Energy4Life, I'm able to sell the MiHealth device to my clients. This powerful device combines PEMF, TENS, and SCENAR biofeedback technologies in one handheld unit.</p>
                  <p className='mb-4'>The MiHealth device is designed for both professional practitioners and home users who want to take control of their health and well-being.</p>
                  <p className='font-bold text-xl mb-2'>AUD$6,000</p>
                  {/* <p className='text-gray-600 mb-6'>(approximately SGD$4,600, USD$3,500, or EUR$3,200 depending on the exchange rate)</p> */}
                  <Link href='/discovery-call?service=purchaseMiHealth#discovery-form' className='btn btn-primary'>
                    Contact for Purchase
                  </Link>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold mb-8'>Recommended Products</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-2xl font-bold mb-4'>RENU28</h3>
                <div className='mb-4 flex justify-center'>
                  <Image src='/images/renu28.jpeg' alt='RENU28 Revitalizing Redox Gel' width={200} height={400} className='h-64 object-contain' />
                </div>
                <p className='mb-6'>RENU28 is a revolutionary skin gel that harnesses the power of redox signaling molecules to revitalize skin cells, promoting cellular health from the outside in.</p>
                <div className='grid grid-cols-2 gap-4'>
                  {' '}
                  {/* Add this wrapper div */}
                  <a
                    href='https://1800639445.myasealive.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-secondary w-full text-center' // Add w-full and text-center
                  >
                    Visit Website
                  </a>
                  <Link
                    href='/discovery-call?service=purchaseRenu28#discovery-form'
                    className='btn btn-primary w-full text-center' // Add w-full and text-center
                  >
                    Contact for Purchase
                  </Link>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-2xl font-bold mb-4'>OLYLIFE TERAHERTZ FOOT MACHINE</h3>
                <div className='mb-4 flex justify-center'>
                  <Image src='/images/olylife_P90.jpeg' alt='OLYLIFE TERAHERTZ FOOT MACHINE' width={400} height={400} className='h-64 object-contain' />
                </div>
                <p className='mb-6'>The OlyLife Terahertz Foot Machine uses advanced terahertz technology to promote circulation, reduce fatigue, and support overall foot health.</p>
                <div className='grid grid-cols-2 gap-4'>
                  {' '}
                  {/* Add this wrapper div */}
                  <a
                    href='https://olylifeglobal.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-secondary w-full text-center' // Add w-full and text-center
                  >
                    Visit Website
                  </a>
                  <Link
                    href='/discovery-call?service=purchaseOlylife#discovery-form'
                    className='btn btn-primary w-full text-center' // Add w-full and text-center
                  >
                    Contact for Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className='bg-teal-50 p-8 rounded-lg text-center'>
              <h3 className='text-2xl font-bold mb-4'>Looking for Something Specific?</h3>
              <p className='mb-6'>If you're interested in other health and wellness products not listed here, please don't hesitate to reach out. I can provide recommendations based on your specific needs.</p>
              <Link href='/discovery-call?service=default#discovery-form' className='btn btn-primary'>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
