import { Star } from "lucide-react"

interface RatingBadgeProps {
  rating: number
  source: string
  className?: string
}

const RatingBadge = ({ rating, source, className = "" }: RatingBadgeProps) => {
  return (
    <div className={`inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm ${className}`}>
      <Star className="text-yellow-500 mr-1" size={16} fill="#FFD43A" />
      <span className="font-medium">
        {rating} on {source}
      </span>
    </div>
  )
}

export default RatingBadge
