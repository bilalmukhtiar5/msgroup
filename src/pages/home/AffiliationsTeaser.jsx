import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import secpLogo from "../../../dist/affiliation-icons/SECP.webp"
import fbrLogo from "../../../dist/affiliation-icons/FBR.webp"
import kpraLogo from "../../../dist/affiliation-icons/KPRA.webp"
import scciLogo from "../../../dist/affiliation-icons/CHAMBER.webp"

const items = [
  {
    logo: secpLogo,
    abbr: "SECP",
    name: "Securities and Exchange Commission of Pakistan",
    status: "Registered Company",
    color: "#2e7d4f",
  },
  {
    logo: fbrLogo,
    abbr: "FBR",
    name: "Federal Board of Revenue",
    status: "Registered Taxpayer",
    color: "#1e6ea7",
  },
  {
    logo: kpraLogo,
    abbr: "KPRA",
    name: "Khyber Pakhtunkhwa Revenue Authority",
    status: "Registered Sales Taxpayer",
    color: "#2e9e3e",
  },
  {
    logo: scciLogo,
    abbr: "SCCI",
    name: "Sarhad Chamber of Commerce & Industry, Peshawar",
    status: "Corporate Member – Sarhad Chamber of Commerce & Industry",
    color: "#4fb3f6",
  },
]

const AffiliationsTeaser = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-black italic tracking-tight text-msred sm:text-5xl">
            Registrations & Affiliations
          </h2>
          <p className="mt-3 text-base font-medium italic text-black/70 sm:text-lg">
            Our commitment to transparency, compliance, and professional excellence.
          </p>
        </div>

        {/* 4 columns */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.abbr}
              className="flex flex-col items-center border-msred px-6 py-8 text-center lg:border-l-[3px] lg:first:border-l-0"
            >
              {/* Logo */}
              <div className="flex h-40 w-full items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Abbreviation */}
              <h3 className="mt-6 text-3xl font-black italic text-msred">
                {item.abbr}
              </h3>

              {/* Full name */}
              <p className="mt-1 min-h-[3rem] text-sm font-medium italic leading-6 text-black/70">
                {item.name}
              </p>

              {/* Colored underline */}
              <span
                className="mt-3 block h-[2px] w-4/5"
                style={{ backgroundColor: item.color }}
              />

              {/* Status */}
              <div className="mt-4 flex items-center gap-3 text-left">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2"
                  style={{ borderColor: item.color, color: item.color }}
                >
                  <Check size={16} strokeWidth={3} />
                </span>
                <p className="text-xs font-semibold italic leading-5 text-black/70">
                  {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing paragraph */}
        <p className="mx-auto mt-12 max-w-4xl text-center text-sm font-medium leading-7 text-black/70 sm:text-base">
          Our registrations and affiliations demonstrate our commitment to
          operating as a fully compliant, professionally managed, and
          accountable business in Pakistan. We adhere to all applicable
          regulatory requirements and maintain strong relationships with
          relevant government authorities and business institutions to ensure
          transparency, credibility, and sustainable growth.
        </p>

        {/* Link to full page */}
        <div className="mt-8 text-center">
          <Link
            to="/affiliations-certifications"
            className="inline-block rounded-full border border-black/15 px-6 py-3 text-sm font-bold text-black transition hover:border-msred hover:text-msred"
          >
            View Details →
          </Link>
        </div>

      </div>
    </section>
  )
}

export default AffiliationsTeaser