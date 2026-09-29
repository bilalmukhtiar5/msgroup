import React from 'react'

const VideoSection = () => {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="video" className="bg-[#111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Experience MS Group Limited
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            We don't just create events.
            <span className="block text-msred">
              We create experiences.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            From concept to execution, MS Group Limited brings together creativity,
            strategic thinking, production excellence, and seamless execution to
            deliver experiences that people remember.
          </p>
          <button
            onClick={() => goTo("services")}
            className="mt-5 rounded-full bg-msred px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-msredDark"
          >
            Discover What We Create
          </button>
        </div>

        {/* Video */}
        <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/rujFOTT7qgE?autoplay=1&mute=1&loop=1&playlist=rujFOTT7qgE&controls=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Bottom Content */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">

          <div className="border-l border-msred/50 pl-5">
            <p className="text-2xl font-black">01</p>
            <p className="mt-1 text-sm text-white/50">
              Creative Concepts
            </p>
          </div>

          <div className="border-l border-msred/50 pl-5">
            <p className="text-2xl font-black">02</p>
            <p className="mt-1 text-sm text-white/50">
              Professional Production
            </p>
          </div>

          <div className="border-l border-msred/50 pl-5">
            <p className="text-2xl font-black">03</p>
            <p className="mt-1 text-sm text-white/50">
              Memorable Experiences
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default VideoSection