import type React from "react"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  image: string
  links?: { text: string; url: string }[]
}

const ServiceCard = ({ id, name, description, icon, image, links = [] }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl">
      {/* Image container with overflow for the image to extend beyond card borders */}
      <div className="relative h-48 overflow-hidden">
        {/* Image with hover effect */}
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/50"></div>

        {/* Icon overlapping the image */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
          <div className="text-navy-900 w-16 h-16 flex items-center justify-center">{icon}</div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-12 pb-6 px-6 text-center flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold mb-3 text-navy-900">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Links */}
        {links.length > 0 && (
          <div className="space-y-2">
            {links.map((link, index) => (
              <Link key={index} to={link.url} className="block text-navy-700 hover:text-yellow-500 transition-colors">
                {link.text}
              </Link>
            ))}
          </div>
        )}

        {/* View more link */}
        <Link
          to={`/paketi`}
          className="inline-flex justify-self-end items-center text-yellow-500 font-medium mt-auto hover:text-yellow-600 transition-colors"
        >
          Više informacija <ArrowRight className="ml-1" size={16} />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
