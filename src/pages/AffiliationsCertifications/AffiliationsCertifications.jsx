import React from 'react'
import { Check } from 'lucide-react'

const authorities = [
  {
    abbr: "SECP",
    name: "Securities and Exchange Commission of Pakistan",
  },
  {
    abbr: "FBR",
    name: "Federal Board of Revenue",
  },
  {
    abbr: "KPRA",
    name: "Khyber Pakhtunkhwa Revenue Authority",
  },
  {
    abbr: "SCCI",
    name: "Sarhad Chamber of Commerce & Industry, Peshawar",
  },
]

const registrationStatus = [
  "Registered Company",
  "Registered Taxpayer",
  "Registered Sales Taxpayer",
  "Corporate Member – Sarhad Chamber of Commerce & Industry",
]

const AffiliationsCertifications = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Registrations & Affiliations
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Committed to
            <span className="block text-msred">transparency and compliance.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
            Our commitment to transparency, compliance, and professional
            excellence.
          </p>
        </div>

        {/* Registered Authorities & Memberships */}
        <div className="mt-16">
          <p className="section-kicker">Registered Authorities & Memberships</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {authorities.map((item) => (
              <div
                key={item.abbr}
                className="rounded-3xl border border-black/10 bg-[#faf9f9] p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-msred/10 text-lg font-black text-msred">
                  {item.abbr}
                </div>
                <p className="mt-5 text-sm leading-6 text-black/60">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Status */}
        <div className="mt-20">
          <p className="section-kicker">Registration Status</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Fully compliant and registered.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {registrationStatus.map((status) => (
              <div
                key={status}
                className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-msred text-white">
                  <Check size={16} strokeWidth={3} />
                </span>
                <p className="text-sm font-semibold text-black/75">{status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mt-20 rounded-[2rem] bg-[#111] px-8 py-14 text-white sm:px-12">
          <p className="section-kicker">Our Commitment</p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            Our registrations and affiliations demonstrate our commitment to
            operating as a fully compliant, professionally managed, and
            accountable business in Pakistan. We adhere to all applicable
            regulatory requirements and maintain strong relationships with
            relevant government authorities and business institutions to
            ensure transparency, credibility, and sustainable growth.
          </p>
        </div>

      </div>
    </div>
  )
}

export default AffiliationsCertifications