import React from 'react'

const clients = [
  "Coca-Cola",
  "Nestlé",
  "Unilever",
  "Telenor",
  "Engro",
  "PTCL",
  "Jazz",
  "Nishat Group",
]

const TrustStrip = () => {
  return (
    <section className="border-y border-black/10 bg-[#faf9f9] py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <p className="text-center text-xs font-black uppercase tracking-[.25em] text-black/40">
          Trusted by leading brands
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <span className="text-center text-sm font-black tracking-tight text-black">
                {client}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TrustStrip