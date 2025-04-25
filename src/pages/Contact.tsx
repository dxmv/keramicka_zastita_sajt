"use client"

import type React from "react"
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

import SectionHeading from "../components/SectionHeading"

const Contact = () => {
  return (
    <div className="py-12">
      <SectionHeading
        title="Contact Us"
        subtitle="Get in touch with our team to schedule your appointment or ask any questions."
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
                <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                <p className="text-grey-200">
                  123 Detailing Street
                  <br />
                  Cartown, CT 12345
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
                <h3 className="text-xl font-bold text-white mb-2">Phone Number</h3>
                <p className="text-grey-200">
                  <a href="tel:+15551234567" className="hover:text-yellow-500 transition-colors">
                    (555) 123-4567
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
                <h3 className="text-xl font-bold text-white mb-2">Working Hours</h3>
                <div className="text-grey-200 grid grid-cols-2 gap-2">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                  <span>Saturday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                  <span>Sunday:</span>
                  <span>Closed</span>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215175515187!2d-73.98784492426285!3d40.75798657138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ShineMasters Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Links - Larger and below both columns */}
      <div className="mt-12 bg-navy-900 rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect With Us</h3>
        <div className="flex justify-center space-x-8">
          <SocialLink href="https://facebook.com" icon={<Facebook size={40} />} label="Facebook" />
          <SocialLink href="https://instagram.com" icon={<Instagram size={40} />} label="Instagram" />
          <SocialLink href="https://twitter.com" icon={<Twitter size={40} />} label="Twitter" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={40} />} label="LinkedIn" />
        </div>
      </div>

      {/* JSON-LD for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDetailing",
            name: "ShineMasters",
            image: "https://example.com/photos/1x1/photo.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Detailing Street",
              addressLocality: "Cartown",
              addressRegion: "CT",
              postalCode: "12345",
              addressCountry: "US",
            },
            telephone: "+15551234567",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "17:00",
              },
            ],
          }),
        }}
      />
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
