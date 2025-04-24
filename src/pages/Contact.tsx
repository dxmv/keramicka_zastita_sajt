"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { MapPin, Phone, Mail, Clock, Check, AlertCircle } from "lucide-react"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  date: z.string().min(1, { message: "Please select a preferred date" }),
  time: z.string().min(1, { message: "Please select a preferred time" }),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", data)
      setIsSuccess(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      setErrorMessage("There was an error submitting your form. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12">
      <SectionHeading
        title="Contact Us"
        subtitle="Get in touch with our team to schedule your appointment or ask any questions."
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-xl font-bold mb-6 border-b pb-2">Our Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-yellow-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p>
                    123 Detailing Street
                    <br />
                    Cartown, CT 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-yellow-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p>
                    <a href="tel:+15551234567" className="hover:text-yellow-500 transition-colors">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-yellow-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p>
                    <a href="mailto:info@shinemasters.com" className="hover:text-yellow-500 transition-colors">
                      info@shinemasters.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-yellow-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p>
                    Monday - Friday: 8am - 6pm
                    <br />
                    Saturday: 9am - 5pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-sm h-[300px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215175515187!2d-73.98784492426285!3d40.75798657138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ShineMasters Location"
            ></iframe>
          </div>

          {/* JSON-LD for LocalBusiness */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AutoDetailing",
                name: "ShineMasters",
                image: "https://example.com/photos/1x1/photo.jpg",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "123 Detailing Street",
                  addressLocality: "Cartown",
                  addressRegion: "CT",
                  postalCode: "12345",
                  addressCountry: "US",
                },
                telephone: "+15551234567",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "08:00",
                    closes: "18:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "09:00",
                    closes: "17:00",
                  },
                ],
              }),
            }}
          />
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold mb-6 border-b pb-2">Book Your Appointment</h3>

            {isSuccess && (
              <div className="mb-6 p-4 bg-success/10 border border-success text-success rounded-md flex items-center">
                <Check className="mr-2 flex-shrink-0" size={20} />
                <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-error/10 border border-error text-error rounded-md flex items-center">
                <AlertCircle className="mr-2 flex-shrink-0" size={20} />
                <p>{errorMessage}</p>
              </div>
            )}

            <form id="contactForm" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 ${errors.name ? "border-error" : "border-gray-300"}`}
                    {...register("name")}
                  />
                  {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 ${errors.email ? "border-error" : "border-gray-300"}`}
                    {...register("email")}
                  />
                  {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  {...register("phone")}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Service Interested In <span className="text-error">*</span>
                </label>
                <select
                  id="service"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 ${errors.service ? "border-error" : "border-gray-300"}`}
                  {...register("service")}
                >
                  <option value="">Select a service</option>
                  <option value="exterior">Exterior Detailing</option>
                  <option value="interior">Interior Detailing</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="paint">Paint Correction</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <p className="mt-1 text-sm text-error">{errors.service.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Preferred Date <span className="text-error">*</span>
                  </label>
                  <input
                    id="date"
                    type="date"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 ${errors.date ? "border-error" : "border-gray-300"}`}
                    {...register("date")}
                  />
                  {errors.date && <p className="mt-1 text-sm text-error">{errors.date.message}</p>}
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-1">
                    Preferred Time <span className="text-error">*</span>
                  </label>
                  <select
                    id="time"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 ${errors.time ? "border-error" : "border-gray-300"}`}
                    {...register("time")}
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8am - 11am)</option>
                    <option value="afternoon">Afternoon (12pm - 3pm)</option>
                    <option value="evening">Evening (4pm - 6pm)</option>
                  </select>
                  {errors.time && <p className="mt-1 text-sm text-error">{errors.time.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  {...register("message")}
                ></textarea>
              </div>

              <div>
                <PrimaryButton type="submit" className="w-full">
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
