import React from 'react'
import image1 from "../../../dist/brand-icons/sir-jahanzaib.webp"

const Founder = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HERO */}
       {/* HERO */}
<div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:items-center">

  {/* Image */}
  <div className="relative flex justify-center lg:justify-start">
    <div className="h-90 w-72.5 overflow-hidden rounded-3xl bg-[#111]">
      <img
        src={image1}
        alt="Late Muhammad Jehanzeb"
        className="h-full w-full object-cover object-top"
      />
    </div>

    {/* Experience Badge */}
    <div className="absolute bottom-5 right-0 rounded-2xl bg-msred px-5 py-4 text-white shadow-xl lg:right-3.75">
      <p className="text-2xl font-black">10+</p>
      <p className="text-xs uppercase tracking-wider text-white/80">
        Years of Experience
      </p>
    </div>
  </div>

  {/* Content */}
  <div className="max-w-3xl">
    <p className="section-kicker">
      <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
      Meet the Founder
    </p>

    <p className="mt-4 italic font-black text-black/70">
      IN LOVING MEMORY
    </p>

    <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
      LATE MUHAMMAD JEHANZEB
    </h1>

    <p className="mt-2 text-lg font-semibold text-msred">
      Founder & Visionary
    </p>

    <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-black/60">
      <p>
        A visionary entrepreneur whose dedication, leadership, and commitment
        to excellence laid the foundation for a lasting business legacy.
      </p>

      <p>
        As the founder of Jehanzeb Sons Group, MS Group Limited, and Print
        Right (Private) Limited, he built his businesses with purpose,
        professionalism, and a commitment to creating meaningful experiences.
      </p>

      <p>
        Although he is no longer with us, his vision, values, and legacy
        continue to live on through the businesses, people, and experiences
        he inspired.
      </p>

      <p className="font-bold text-black">
        His Legacy Continues. His Vision Lives On.
      </p>
    </div>
  </div>
</div>

        {/* QUOTE */}
        <div className="mt-20 rounded-4xl bg-[#111] px-8 py-14 text-center text-white sm:px-16">
          
          <span className="text-5xl font-black leading-none text-msred">"Founder Legacy Quote"</span>
          <p className="mx-auto mt-4 max-w-2xl text-2xl font-black leading-snug sm:text-3xl">
            “We don’t just plan events. We create moments that people carry with them long after the lights go off.”
          </p>
          <p className="mt-6 text-sm text-white/50">— Late Muhammad Jehanzeb
Founder & Visionary
</p>
        </div>

        {/* STORY */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-kicker">The Journey</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              From a Small Team
              <span className="text-msred"> to a Full-Service Group.</span>
            </h2>
          </div>
          <div className="space-y-5 text-black/60 leading-7">
            <p>
              MS Group began with a small team and a simple goal—to create 
              meaningful events and experiences that people remember.
              What started as an event management business has grown into a 
              full-service group offering experiential marketing, event production, 
              fabrication, promotional staffing, media, and branding solutions.
            </p>
            <p>
              Founded under the vision and leadership of <b>Late Muhammad Jehanzeb, 
              MS Group Limited</b>, has continued to grow through a commitment to 
              creativity, professionalism, quality, and strong execution.
            </p>
            <p>
              Today, that vision continues through a growing team and expanding 
              capabilities, serving corporate clients, government and institutional 
              organizations, and leading brands across Pakistan. Building on a Legacy. Creating the Future.
            </p>
          </div>
        </div>

        {/* MILESTONES */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {[
            { value: "2015", label: "MS Group Founded" },
            { value: "500+", label: "Events Delivered" },
            { value: "50+", label: "Corporate Partners" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-black/10 p-8 text-center"
            >
              <p className="text-4xl font-black text-msred">{item.value}</p>
              <p className="mt-2 text-sm text-black/50">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
       

      </div>
    </div>
  )
}

export default Founder