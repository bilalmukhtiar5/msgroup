import React from 'react'
import { Link } from 'react-router-dom'

const AffiliationsTeaser = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="rounded-[2rem] border border-black/10 bg-[#faf9f9] p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Registrations & Affiliations
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Registered with SECP, FBR,
            <span className="text-msred"> KPRA & SCCI.</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-black/55 sm:text-base">
            Our commitment to transparency, compliance, and professional
            excellence.
          </p>
        </div>

        <Link
          to="/affiliations-certifications"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold text-black transition hover:border-msred hover:text-msred lg:mt-0"
        >
          View Details →
        </Link>
      </div>
    </section>
  )
}

export default AffiliationsTeaser