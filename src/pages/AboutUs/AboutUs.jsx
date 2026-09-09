import React from 'react'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111] pt-32 pb-24 text-white">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-msred/20 blur-3xl" />
        <div className="absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-msred/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            About Us
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            We turn ideas
            <span className="block text-msred">into experiences.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            MS Group is a full-service events and brand experience company,
            built on the belief that every moment can be made unforgettable.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Our Story</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Built on execution,
              <span className="text-msred"> driven by creativity.</span>
            </h2>
          </div>
          <div className="space-y-5 text-black/60 leading-7">
            <p>
              What started as a small team with a passion for events has grown
              into a complete experience company — covering everything from
              creative concept and production to staffing, fabrication and
              nationwide brand campaigns.
            </p>
            <p>
              Today, MS Group works with corporates, government bodies and
              brands across Pakistan to deliver events and activations that
              people actually remember — not just attend.
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-16 sm:grid-cols-4 lg:px-8">
          {[
            { value: "08+", label: "Service Areas" },
            { value: "500+", label: "Events Delivered" },
            { value: "50+", label: "Corporate Clients" },
            { value: "01", label: "Team, Every Detail" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-4xl font-black text-msred sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-kicker">What Drives Us</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            The values behind every project.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Creativity First",
              desc: "Every project starts with an idea worth remembering, not a template.",
            },
            {
              number: "02",
              title: "Flawless Execution",
              desc: "From planning to the last minute of the event, details are never left to chance.",
            },
            {
              number: "03",
              title: "Real Partnerships",
              desc: "We work as an extension of your team, not just a vendor on a checklist.",
            },
          ].map((value) => (
            <div
              key={value.number}
              className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
            >
              <span className="text-xs font-black tracking-widest text-black/30">
                {value.number}
              </span>
              <h3 className="mt-8 text-xl font-black leading-tight">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/50">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-msred px-7 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-white/60">
              Let's work together
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              Ready to create something memorable?
            </h2>
          </div>
          <button className="mt-8 rounded-full bg-white px-7 py-3.5 text-sm font-black text-msred lg:mt-0">
            Get a Quote →
          </button>
        </div>
      </section>

    </div>
  )
}

export default AboutUs