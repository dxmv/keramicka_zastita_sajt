"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import { Link } from "react-router"
import { ArrowRight, Sparkles, Shield, Clock, PenToolIcon as Tool } from "lucide-react"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"
import SecondaryButton from "../components/SecondaryButton"
import RatingBadge from "../components/RatingBadge"
import ImageCard from "../components/ImageCard"

// Sample images - in a real app, these would be imported or fetched
const heroImages = [
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
  "/placeholder.svg?height=600&width=1200",
]

const galleryImages = [
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
]

const services = [
  {
    id: "exterior",
    name: "Exterior Detailing",
    description: "Complete exterior cleaning and protection",
    icon: <Sparkles className="text-yellow-500" size={32} />,
  },
  {
    id: "interior",
    name: "Interior Detailing",
    description: "Deep cleaning of all interior surfaces",
    icon: <Shield className="text-yellow-500" size={32} />,
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    description: "Long-lasting protection for your paint",
    icon: <Tool className="text-yellow-500" size={32} />,
  },
  {
    id: "paint",
    name: "Paint Correction",
    description: "Remove scratches and swirl marks",
    icon: <Clock className="text-yellow-500" size={32} />,
  },
]

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-[500px] md:h-[600px] w-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 to-navy-900/30 z-10"></div>
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Car detailing showcase ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 z-20 flex items-center justify-start px-4 md:px-12 lg:px-20">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      Professional Car Detailing Services
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-grey-200">
                      Restore your vehicle to showroom condition with our premium detailing services.
                    </p>
                    <PrimaryButton to="#contactForm" className="mr-4">
                      Book Now
                    </PrimaryButton>
                    <SecondaryButton to="/services" className="text-white border-white hover:border-yellow-500">
                      Our Services
                    </SecondaryButton>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
          <RatingBadge rating={4.9} source="Google" />
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Why Choose ShineMasters"
            subtitle="We deliver exceptional results through our commitment to quality and attention to detail."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              title="Expert Technicians"
              description="Our team consists of certified professionals with years of experience."
              icon={<Sparkles className="text-yellow-500" size={36} />}
              darkMode
            />
            <ValueCard
              title="Premium Products"
              description="We use only the highest quality products for lasting results."
              icon={<Shield className="text-yellow-500" size={36} />}
              darkMode
            />
            <ValueCard
              title="Convenient Service"
              description="Flexible scheduling and quick turnaround times to fit your busy life."
              icon={<Clock className="text-yellow-500" size={36} />}
              darkMode
            />
            <ValueCard
              title="Satisfaction Guaranteed"
              description="We're not happy until you're completely satisfied with our work."
              icon={<Tool className="text-yellow-500" size={36} />}
              darkMode
            />
          </div>
        </div>
      </section>

      {/* Mini Gallery */}
      <section className="py-20">
        <SectionHeading
          title="Our Recent Work"
          subtitle="Take a look at some of our recent detailing projects."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ImageCard
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              onClick={() => {
                /* Would open lightbox in a real app */
              }}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <SecondaryButton to="/gallery">
            View Full Gallery <ArrowRight className="ml-2 inline-block" size={16} />
          </SecondaryButton>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of detailing services to keep your vehicle looking its best."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="bg-navy-700 rounded-lg shadow-sm p-6 hover:shadow-md transition-all hover:translate-y-[-5px]"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                <p className="text-grey-200 mb-4">{service.description}</p>
                <span className="text-yellow-500 font-medium flex items-center">
                  Learn More <ArrowRight className="ml-1" size={16} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <PrimaryButton to="/services">View All Services</PrimaryButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-lg text-grey-200 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience the ShineMasters difference.
          </p>
          <PrimaryButton to="/contact">Book Your Appointment</PrimaryButton>
        </div>
      </section>
    </div>
  )
}

const ValueCard = ({
  title,
  description,
  icon,
  darkMode = false,
}: {
  title: string
  description: string
  icon: React.ReactNode
  darkMode?: boolean
}) => {
  return (
    <div
      className={`${darkMode ? "bg-navy-900" : "bg-white"} rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]`}
    >
      <div className="mb-4">{icon}</div>
      <h3
        className={`text-xl font-bold mb-2 border-b-4 border-yellow-500 pb-2 inline-block ${darkMode ? "text-white" : ""}`}
      >
        {title}
      </h3>
      <p className={darkMode ? "text-grey-200" : "text-gray-600"}>{description}</p>
    </div>
  )
}

export default Home
