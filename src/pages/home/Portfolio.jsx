import React, { useState } from 'react'

const categories = ["All", "Events", "Activation", "Exhibitions", "Décor"]

const projects = [
  { id: 1, image: "https://picsum.photos/seed/msportfolio1/600/750", title: "Corporate Gala Night", category: "Events" },
  { id: 2, image: "https://picsum.photos/seed/msportfolio2/600/750", title: "Product Launch Activation", category: "Activation" },
  { id: 3, image: "https://picsum.photos/seed/msportfolio3/600/750", title: "Brand Exhibition Stall", category: "Exhibitions" },
  { id: 4, image: "https://picsum.photos/seed/msportfolio4/600/750", title: "Outdoor Roadshow", category: "Activation" },
  { id: 5, image: "https://picsum.photos/seed/msportfolio5/600/750", title: "Award Ceremony", category: "Events" },
  { id: 6, image: "https://picsum.photos/seed/msportfolio6/600/750", title: "Mall Kiosk Setup", category: "Exhibitions" },
  { id: 7, image: "https://picsum.photos/seed/msportfolio7/600/750", title: "Wedding Stage Décor", category: "Décor" },
  { id: 8, image: "https://picsum.photos/seed/msportfolio8/600/750", title: "Trade Show Booth", category: "Exhibitions" },
  { id: 9, image: "https://picsum.photos/seed/msportfolio9/600/750", title: "Campus Activation Drive", category: "Activation" },
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Our work,
            <span className="block text-msred">up close.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/55">
            A look at the events, activations and experiences we've brought
            to life across Pakistan.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                activeCategory === cat
                  ? "bg-msred text-white"
                  : "border border-black/15 text-black/60 hover:border-msred hover:text-msred"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-bold uppercase tracking-wider text-msred">
                  {item.category}
                </p>
                <p className="mt-1 text-sm font-black text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Portfolio