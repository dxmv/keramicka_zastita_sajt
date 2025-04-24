"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar?: string
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
}

const TestimonialsSlider = ({ testimonials, autoPlay = true, interval = 5000 }: TestimonialsSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoPlay && !isPaused) {
      timerRef.current = window.setTimeout(nextSlide, interval)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentIndex, autoPlay, isPaused, interval])

  return (
    <div
      className="relative bg-white rounded-xl shadow-md p-8 md:p-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Quote className="text-yellow-300 mb-4" size={48} />

      <div className="overflow-hidden">
        <div className="transition-all duration-500 ease-in-out">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? "block opacity-100" : "hidden opacity-0"
              }`}
              aria-hidden={index !== currentIndex}
            >
              <blockquote className="text-lg md:text-xl italic mb-6">"{testimonial.content}"</blockquote>
              <div className="flex items-center">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                )}
                <div>
                  <p className="font-bold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-md text-navy-700 hover:text-yellow-500 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-md text-navy-700 hover:text-yellow-500 focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-yellow-500 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSlider
