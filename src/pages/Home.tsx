"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import { ArrowRight, Sparkles, Shield, Clock, PenToolIcon as Tool } from "lucide-react"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"
import SecondaryButton from "../components/SecondaryButton"
import ImageCard from "../components/ImageCard"
import ServiceCard from "../components/ServiceCard"

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

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - Full screen height on desktop */}
      <section className="relative w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-[100vh] w-full"
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
                <div className="absolute inset-0 z-20 flex items-center justify-start px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      Keramička zaštita Smederevo
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-grey-200">
                      PROFESIONALNO POLIRANJE, DETAILING AUTOMOBILA I KERAMIKA ZAŠTITA
                    </p>
                    <PrimaryButton to="#contactForm" className="mr-4">
                      Pozovite nas
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Value Propositions - Full width */}
      <section className="py-20 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeading
            title="Prednosti našeg servisa"
            subtitle="Dostavljamo izvanredne rezultate putem našeg posvećenja kvalitetu i pažnji detaljima."
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

      {/* Mini Gallery - Full width */}
      <section className="py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeading title="Naši radovi" subtitle="Pogledajte neke od naših poslednjih radova." centered />

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
        </div>
      </section>

      {/* Services Preview - Full width with new card design */}
      <section className="py-20 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeading
            title="Naše usluge"
            subtitle="Pružamo kompletan spektar usluga za održavanje vašeg automobila."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              id="exterior"
              name="Eksterijer"
              description="Complete exterior cleaning and protection"
              icon={<Sparkles className="text-navy-900" size={32} />}
              image="/placeholder.svg?height=300&width=400"
              links={[
                { text: "Poliranje automobila", url: "/services#poliranje" },
                { text: "Keramička zaštita automobila", url: "/services#keramicka-zastita" },
                { text: "Održavanje keramička zaštite", url: "/services#odrzavanje" },
                { text: "Premijum pranje eksterijera", url: "/services#pranje" },
              ]}
            />
            <ServiceCard
              id="interior"
              name="Interijer"
              description="Deep cleaning of all interior surfaces"
              icon={<Shield className="text-navy-900" size={32} />}
              image="/placeholder.svg?height=300&width=400"
              links={[
                { text: "Dubinsko pranje enterijera", url: "/services#dubinsko" },
                { text: "Čišćenje kože", url: "/services#koza" },
              ]}
            />
            <ServiceCard
              id="ceramic"
              name="Keramička zaštita"
              description="Long-lasting protection for your paint"
              icon={<Tool className="text-navy-900" size={32} />}
              image="/placeholder.svg?height=300&width=400"
              links={[
                { text: "Premium keramička zaštita", url: "/services#premium" },
                { text: "Standard keramička zaštita", url: "/services#standard" },
              ]}
            />
            <ServiceCard
              id="paint"
              name="Poliranje"
              description="Remove scratches and swirl marks"
              icon={<Clock className="text-navy-900" size={32} />}
              image="/placeholder.svg?height=300&width=400"
              links={[
                { text: "Poliranje farbe", url: "/services#poliranje-farbe" },
                { text: "Uklanjanje ogrebotina", url: "/services#ogrebotine" },
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <PrimaryButton to="/services">Pogledajte sve usluge</PrimaryButton>
          </div>
        </div>
      </section>

      {/* CTA Section - Full width */}
      <section className="py-16 bg-navy-700 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
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
