interface SectionHeadingProps {
        title: string
        subtitle?: string
        centered?: boolean
        className?: string
}

const SectionHeading = ({ title, subtitle, centered = false, className = "" }: SectionHeadingProps) => {
return (
        <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
        </div>
)
}

export default SectionHeading
      