"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"
import { Link } from "react-router"
import { ArrowRight, Sparkles, Shield, Clock, PenToolIcon as Tool } from "lucide-react"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"
import SecondaryButton from "../components/SecondaryButton"
import RatingBadge from "../components/RatingBadge"
import ImageCard from "../components/ImageCard"
import TestimonialsSlider from "../components/TestimonialsSlider"

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

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "BMW Owner",
    content:
      "ShineMasters transformed my 5-year-old BMW to look better than when I first bought it. Their attention to detail is unmatched!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Tesla Owner",
    content:
      "I was amazed by the ceramic coating service. My Tesla has never looked this good, and water just beads right off!",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Porsche Owner",
    content:
      "The team at ShineMasters are true professionals. They treated my Porsche with the care it deserves. Highly recommended!",
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
      <section className="-mx-4 lg:-mx-6 relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-[500px] md:h-[600px]"
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
      <section className="py-20 bg-surface -mx-4 lg:-mx-6 px-4 lg:px-6">
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
            />
            <ValueCard
              title="Premium Products"
              description="We use only the highest quality products for lasting results."
              icon={<Shield className="text-yellow-500" size={36} />}
            />
            <ValueCard
              title="Convenient Service"
              description="Flexible scheduling and quick turnaround times to fit your busy life."
              icon={<Clock className="text-yellow-500" size={36} />}
            />
            <ValueCard
              title="Satisfaction Guaranteed"
              description="We're not happy until you're completely satisfied with our work."
              icon={<Tool className="text-yellow-500" size={36} />}
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
      <section className="py-20 bg-surface -mx-4 lg:-mx-6 px-4 lg:px-6">
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
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
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

      {/* Testimonials */}
      <section className="py-20">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Don't just take our word for it. Here's what our satisfied customers have to say."
          centered
        />

        <div className="max-w-4xl mx-auto">
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-700 text-white -mx-4 lg:-mx-6 px-4 lg:px-6">
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

const ValueCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 border-b-4 border-yellow-500 pb-2 inline-block">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Home
