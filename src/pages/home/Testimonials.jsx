import React from 'react'

const testimonials = [
  {
    quote:
      "MS Group handled our annual conference from start to finish without a single hiccup. Their attention to detail and on-ground coordination made our job effortless.",
    name: "Ahmed Raza",
    role: "Marketing Director, Placeholder Co.",
  },
  {
    quote:
      "We've worked with several event agencies before, but MS Group's creative direction and execution speed set them apart. Our product launch got exactly the buzz we wanted.",
    name: "Sana Khalid",
    role: "Brand Manager, Placeholder Brand",
  },
  {
    quote:
      "From fabrication to staffing, everything was managed under one roof. That alone saved us weeks of back and forth with multiple vendors.",
    name: "Bilal Farooq",
    role: "Operations Head, Placeholder Group",
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-2xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Client Voices
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            What our clients
            <span className="text-msred"> say about us.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/[.03] p-7 sm:p-8"
            >
              <span className="text-4xl font-black leading-none text-msred">"</span>
              <p className="mt-4 flex-1 text-sm leading-6 text-white/70">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-black">{t.name}</p>
                <p className="mt-0.5 text-xs text-white/45">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials