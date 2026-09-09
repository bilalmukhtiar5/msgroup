import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import  { services } from './ServicesCard'


const ServicesDetail = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="min-h-screen bg-white pt-32">

      {/* Heading */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="section-kicker">Service details</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Explore our capabilities.
          </h2>
          <p className="mt-5 text-black/55">
            A complete breakdown of everything MS Group offers across all
            service categories.
          </p>
        </div>

        {/* CATEGORY DETAILS */}
        <div className="space-y-6 pb-24">
          {services.map((service) => (
            <article
              id={service.id}
              key={service.id}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-black/10"
            >
              <div className="grid lg:grid-cols-[.42fr_.58fr]">
                <div className="bg-[#111] p-7 text-white sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-widest text-white/35">
                      {service.number}
                    </span>
                    <span className="text-2xl text-msred">{service.icon}</span>
                  </div>
                  <h3 className="mt-12 max-w-md text-3xl font-black leading-tight sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                    {service.short}
                  </p>
                </div>

                <div className="p-7 sm:p-10">
                  <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border-b border-black/5 py-3 text-sm"
                      >
                        <span className="mt-0.5 font-bold text-msred">✓</span>
                        <span className="text-black/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesDetail