import React from "react";
import { ArrowRight } from "lucide-react";
import SecondaryButton from "./SecondaryButton";
import SectionHeading from "./SectionHeading";
import ImageCard from "./ImageCard";

type BeforeAfterImage = { 
  before: string; 
  after: string;
  description?: string;
};

interface BeforeAfterGalleryProps {
  items: BeforeAfterImage[]; // exactly 3 for now (b1-b3 / a1-a3)
  title?: string;
  subtitle?: string;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ 
  items, 
  title = "Pre i posle", 
  subtitle = "Pogledajte rezultate našeg rada." 
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 w-full px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={title} subtitle={subtitle} centered />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {/* Before image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 text-xs sm:text-sm uppercase tracking-wide font-semibold text-navy-900 bg-yellow-300/90 backdrop-blur px-2 py-0.5 rounded">
                  Pre
                </div>
                <div className="aspect-[16/10] w-full">
                  <ImageCard 
                    src={item.before} 
                    alt={`Pre ${item.description || `slika ${index + 1}`}`}
                    className="w-full h-full object-cover"
                    onClick={() => {
                      /* Would open lightbox in a real app */
                    }}
                  />
                </div>
              </div>
              
              {/* After image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 text-xs sm:text-sm uppercase tracking-wide font-semibold text-navy-900 bg-yellow-300/90 backdrop-blur px-2 py-0.5 rounded">
                  Posle
                </div>
                <div className="aspect-[16/10] w-full">
                  <ImageCard 
                    src={item.after} 
                    alt={`Posle ${item.description || `slika ${index + 1}`}`}
                    className="w-full h-full object-cover"
                    onClick={() => {
                      /* Would open lightbox in a real app */
                    }}
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <SecondaryButton to="/galerija">
            Pogledajte još slika <ArrowRight className="ml-2 inline-block" size={16} />
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery; 