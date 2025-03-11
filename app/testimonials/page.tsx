import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function TestimonialsPage() {
  return (
    <>
      <section className='bg-gradient-to-r from-teal-500 to-blue-500 text-white'>
        <div className='container-custom py-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>TESTIMONIALS</h1>
          <p className='text-xl md:text-2xl'>Hear from those who have experienced the benefits of Energy4Life.</p>
        </div>
      </section>

      <section className='section bg-white'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto space-y-12'>
            {/* Testimonial 1 */}
            <Card className='overflow-hidden'>
              <CardContent className='p-0'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                  <div className='bg-teal-50 p-6 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-24 h-24 rounded-full bg-teal-100 mx-auto mb-4 overflow-hidden'>
                        <Image src='/images/Vickey.jpg?height=96&width=96' alt='Vicky' width={96} height={96} className='object-cover' />
                      </div>
                      <p className='font-bold text-lg'>VICKY</p>
                      <p>SINGAPORE</p>
                    </div>
                  </div>
                  <div className='md:col-span-2 p-8'>
                    <p className='italic text-lg mb-6'>
                      "Since taking the 2 rounds of infoceuticals I have been successful in discontinuing one long term medicine and significantly lowering the dose of the other... It is an incredible relief to have moved beyond the level of social anxiety that I would experience most days and which had gone on for many years.
                      <br />
                      <br />
                      The infoceuticals have been a game-changer for me. After years of struggling with anxiety and medication dependence, I've finally found a solution that works at the root cause. The Energy4Life approach has given me a new lease on life, and I'm grateful every day for the transformation I've experienced."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className='overflow-hidden'>
              <CardContent className='p-0'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                  <div className='bg-teal-50 p-6 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-24 h-24 rounded-full bg-teal-100 mx-auto mb-4 overflow-hidden'>
                        <Image src='/images/Terence.jpg?height=96&width=96' alt='Terence' width={96} height={96} className='object-cover' />
                      </div>
                      <p className='font-bold text-lg'>TERENCE</p>
                      <p>HONG KONG</p>
                    </div>
                  </div>
                  <div className='md:col-span-2 p-8'>
                    <p className='italic text-lg mb-6'>
                      "It's really amazing that my finger is no longer triggered in the past 3 days, though still have mild and transient stiffness in the morning. The triggering should be mechanical and underlying cause is inflammation. How the electromagnetic field therapy works probably is beyond my knowledge.
                      <br />
                      <br />
                      I've consulted with multiple specialists about my finger condition, and none of the conventional treatments provided lasting relief. After just one session with the MiHealth device, I noticed a significant improvement. Three days later, the triggering has completely stopped. As a medical professional myself, I'm both surprised and impressed by the effectiveness of this approach."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className='overflow-hidden'>
              <CardContent className='p-0'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                  <div className='bg-teal-50 p-6 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-24 h-24 rounded-full bg-teal-100 mx-auto mb-4 overflow-hidden'>
                        <Image src='/images/JolynTan.jpg?height=96&width=96' alt='Jolyn Tan' width={96} height={96} className='object-cover' />
                      </div>
                      <p className='font-bold text-lg'>JOLYN TAN</p>
                      <p>SINGAPORE</p>
                    </div>
                  </div>
                  <div className='md:col-span-2 p-8'>
                    <p className='italic text-lg mb-6'>
                      "As a parent who seeks natural remedies, Energy4Life is like a mini-doctor at home.... I've witnessed improvements in their overall well-being, be it better immunity or faster recovery from illness or increased mental strength.
                      <br />
                      <br />
                      My children used to catch every cold and flu that went around their school. Since incorporating Energy4Life into our wellness routine, their immune systems have strengthened remarkably. They recover faster when they do get sick, and they have more energy and mental clarity for their studies and activities. The MiHealth device has become an essential part of our family's health maintenance."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className='overflow-hidden'>
              <CardContent className='p-0'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                  <div className='bg-teal-50 p-6 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-24 h-24 rounded-full bg-teal-100 mx-auto mb-4 overflow-hidden'>
                        <Image src='/images/Michael.jpg?height=96&width=96' alt='Michael' width={96} height={96} className='object-cover' />
                      </div>
                      <p className='font-bold text-lg'>MICHAEL</p>
                      <p>AUSTRALIA</p>
                    </div>
                  </div>
                  <div className='md:col-span-2 p-8'>
                    <p className='italic text-lg mb-6'>
                      "I was skeptical at first, but after my energy audit revealed emotional patterns I hadn't even recognized in myself, I was convinced. The infoceuticals prescribed helped me process grief I'd been carrying for years after losing my mother. I feel lighter, more present, and more capable of joy than I have in a decade.
                      <br />
                      <br />
                      What impressed me most was how the scan identified issues I hadn't mentioned to anyone. It was like the technology could see right through me to the core of my emotional challenges. The healing process was gentle but profound, and I continue to experience benefits months after completing my protocol."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className='overflow-hidden'>
              <CardContent className='p-0'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                  <div className='bg-teal-50 p-6 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='w-24 h-24 rounded-full bg-teal-100 mx-auto mb-4 overflow-hidden'>
                        <Image src='/images/Linda.jpg?height=96&width=96' alt='Linda' width={96} height={96} className='object-cover' />
                      </div>
                      <p className='font-bold text-lg'>LINDA</p>
                      <p>UNITED STATES</p>
                    </div>
                  </div>
                  <div className='md:col-span-2 p-8'>
                    <p className='italic text-lg mb-6'>
                      "The Birthday Blessings service was a gift from my daughter. I was turning 60 and feeling apprehensive about aging. The frequencies I received during my birthday month helped me process my fears and embrace this new chapter with excitement instead of dread. It was the most meaningful birthday gift I've ever received.
                      <br />
                      <br />
                      Each session felt like a gentle wave washing over me, clearing away old patterns and bringing in fresh energy. By my actual birthday, I felt renewed and ready to embrace the next decade with enthusiasm rather than resignation. I've recommended this service to all my friends approaching milestone birthdays."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='text-center mt-16'>
            <h2 className='text-2xl font-bold mb-6'>Experience the Benefits Yourself</h2>
            <Link href='/discovery-call?service=default#discovery-form' className='btn btn-primary text-lg'>
              Set Up A Discovery Call Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
