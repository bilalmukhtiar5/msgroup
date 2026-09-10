import React from 'react'

const posts = [
  {
    id: 1,
    image: "https://picsum.photos/seed/msgroup1/600/400",
    title: "5 Things That Make a Corporate Event Unforgettable",
    excerpt:
      "From venue selection to on-ground execution, here are the key elements that separate a good event from a truly memorable one.",
    date: "August 12, 2026",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/msgroup2/600/400",
    title: "Behind the Scenes: Planning a Multi-City Brand Activation",
    excerpt:
      "A look at how our team coordinated a national brand activation campaign across four cities in under three weeks.",
    date: "July 28, 2026",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/msgroup3/600/400",
    title: "Why Experiential Marketing Is Winning Over Traditional Ads",
    excerpt:
      "Consumers remember experiences, not banners. Here's why brands are shifting budgets toward experiential campaigns.",
    date: "July 10, 2026",
  },
]

const Blog = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-2xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            From the Blog
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Insights and stories
            <span className="text-msred"> from the field.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-3xl border border-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-msred">
                  {post.date}
                </p>
                <h3 className="mt-3 text-lg font-black leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/55">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-msred">
                  Read more
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog