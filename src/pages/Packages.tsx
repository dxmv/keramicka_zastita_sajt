"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Tab } from "@headlessui/react"

import SectionHeading from "../components/SectionHeading"
import PrimaryButton from "../components/PrimaryButton"

import standard from "../assets/images/packages/standard2.png"
import silver from "../assets/images/packages/silver.jpeg"
import gold from "../assets/images/packages/gold.jpeg"

type PriceBand = { label: string; range: string };

export type Package = {
  id: "standard" | "silver" | "gold";
  title: string;
  tagline: string;
  bullets: string[];
  prices: PriceBand[];
};

export const packages: Package[] = [
  {
    id: "standard",
    title: "Standard paket",
    tagline: "Osnovna zaštita i sjaj do 2 god.",
    bullets: [
      "Dekontaminacija laka",
      "Višeslojno poliranje",
      "Keramička zaštita do 2 godine"
    ],
    prices: [
      { label: "Hečbek",  range: "250 – 310 €" },
      { label: "Limuzina", range: "310 – 360 €" },
      { label: "Džip",     range: "360 – 400 €" }
    ]
  },
  {
    id: "silver",
    title: "Silver paket",
    tagline: "Napredna zaštita do 2 god. + felne",
    bullets: [
      "Dekontaminacija laka",
      "Višeslojno poliranje",
      "Keramička zaštita do 2 godine",
      "Keramička zaštita felni",
      "Dubinsko pranje enterijera (detailing enterijera)",
      "Zaštita svih kožnih površina (ako ih ima)"
    ],
    prices: [
      { label: "Hečbek",    range: "250 – 310 €" },
      { label: "Limuzina", range: "310 – 360 €" },
      { label: "Džip",  range: "360 – 400 €" }
    ]
  },
  {
    id: "gold",
    title: "Gold paket",
    tagline: "Full detailing + 5-godišnja keramika",
    bullets: [
      "Dekontaminacija laka",
      "Višeslojno poliranje",
      "Keramička zaštita u trajanju do 5 godina",
      "Keramička zaštita stakala",
      "Poliranje felni",
      "Keramička zaštita felni",
      "Dubinsko pranje enterijera",
      "Zaštita svih kožnih površina (ako ih ima)"
    ],
    prices: [
      { label: "Mala vozila",   range: "510 – 560 €" },
      { label: "Srednja vozila",range: "570 – 670 €" },
      { label: "Velika vozila", range: "670 – 800 €" }
    ]
  }
];

// Images for each package
const packageImages = {
  standard: standard,
  silver: silver,
  gold: gold
};

const PackagesTabs = () => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // Check for hash in URL and select the appropriate tab
    const hash = location.hash.replace("#", "");
    if (hash) {
      const index = packages.findIndex((pkg) => pkg.id === hash);
      if (index !== -1) {
        setSelectedIndex(index);
      }
    }
  }, [location]);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className="flex justify-center">
        <Tab.List className="flex gap-4 overflow-x-auto md:gap-2 md:inline-flex rounded-lg bg-navy-700 p-1.5">
          {packages.map((pkg) => (
            <Tab
              key={pkg.id}
              className={({ selected }) =>
                `px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all
                ${
                  selected
                    ? "bg-yellow-500 text-navy-900 shadow"
                    : "text-white hover:text-yellow-500 hover:bg-navy-600"
                }`
              }
            >
              {pkg.title}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="mt-8">
        {packages.map((pkg) => (
          <Tab.Panel key={pkg.id} className="rounded-xl bg-navy-700 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl text-white font-bold mb-2">{pkg.title}</h2>
                <p className="text-gray-300 mb-4 italic">{pkg.tagline}</p>
                
                <h3 className="text-lg text-white font-semibold mb-3">Usluge uključene u paket:</h3>
                <ul className="space-y-2 list-disc pl-5 text-white mb-6">
                  {pkg.bullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <h3 className="text-lg text-white font-semibold mb-3">Cene po veličini vozila:</h3>
                  <table className="w-full text-sm mt-2">
                    <thead className="bg-[#1C1C1F] text-gray-300">
                      <tr>
                        <th className="py-2 px-4 text-left rounded-tl-lg">Tip vozila</th>
                        <th className="py-2 px-4 text-right rounded-tr-lg">Cena (EUR)</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {pkg.prices.map((price, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-navy-600/40" : ""}>
                          <td className="py-2 px-4 border-t border-grey-400/20">{price.label}</td>
                          <td className="py-2 px-4 text-right border-t border-grey-400/20 text-yellow-500 font-medium">{price.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <img 
                  src={packageImages[pkg.id]} 
                  alt={pkg.title} 
                  className="w-full h-auto rounded-2xl shadow-md"
                  loading="lazy"
                />
                
                <div className="mt-8 text-center">
                  <PrimaryButton to="/kontakt">Zakaži termin</PrimaryButton>
                </div>
              </div>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

const Packages = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-20 max-w-7xl mx-auto">
      <SectionHeading
        title="Paketi zaštite"
        subtitle="Odaberite paket koji najbolje odgovara vašim potrebama i budžetu."
        centered
      />

      <PackagesTabs />

      <div className="mt-16 bg-navy-700 rounded-xl px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Spremni da zaštitite svoje vozilo?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas danas da rezervišete termin ili zatražite prilagođenu ponudu prema vašim specifičnim potrebama.
          </p>
          <PrimaryButton to="/kontakt">Kontaktirajte nas</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Packages; 