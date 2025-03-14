'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container-custom py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-2xl font-bold text-teal-600'>
            SIOK KHOON
          </Link>

          {/* Mobile menu button */}
          <button className='md:hidden p-2' onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link href='/' className='font-medium hover:text-teal-600 transition-colors'>
              Home
            </Link>
            <Link href='/services' className='font-medium hover:text-teal-600 transition-colors'>
              Services
            </Link>
            <Link href='/products' className='font-medium hover:text-teal-600 transition-colors'>
              Products
            </Link>
            <Link href='/testimonials' className='font-medium hover:text-teal-600 transition-colors'>
              Testimonials
            </Link>
            {/* <Link href="/contact" className="font-medium hover:text-teal-600 transition-colors">
              Contact
            </Link> */}
            <Link href='/discovery-call?service=default#discovery-form' className='btn btn-primary'>
              Enquiry
            </Link>
            <Link href='https://www.e4l.com/p/?id=siokkhoonpoh' className='font-medium hover:text-teal-600 transition-colors' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
              e4l Contact
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className='md:hidden mt-4 pb-2 space-y-4'>
            <Link href='/' className='block py-2 font-medium hover:text-teal-600 transition-colors' onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href='/services' className='block py-2 font-medium hover:text-teal-600 transition-colors' onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href='/products' className='block py-2 font-medium hover:text-teal-600 transition-colors' onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link href='/testimonials' className='block py-2 font-medium hover:text-teal-600 transition-colors' onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href='/discovery-call?service=default#discovery-form' className='block py-2 btn btn-primary w-full text-center' onClick={() => setIsMenuOpen(false)}>
              Discovery Call
            </Link>
            <Link href='https://www.e4l.com/p/?id=siokkhoonpoh' className='block py-2 font-medium hover:text-teal-600 transition-colors' onClick={() => setIsMenuOpen(false)}>
              e4l Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
