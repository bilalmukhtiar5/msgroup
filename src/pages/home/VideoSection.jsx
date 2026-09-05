import React from 'react'

const VideoSection = () => {
  return (
    <section id="video" className="bg-[#111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

    {/* Section Heading */}
    <div className="mb-12 max-w-3xl">
      <p className="section-kicker">
        <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
        Experience MS Group
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
        We don't just create events.
        <span className="block text-msred">
          We create experiences.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
        From concept to execution, discover how MS Group brings
        creativity, production and unforgettable experiences together.
      </p>
    </div>

    {/* Video */}
{/* Video */}
<div className="aspect-video w-full">
  <video
    className="h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    controls
    poster="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.jpg"
  >
    <source 
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" 
      type="video/webm" 
    />
    <source 
      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>
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