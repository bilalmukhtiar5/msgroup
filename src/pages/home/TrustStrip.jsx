import React from 'react'
import image1 from "../../../dist/brand-icons/kpk-logo.webp"
const clientsRow1 = [
  { name: "Govt of KPK", logo: image1 },
  { name: "Nestlé", logo: "/clients/nestle.webp" },
  { name: "Unilever", logo: "/clients/unilever.webp" },
  { name: "Telenor", logo: "/clients/telenor.webp" },
  { name: "Engro", logo: "/clients/engro.webp" },
  { name: "PTCL", logo: "/clients/ptcl.webp" },
  { name: "Jazz", logo: "/clients/jazz.webp" },
  { name: "Nishat Group", logo: "/clients/nishat.webp" },
  { name: "K-Electric", logo: "/clients/k-electric.webp" },
  { name: "HBL", logo: "/clients/hbl.webp" },
  { name: "UBL", logo: "/clients/ubl.webp" },
  { name: "EFU Insurance", logo: "/clients/efu.webp" },
]

const clientsRow2 = [
  "Hello Hair", "Dettol", "Shan", "Pepsi",
  "UNILEVER", "PSO", "LU", "Hardees",
  "Lux", "KHAADI", "Bata", "Lipton",
]

const TrustStrip = () => {
  return (
    <section className="border-y border-black/10 bg-[#faf9f9] py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xl font-black uppercase tracking-[.25em] text-black/40">
          Trusted by leading brands
        </p>
      </div>

      {/* Row 1 - moves left */}
      <div className="mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee-left gap-16">
          {[...clientsRow1, ...clientsRow1].map((client, index) => (
            <div
              key={index}
              className="flex w-30 h-32 shrink-0 flex-col 
              items-center justify-center gap-2 
              transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xs font-semibold text-black/60">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - moves right (reverse) */}
      <div className="mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee-right gap-16">
          {[...clientsRow2, ...clientsRow2].map((client, index) => (
            <div
              key={index}
              className="flex w-40 shrink-0 items-center justify-center opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <span className="text-center text-sm font-black tracking-tight text-black">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip