import React from 'react'

const Founder = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HERO */}
        <div className="grid gap-12 lg:grid-cols-[.45fr_.55fr] lg:items-center">

          {/* Image */}
          <div className="relative">
            <div className="aspect-4/5 overflow-hidden rounded-4xl bg-[#111]">
              <img
                src="/founder/founder.jpg"
                alt="Founder Name"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-msred px-6 py-4 text-white shadow-xl">
              <p className="text-2xl font-black">10+</p>
              <p className="text-xs uppercase tracking-wider text-white/80">Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-kicker">
              <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
              Meet the Founder
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Founder Full Name
            </h1>
            <p className="mt-2 text-lg font-semibold text-msred">
              Founder, MS Group
            </p>
            <p className="mt-6 text-base leading-7 text-black/60">
              With over a decade of experience in event management and brand
              experiences, [Founder Name] built MS Group from the ground up
              with one belief — that every event should feel like it was
              made specifically for the people in the room.
            </p>
          </div>
        </div>

        {/* QUOTE */}
        <div className="mt-20 rounded-4xl bg-[#111] px-8 py-14 text-center text-white sm:px-16">
          <span className="text-5xl font-black leading-none text-msred">"</span>
          <p className="mx-auto mt-4 max-w-2xl text-2xl font-black leading-snug sm:text-3xl">
            We don't just plan events. We build moments that people carry
            with them long after the lights go off.
          </p>
          <p className="mt-6 text-sm text-white/50">— Founder Full Name</p>
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