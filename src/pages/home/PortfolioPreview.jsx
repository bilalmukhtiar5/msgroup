import React from 'react'
import { Link } from 'react-router-dom'

const preview = [
  { id: 1, image: "https://picsum.photos/seed/msportfolio1/600/750", title: "Corporate Gala Night" },
  { id: 2, image: "https://picsum.photos/seed/msportfolio2/600/750", title: "Product Launch Activation" },
  { id: 3, image: "https://picsum.photos/seed/msportfolio3/600/750", title: "Brand Exhibition Stall" },
  { id: 4, image: "https://picsum.photos/seed/msportfolio4/600/750", title: "Outdoor Roadshow" },
]

const PortfolioPreview = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Our Work
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            A glimpse into
            <span className="text-msred"> our recent projects.</span>
          </h2>
        </div>

        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold text-black transition hover:border-msred hover:text-msred"
        >
          View Full Portfolio →
        </Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {preview.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-black text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default PortfolioPreview