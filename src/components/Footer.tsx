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
              <SocialIcon href="https://www.instagram.com/keramicka_zastita_sd/" icon={<Instagram size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Linkovi</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Početna</FooterLink>
              <FooterLink to="/services">Usluge</FooterLink>
              <FooterLink to="/gallery">Galerija</FooterLink>
              <FooterLink to="/contact">Kontakt</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Naše Usluge</h4>
            <ul className="space-y-2">
              <FooterLink to="/services#exterior">Eksterijer Detalj</FooterLink>
              <FooterLink to="/services#interior">Interijer Detalj</FooterLink>
              <FooterLink to="/services#ceramic">Keramičko Postavljanje</FooterLink>
              <FooterLink to="/services#paint">Popravka Lakova</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Kontaktirajte Nas</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <span>Kolarska, Smederevo</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-yellow-500 flex-shrink-0" size={18} />
                <a href="tel:0646140065" className="hover:text-yellow-500 transition-colors">
                  064 614 0065
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <span>10:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Keramicka Zaštita Smederevo. All rights reserved.</p>
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
