import type React from "react"
import { Link } from "react-router"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-grey-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              SHINE<span className="text-yellow-500">MASTERS</span>
            </h3>
            <p className="mb-4">
              Professional car detailing services that bring your vehicle back to showroom condition.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialIcon href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <FooterLink to="/services#exterior">Exterior Detailing</FooterLink>
              <FooterLink to="/services#interior">Interior Detailing</FooterLink>
              <FooterLink to="/services#ceramic">Ceramic Coating</FooterLink>
              <FooterLink to="/services#paint">Paint Correction</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <span>123 Detailing Street, Cartown, CT 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-yellow-500 flex-shrink-0" size={18} />
                <a href="tel:+15551234567" className="hover:text-yellow-500 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-yellow-500 flex-shrink-0" size={18} />
                <a href="mailto:info@shinemasters.com" className="hover:text-yellow-500 transition-colors">
                  info@shinemasters.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <span>
                  Mon-Fri: 8am-6pm
                  <br />
                  Sat: 9am-5pm
                  <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ShineMasters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-500 hover:text-yellow-300 transition-colors"
    >
      {icon}
    </a>
  )
}

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link to={to} className="hover:text-yellow-500 transition-colors">
        {children}
      </Link>
    </li>
  )
}

export default Footer
