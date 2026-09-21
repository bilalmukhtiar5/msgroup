import React from 'react'
import image1 from "../../../dist/brand-icons/kpk-logo.webp"
import image2 from "../../../dist/brand-icons/tourism.webp"
import image3 from "../../../dist/brand-icons/national-foods.png"
import image4 from "../../../dist/brand-icons/suntrix.webp"
import image5 from "../../../dist/brand-icons/who.png"
import image6 from "../../../dist/brand-icons/PIFTAC.png"
import image7 from "../../../dist/brand-icons/UOP.webp"
import image8 from "../../../dist/brand-icons/IR.webp"
import image9 from "../../../dist/brand-icons/oppo.webp"
import image10 from "../../../dist/brand-icons/Realme.png"
import image11 from "../../../dist/brand-icons/butterfly.webp"
import image12 from "../../../dist/brand-icons/Colgate.webp"
import image13 from "../../../dist/brand-icons/hello-hair.webp"
import image14 from "../../../dist/brand-icons/dettol.webp"
import image15 from "../../../dist/brand-icons/shan.webp"
import image16 from "../../../dist/brand-icons/pepsi.png"
import image17 from "../../../dist/brand-icons/unilever.png"
import image18 from "../../../dist/brand-icons/pso.webp"
import image24 from "../../../dist/brand-icons/Lipton.webp"
import image22 from "../../../dist/brand-icons/Khaadi.png"
import image19 from "../../../dist/brand-icons/LU.webp"
import image21 from "../../../dist/brand-icons/lux.webp"
import image20 from "../../../dist/brand-icons/hardees.png"
import image23 from "../../../dist/brand-icons/bata.png"

const clientsRow1 = [
  { name: "Govt of KPK", logo: image1 },
  { name: "PIFTAC", logo: image6 },
  { name: "UOP", logo: image7 },
  { name: "IR-UOP", logo: image8 },
  { name: "KP-Culture and Tourism", logo: image2 },
  { name: "Suntrix", logo: image4 },
  { name: "WHO", logo: image5 },
  { name: "OPPO", logo: image9 },
  { name: "REALME", logo: image10 },
  { name: "NATIONAL FOODS", logo: image3 },
  { name: "BUTTERFLY", logo: image11 },
  { name: "COLGATE", logo: image12 },
]

const clientsRow2 = [
  { name: "HELLO HAIR", logo: image13 },
  { name: "DETTOL", logo: image14 },
  { name: "SHAN", logo: image15 },
  { name: "PEPSI", logo: image16 },
  { name: "UNILEVER", logo: image17 },
  { name: "PSO", logo: image18 },
  { name: "LU", logo: image19 },
  { name: "HARDEES", logo: image20 },
  { name: "LUX", logo: image21 },
  { name: "KHAADI", logo: image22 },
  { name: "BATA", logo: image23 },
  { name: "LIPTON", logo: image24 },
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
              className="flex h-40 w-44 shrink-0 flex-col items-center justify-center gap-3 transition duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain"
              />
              <span className="text-sm font-semibold text-black/60">
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
              className="flex h-40 w-44 shrink-0 flex-col items-center justify-center gap-3 transition duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain"
              />
              <span className="text-sm font-semibold text-black/60">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip

// import React from 'react'
// import image1 from "../../../dist/brand-icons/kpk-logo.webp"
// import image2 from "../../../dist/brand-icons/tourism.webp"
// import image3 from "../../../dist/brand-icons/national-foods.webp"
// import image4 from "../../../dist/brand-icons/suntrix.webp"
// import image5 from "../../../dist/brand-icons/who.webp"
// import image6 from "../../../dist/brand-icons/PIFTAC.png"
// import image7 from "../../../dist/brand-icons/UOP.webp"
// import image8 from "../../../dist/brand-icons/IR.webp"
// import image9 from "../../../dist/brand-icons/oppo.webp"
// import image10 from "../../../dist/brand-icons/realme.webp"
// import image11 from "../../../dist/brand-icons/butterfly.webp"
// import image12 from "../../../dist/brand-icons/Colgate.webp"
// import image13 from "../../../dist/brand-icons/hello-hair.webp"
// import image14 from "../../../dist/brand-icons/dettol.webp"
// import image15 from "../../../dist/brand-icons/shan.webp"
// import image16 from "../../../dist/brand-icons/pepsi.webp"
// import image17 from "../../../dist/brand-icons/unilever.webp"

// const clients = [
//   { name: "Govt of KPK", logo: image1 },
//   { name: "PIFTAC", logo: image6 },
//   { name: "UOP", logo: image7 },
//   { name: "IR-UOP", logo: image8 },
//   { name: "KP-Culture and Tourism", logo: image2 },
//   { name: "Suntrix", logo: image4 },
//   { name: "WHO", logo: image5 },
//   { name: "OPPO", logo: image9 },
//   { name: "REALME", logo: image10 },
//   { name: "NATIONAL FOODS", logo: image3 },
//   { name: "BUTTERFLY", logo: image11 },
//   { name: "COLGATE", logo: image12 },
//   { name: "HELLO HAIR", logo: image13 },
//   { name: "DETTOL", logo: image14 },
//   { name: "SHAN", logo: image15 },
//   { name: "PEPSI", logo: image16 },
//   { name: "UNILEVER", logo: image17 },
// ]

// const TrustStrip = () => {
//   return (
//     <section className="border-y border-black/10 bg-[#faf9f9] py-24">
//       <div className="mx-auto max-w-6xl px-5 lg:px-8">

//         <p className="text-center text-xs font-black uppercase tracking-[.25em] text-black/40">
//           Trusted by leading brands
//         </p>

//         <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
//           {clients.map((client, index) => (
//             <img
//               key={index}
//               src={client.logo}
//               alt={client.name}
//               className="h-8 w-auto object-contain grayscale opacity-70 transition duration-300 hover:opacity-100 hover:grayscale-0"
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default TrustStrip