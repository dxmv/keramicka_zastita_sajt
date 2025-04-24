"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Tab } from "@headlessui/react"
import { Check } from "lucide-react"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"

// Sample images - in a real app, these would be imported or fetched
const serviceImages = {
  exterior: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  interior: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  ceramic: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
  paint: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
}

const services = [
  {
    id: "exterior",
    name: "Exterior Detailing",
    description:
      "Our exterior detailing service includes a thorough wash, clay bar treatment, and wax application to protect your vehicle's paint. We also clean and dress tires, wheels, and exterior trim.",
    pricing: [
      {
        name: "Basic Wash & Wax",
        price: "$99",
        features: ["Hand wash", "Wheel cleaning", "Tire dressing", "Spray wax"],
      },
      {
        name: "Premium Exterior",
        price: "$199",
        features: [
          "Hand wash",
          "Clay bar treatment",
          "Wheel cleaning",
          "Tire dressing",
          "Premium wax",
          "Paint sealant",
        ],
      },
      {
        name: "Ultimate Exterior",
        price: "$299",
        features: [
          "Hand wash",
          "Clay bar treatment",
          "Wheel cleaning",
          "Tire dressing",
          "Premium wax",
          "Paint sealant",
          "Headlight restoration",
          "Engine bay cleaning",
        ],
      },
    ],
    images: serviceImages.exterior,
  },
  {
    id: "interior",
    name: "Interior Detailing",
    description:
      "Our interior detailing service includes vacuuming, steam cleaning, and conditioning of all interior surfaces. We pay special attention to high-touch areas and use specialized products for different materials.",
    pricing: [
      {
        name: "Basic Interior",
        price: "$129",
        features: ["Vacuuming", "Dust removal", "Dashboard & console cleaning", "Window cleaning"],
      },
      {
        name: "Premium Interior",
        price: "$229",
        features: [
          "Vacuuming",
          "Dust removal",
          "Dashboard & console cleaning",
          "Window cleaning",
          "Leather conditioning",
          "Carpet shampooing",
        ],
      },
      {
        name: "Ultimate Interior",
        price: "$329",
        features: [
          "Vacuuming",
          "Dust removal",
          "Dashboard & console cleaning",
          "Window cleaning",
          "Leather conditioning",
          "Carpet shampooing",
          "Headliner cleaning",
          "Air vent cleaning",
          "Odor elimination",
        ],
      },
    ],
    images: serviceImages.interior,
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    description:
      "Our ceramic coating service provides long-lasting protection for your vehicle's paint. The hydrophobic properties repel water, dirt, and contaminants, making maintenance easier and preserving your car's appearance.",
    pricing: [
      {
        name: "1-Year Coating",
        price: "$499",
        features: [
          "Paint correction (single stage)",
          "Ceramic coating application",
          "1-year protection",
          "Hydrophobic properties",
        ],
      },
      {
        name: "3-Year Coating",
        price: "$899",
        features: [
          "Paint correction (two stage)",
          "Premium ceramic coating",
          "3-year protection",
          "Enhanced gloss",
          "Superior hydrophobic properties",
        ],
      },
      {
        name: "5-Year Coating",
        price: "$1,299",
        features: [
          "Paint correction (multi-stage)",
          "Professional-grade ceramic coating",
          "5-year protection",
          "Maximum gloss",
          "Ultimate protection",
          "Free maintenance wash",
        ],
      },
    ],
    images: serviceImages.ceramic,
  },
  {
    id: "paint",
    name: "Paint Correction",
    description:
      "Our paint correction service removes swirl marks, scratches, and oxidation from your vehicle's paint. We use professional-grade compounds and polishes to restore your car's finish to a mirror-like shine.",
    pricing: [
      {
        name: "Single Stage",
        price: "$299",
        features: ["Light scratch removal", "Swirl mark reduction", "Enhanced gloss"],
      },
      {
        name: "Two Stage",
        price: "$499",
        features: ["Medium scratch removal", "Swirl mark elimination", "Oxidation removal", "High gloss finish"],
      },
      {
        name: "Multi-Stage",
        price: "$799",
        features: [
          "Deep scratch removal",
          "Complete defect correction",
          "Wet sanding (if needed)",
          "Mirror finish",
          "Paint sealant application",
        ],
      },
    ],
    images: serviceImages.paint,
  },
]

const Services = () => {
  const location = useLocation()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    // Check for hash in URL and select the appropriate tab
    const hash = location.hash.replace("#", "")
    if (hash) {
      const index = services.findIndex((service) => service.id === hash)
      if (index !== -1) {
        setSelectedIndex(index)
      }
    }
  }, [location])

  return (
    <div className="py-12">
      <SectionHeading
        title="Our Detailing Services"
        subtitle="We offer a comprehensive range of professional detailing services to keep your vehicle looking its best."
        centered
      />

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-xl bg-surface p-1 mb-8">
          {services.map((service) => (
            <Tab
              key={service.id}
              className={({ selected }) =>
                `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all
                 ${
                   selected
                     ? "bg-white shadow text-navy-900"
                     : "text-navy-700 hover:bg-white/[0.12] hover:text-yellow-500"
                 }`
              }
            >
              {service.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {services.map((service) => (
            <Tab.Panel key={service.id} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Pricing Options</h3>
                    <div className="space-y-6">
                      {service.pricing.map((option, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-lg font-bold">{option.name}</h4>
                            <span className="text-xl font-bold text-yellow-500">{option.price}</span>
                          </div>
                          <ul className="space-y-2">
                            {option.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {service.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${service.name} - Image ${index + 1}`}
                      className="rounded-lg shadow-sm w-full"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <PrimaryButton to="/contact">Book This Service</PrimaryButton>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      <div className="mt-16 bg-surface -mx-4 lg:-mx-6 px-4 lg:px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Schedule Your Detailing Service?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to book your appointment or request a custom quote for your specific needs.
          </p>
          <PrimaryButton to="/contact">Contact Us Now</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default Services
