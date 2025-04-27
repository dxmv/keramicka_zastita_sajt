import { useState } from "react"

interface ImageCardProps {
  src: string
  alt: string
  className?: string
  onClick?: () => void
}

const ImageCard = ({ src, alt, className = "", onClick }: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={`overflow-hidden rounded-lg border-2 border-grey-200 hover:ring-2 hover:ring-yellow-300 transition-all cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative aspect-video w-full h-full">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  )
}

export default ImageCard
