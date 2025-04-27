"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import {
  ArrowRight,
  Sparkles,
  Shield,
  PenToolIcon as Tool,
  Layers,
  ShieldCheck,
  Droplet,
  Waves,
  Brush,
  Award,
  Users,
  Briefcase,
  MapPin
} from "lucide-react"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"
import ServiceCard from "../components/ServiceCard"
import BeforeAfterGallery from "../components/BeforeAfterGallery"

import hero1 from "../assets/images/hero/hero1.jpg"
import hero2 from "../assets/images/hero/hero2.jpg"
import hero3 from "../assets/images/hero/hero3.jpg"

import b1 from "../assets/images/before-after/b1.png"
import b2 from "../assets/images/before-after/b2.jpg"
import b3 from "../assets/images/before-after/b3.jpg"
import a1 from "../assets/images/before-after/a1.jpg"
import a2 from "../assets/images/before-after/a2.jpg"
import a3 from "../assets/images/before-after/a3.jpg"
import standard from "../assets/images/cars/merc-interior.jpg"
import silver from "../assets/images/cars/merc-front.jpg"
import gold from "../assets/images/cars/bentley-wheel2.jpg"

// Sample images - in a real app, these would be imported or fetched
const heroImages = [
  hero3,
  hero2,
  hero1,
]

// Before-After gallery data
const beforeAfterImages = [
  { before: b1, after: a1, description: "poliranje automobila" },
  { before: b2, after: a2, description: "tretman stakla" },
  { before: b3, after: a3, description: "keramički premaz" },
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
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 md:px-12 lg:px-20 max-w-4/5 mx-auto">
                  <div className="text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      Keramička zaštita Smederevo
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-grey-200">
                      Profesionalno polinarnje, detailing automobila i kermaička zaštita
                    </p>
                    <PrimaryButton href="/kontakt">
                      Pozovite nas
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
			{/* Value prop */}
			<section className="py-20 bg-surface w-full px-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeading
            title="Zašto odabrati nas?"
            subtitle="Dostavljamo izvanredne rezultate putem našeg posvećenja kvalitetu i pažnji detaljima."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              title="Garancija 5 g."
              description="9H keramički premaz sa pisanom garancijom do 60 mes."
              icon={<ShieldCheck className="text-[#FFD43A]" size={36} />}
            />
            <ValueCard
              title="Vrhunski sjaj"
              description="Najnovije tehnike poliranja vraćaju fabrički (ili bolji) finiš."
              icon={<Sparkles className="text-[#FFD43A]" size={36} />}
            />
            <ValueCard
              title="Premium materijali"
              description="Radimo isključivo s provjerenim brendovima (Koch Chemie, Gtechniq)."
              icon={<Award className="text-[#FFD43A]" size={36} />}
            />
            <ValueCard
              title="120+ zadovoljnih klijenata"
              description="Google ocena 5★ – pogledajte galeriju i uverite se."
              icon={<Users className="text-[#FFD43A]" size={36} />}
            />
            <ValueCard
              title="Sertifikovani stručnjaci"
              description="5+ god iskustva u detailingu."
              icon={<Briefcase className="text-[#FFD43A]" size={36} />}
            />
            <ValueCard
              title="Sve na jednom mestu"
              description="Dekontaminacija, poliranje, keramika i enterijer u jednoj radionici."
              icon={<MapPin className="text-[#FFD43A]" size={36} />}
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <PrimaryButton href="/kontakt" className="mr-4">
            Pozovite nas
          </PrimaryButton>
        </div>
      </section>

      {/* Before and After Gallery */}
      <BeforeAfterGallery items={beforeAfterImages} />

			{/* Services Preview - Full width with new card design */}
      <section className="py-20 bg-surface w-full px-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeading
            title="Paketi"
            subtitle="Koji paket odabrati?"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            <ServiceCard
              id="standard"
              name="Standard"
              description="Pogodan za brzo osveženje vašeg automobila. Paket obuhvata spoljašnje pranje, dubinsko pranje enterijera, detaljan detailing, kao i čišćenje i zaštitu kože, pružajući vozilu čist i blistav izgled."
              icon={<Sparkles className="text-brown-700" size={32} />}
              image={standard}
            />
            <ServiceCard
              id="silver"
              name="Silver"
              description="Idealan izbor za osnovnu negu vozila. Paket uključuje dekontaminaciju laka, višeslojno poliranje, keramičku zaštitu u trajanju do 2 godine, keramičku zaštitu felni, dubinsko pranje enterijera i zaštitu svih kožnih površina."
              icon={<Shield className="text-gray-500" size={32} />}
              image={silver}
            />
            <ServiceCard
              id="gold"
              name="Gold"
              description="Premium paket za maksimalnu zaštitu i izgled vašeg automobila. Uključuje dekontaminaciju laka, višeslojno poliranje, produženu keramičku zaštitu do 5 godina, keramičku zaštitu stakala, poliranje i keramičku zaštitu felni, dubinsko pranje enterijera i kompletnu zaštitu kožnih površina."
              icon={<Tool className="text-yellow-500" size={32} />}
              image={gold}
            />
          </div>

          <div className="text-center mt-12">
            <PrimaryButton to="/paketi">Pročitaj više</PrimaryButton>
          </div>
        </div>
      </section>

			{/** Services */}
			<section className="py-20 w-full px-20">
			<div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeading
            title="Naše Usluge"
            subtitle="Detaljan pregled svih usluga koje nudimo za vaš automobil."
            centered
          />
          {/* Scrollable container on mobile, grid on desktop */}
          <div className="flex overflow-x-auto gap-4 px-4 pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:p-0">
            {servicesData.map((service, index) => (
              <ServiceItemCard
                key={index}
                title={service.title}
                description={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
           <div className="text-center mt-12">
            <PrimaryButton to="/kontakt">Kontaktirajte nas</PrimaryButton>
          </div>
        </div>
      </section>


    </div>
  )
}

const ValueCard = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) => {
  return (
    <div
      className="bg-navy-900 rounded-lg shadow-md p-6 transition-all group hover:shadow-lg hover:-translate-y-1"
    >
      <div className="mb-4">{icon}</div>
      <h3
        className="text-xl font-bold mb-2 border-b-4 border-[#FFD43A] pb-2 inline-block text-white"
      >
        {title}
      </h3>
      <p className="text-grey-200">{description}</p>
    </div>
  )
}

// Data for the new Services section
const servicesData = [
  { 
    title: "Dekontaminacija laka",
    desc: "Temeljno uklanjanje tvrdokornih nečistoća kao što su katran i metalne čestice, čime se postiže glatka i čista površina laka koja blista kao nova.",
    icon: Sparkles
  },
  { 
    title: "Višeslojno poliranje",
    desc: "Profesionalno uklanjanje čak do 80% površinskih ogrebotina i swirl-ova u 2–3 koraka, čime automobil dobija potpuno obnovljen i besprekoran sjaj.",
    icon: Layers
  },
  { 
    title: "Keramička zaštita laka",
    desc: "Izuzetno izdržljiv 9H keramički premaz. Štiti vaš automobil od ogrebotina, UV zraka, prljavštine i olakšava svakodnevno održavanje.",
    icon: ShieldCheck
  },
  { 
    title: "Keramička zaštita stakala",
    desc: 'Poseban premaz stakla sa "lotus efektom" koji odbija vodu, obezbeđuje jasnu vidljivost tokom kiše i povećava sigurnost vožnje.',
    icon: Droplet
  },
  { 
    title: "Dubinsko pranje",
    desc: "Detaljno i dubinsko ekstraktorsko čišćenje sedišta, podova i tapacirunga, osvežava enterijer, uklanja fleke, neprijatne mirise i vraća osećaj novog vozila.",
    icon: Waves
  },
  { 
    title: "Detailing enterijera",
    desc: "Kompletan detailing unutrašnjosti vozila koji uključuje čišćenje kokpita, svih plastičnih i vinil površina uz UV zaštitu koja sprečava starenje i pucanje materijala.",
    icon: Brush
  }
];


// New component for individual service items
const ServiceItemCard = ({
  title,
  description,
  icon: IconComponent,
}: {
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center flex-shrink-0 w-72 md:w-auto"
    >
      {IconComponent && (
        <div className="flex justify-center mb-4">
          <IconComponent className="w-10 h-10 text-yellow-500" />
        </div>
      )}
      <h3 className="text-lg font-bold mb-2 text-navy-900">{title}</h3>
      <p className="text-sm text-grey-400">{description}</p>
    </div>
  )
}

export default Home
