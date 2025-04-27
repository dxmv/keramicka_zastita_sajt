"use client"

import { useState, useEffect } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"
import ImageCard from "../components/ImageCard"

import mercFront from "../assets/images/cars/merc-front.jpg"
import mercInterior from "../assets/images/cars/merc-interior.jpg"
import oldPorsche from "../assets/images/cars/old-porsche.jpg"
import standardVechicle from "../assets/images/cars/standard.jpg"
import bentleyWheel from "../assets/images/cars/bentley-wheel2.jpg"
import porscheFront from "../assets/images/cars/porsche_front.jpg"
import porscheBadge from "../assets/images/cars/porsche_badge.jpg"
import porscheBack from "../assets/images/cars/porsche_back.jpg"
import porscheF from "../assets/images/cars/porsche_f.jpg"
import bentleyFront from "../assets/images/cars/bentley_front.jpg"
import bentleyBack from "../assets/images/cars/bentley_back.jpg"
import bentleyF from "../assets/images/cars/bentley_f.jpg"
import gWagon from "../assets/images/cars/gwagon.jpg"
import gle from "../assets/images/cars/mercedesgle.jpg"
import bmw7 from "../assets/images/cars/bmw7.jpg"
import rangeRover from "../assets/images/cars/range.jpg"

// Sample gallery data - in a real app, these would be imported or fetched
const galleryItems = [
  { id: 1, src: mercFront, category: "exterior", alt: "Exterior detailing result" },
  { id: 2, src: mercInterior, category: "interior", alt: "Interior detailing result" },
  { id: 3, src: oldPorsche, category: "exterior", alt: "Ceramic coating application" },
  { id: 4, src: standardVechicle, category: "exterior", alt: "Exterior wash process" },
  { id: 5, src: bentleyWheel, category: "interior", alt: "Wheel detailing" },
  { id: 6, src: porscheFront, category: "exterior", alt: "Paint protection film" },
  { id: 7, src: porscheBadge, category: "exterior", alt: "Wheel detailing" },
  { id: 8, src: porscheBack, category: "interior", alt: "Leather conditioning" },
  { id: 9, src: porscheF, category: "coating", alt: "Ceramic coating beading" },
  { id: 10, src: bentleyFront, category: "exterior", alt: "Paint correction" },
  { id: 11, src: bentleyBack, category: "interior", alt: "Dashboard cleaning" },
  { id: 12, src: bentleyF, category: "coating", alt: "Coating inspection" },
  { id: 13, src: gWagon, category: "exterior", alt: "Full exterior detail" },
  { id: 14, src: gle, category: "interior", alt: "Full interior detail" },
  { id: 15, src: rangeRover, category: "coating", alt: "Coating application" },
  { id: 16, src: bmw7, category: "exterior", alt: "Full exterior detail" },
]


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredItems, setFilteredItems] = useState(galleryItems)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(galleryItems)
    } else {
      setFilteredItems(galleryItems.filter((item) => item.category === activeCategory))
    }
  }, [activeCategory])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="py-12 px-20">
      <SectionHeading
        title="Galerija"
        subtitle="Pogledajte neke od naših omiljenih radova."
        centered
      />

      {/* Filter Pills
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? "bg-yellow-500 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-navy-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div> */}

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredItems.map((item, index) => (
          <div key={item.id} className="break-inside-avoid">
            <ImageCard src={item.src || "/placeholder.svg"} alt={item.alt} onClick={() => openLightbox(index)} />

            {/* CTA Banner after 12 images */}
            {index === 11 && (
              <div className="bg-navy-700 text-white p-6 rounded-lg my-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Svidja vam se ono što vidite?</h3>
                <p className="mb-4">Zakazite termin i posetite nas.</p>
                <PrimaryButton to="/kontakt">Kontaktirajte nas</PrimaryButton>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={filteredItems.map((item) => ({ src: item.src, alt: item.alt }))}
        index={lightboxIndex}
      />
    </div>
  )
}

export default Gallery
