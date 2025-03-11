import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SIOK KHOON</h3>
            <p className="mb-4">
              Restore your mental, physical and emotional health with Energy4Life - A Bioenergetic Healing System.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+6588825587" className="hover:underline">
                  +65 8882 5587
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:shivayaskp@gmail.com" className="hover:underline">
                  shivayaskp@gmail.com
                </a>
              </div>
              <div className="mt-4">
                <Link
                  href="/discovery-call?service=default#discovery-form"
                  className="btn bg-white text-teal-800 hover:bg-gray-100"
                >
                  Set Up Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-teal-700 text-center">
          <p>&copy; {new Date().getFullYear()} Siok Khoon Poh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

