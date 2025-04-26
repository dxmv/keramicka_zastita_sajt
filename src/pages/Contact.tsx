"use client"

import type React from "react"
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

import SectionHeading from "../components/SectionHeading"

const Contact = () => {
  return (
    <div className="py-12 px-20">
      <SectionHeading
        title="Kontakt"
        subtitle="Kontaktirajte nas za rezervaciju ili bilo kakva pitanja."
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Information Cards */}
        <div className="space-y-6">
          {/* Location Card */}
          <div className="bg-navy-900 text-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
            <div className="flex items-start">
              <div className="bg-navy-700 p-3 rounded-full mr-4">
                <MapPin className="text-yellow-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Lokacija</h3>
                <p className="text-grey-200">
                  Kolarska, Smederevo 11300
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-navy-900 text-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
            <div className="flex items-start">
              <div className="bg-navy-700 p-3 rounded-full mr-4">
                <Phone className="text-yellow-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Broj Telefona</h3>
                <p className="text-grey-200">
                  <a href="tel:0646140065" className="hover:text-yellow-500 transition-colors">
                    064 614 0065
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-navy-900 text-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
            <div className="flex items-start">
              <div className="bg-navy-700 p-3 rounded-full mr-4">
                <Clock className="text-yellow-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Radno Vreme</h3>
                <div className="text-grey-200 grid grid-cols-2 gap-2">
                  <span>10:00 - 19:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map and Form */}
        <div>
          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-100 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.6969816121887!2d20.901826599999996!3d44.62367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67fd180f871bc0b1%3A0xa3dae3f74709788c!2sKeramicka%20Zastita%20SD!5e0!3m2!1sen!2srs!4v1745694348412!5m2!1sen!2srs"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Links - Larger and below both columns */}
      {/* <div className="mt-12 bg-navy-900 rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect With Us</h3>
        <div className="flex justify-center space-x-8">
          <SocialLink href="https://facebook.com" icon={<Facebook size={40} />} label="Facebook" />
          <SocialLink href="https://instagram.com" icon={<Instagram size={40} />} label="Instagram" />
          <SocialLink href="https://twitter.com" icon={<Twitter size={40} />} label="Twitter" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={40} />} label="LinkedIn" />
        </div>
      </div> */}
    </div>
  )
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-500 hover:text-yellow-300 transition-all hover:scale-110"
      aria-label={label}
    >
      <div className="bg-navy-900 p-3 rounded-full">{icon}</div>
    </a>
  )
}

export default Contact
