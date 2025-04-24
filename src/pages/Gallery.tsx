"use client"

import { useState, useEffect } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"
import ImageCard from "../components/ImageCard"

// Sample gallery data - in a real app, these would be imported or fetched
const galleryItems = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", category: "exterior", alt: "Exterior detailing result" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", category: "interior", alt: "Interior detailing result" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", category: "coating", alt: "Ceramic coating application" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", category: "exterior", alt: "Exterior wash process" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", category: "interior", alt: "Interior cleaning process" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", category: "coating", alt: "Paint protection film" },
  { id: 7, src: "/placeholder.svg?height=400&width=600", category: "exterior", alt: "Wheel detailing" },
  { id: 8, src: "/placeholder.svg?height=400&width=600", category: "interior", alt: "Leather conditioning" },
  { id: 9, src: "/placeholder.svg?height=400&width=600", category: "coating", alt: "Ceramic coating beading" },
  { id: 10, src: "/placeholder.svg?height=400&width=600", category: "exterior", alt: "Paint correction" },
  { id: 11, src: "/placeholder.svg?height=400&width=600", category: "interior", alt: "Dashboard cleaning" },
  { id: 12, src: "/placeholder.svg?height=400&width=600", category: "coating", alt: "Coating inspection" },
  { id: 13, src: "/placeholder.svg?height=400&width=600", category: "exterior", alt: "Full exterior detail" },
  { id: 14, src: "/placeholder.svg?height=400&width=600", category: "interior", alt: "Full interior detail" },
  { id: 15, src: "/placeholder.svg?height=400&width=600", category: "coating", alt: "Coating application" },
]

const categories = [
  { id: "all", name: "All" },
  { id: "exterior", name: "Exterior" },
  { id: "interior", name: "Interior" },
  { id: "coating", name: "Coating" },
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
    <div className="py-12">
      <SectionHeading
        title="Our Work Gallery"
        subtitle="Browse through our portfolio of detailing projects and see the quality of our work."
        centered
      />

      {/* Filter Pills */}
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
      </div>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredItems.map((item, index) => (
          <div key={item.id} className="break-inside-avoid">
            <ImageCard src={item.src || "/placeholder.svg"} alt={item.alt} onClick={() => openLightbox(index)} />

            {/* CTA Banner after 12 images */}
            {index === 11 && (
              <div className="bg-navy-700 text-white p-6 rounded-lg my-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Like what you see?</h3>
                <p className="mb-4">Book your appointment today and let us transform your vehicle.</p>
                <PrimaryButton to="/contact">Book Now</PrimaryButton>
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
