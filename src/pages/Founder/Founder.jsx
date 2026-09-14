import React from 'react'

const Founder = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HERO */}
        <div className="grid gap-12 lg:grid-cols-[.45fr_.55fr] lg:items-center">

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#111]">
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
              Founder & CEO, MS Group
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
        <div className="mt-20 rounded-[2rem] bg-[#111] px-8 py-14 text-center text-white sm:px-16">
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
              From a small team
              <span className="text-msred"> to a full-service group.</span>
            </h2>
          </div>
          <div className="space-y-5 text-black/60 leading-7">
            <p>
              MS Group started with a handful of people and a simple goal —
              deliver events that clients wouldn't forget. What began as a
              small event management setup has since grown into a
              full-service company spanning experiential marketing,
              production, fabrication, staffing and branding.
            </p>
            <p>
              Under [Founder Name]'s leadership, MS Group has worked with
              corporates, government bodies and leading brands across
              Pakistan, always with the same principle — creativity backed
              by flawless execution.
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
        {/* <div className="mt-20 overflow-hidden rounded-[2rem] bg-msred px-7 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-white/60">
              Let's connect
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Want to work directly with our founder?
            </h2>
          </div>
          <button className="mt-8 rounded-full bg-white px-7 py-3.5 text-sm font-black text-msred lg:mt-0">
            Get in Touch →
          </button>
        </div> */}

      </div>
    </div>
  )
}

export default Founder