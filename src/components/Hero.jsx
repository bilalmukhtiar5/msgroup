function Hero() {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main id="home" className="pt-20">
      <section className="relative overflow-hidden bg-[#111] text-white">

        {/* Background Effects */}
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-msred/20 blur-3xl" />

        <div className="absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-msred/10 blur-3xl" />

        {/* Hero Container */}
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">

          {/* LEFT CONTENT */}
          <div>

            {/* Small Heading */}
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-msred">
              <span className="h-px w-9 bg-msred" />
              Events • Experiences • Brands
            </p>

            {/* Main Heading */}
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">
              We create
              <span className="block text-msred">
                experiences
              </span>
              people remember.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              MS Group delivers integrated event management, brand activation,
              production, fabrication, staffing and corporate branding solutions.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">

              <button
                onClick={() => goTo("services")}
                className="rounded-full bg-msred px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-msredDark"
              >
                Explore Services
              </button>

              <button
                onClick={() => goTo("contact")}
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold transition hover:bg-white hover:text-black"
              >
                Start a Project
              </button>

            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">

              <div>
                <p className="text-3xl font-black">
                  08
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  Service Areas
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">
                  360°
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  Solutions
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">
                  01
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  Group
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-gradient-to-br from-msred/35 via-msred/10 to-white/[.03] p-4 shadow-2xl">

              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/50 p-7">

                {/* Top */}
                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold uppercase tracking-[.22em] text-white/50">
                    MS Group
                  </span>

                  <span className="h-3 w-3 rounded-full bg-msred" />

                </div>

                {/* Center */}
                <div>

                  <p className="text-sm uppercase tracking-[.25em] text-msred">
                    Beyond the ordinary
                  </p>

                  <p className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                    Events.
                    <br />
                    Brands.
                    <br />
                    Impact.
                  </p>

                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 gap-2">

                  {[
                    "EVENTS",
                    "ACTIVATION",
                    "PRODUCTION",
                    "BRANDING",
                  ].map((x) => (
                    <div
                      key={x}
                      className="border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold tracking-[.16em] text-white/60"
                    >
                      {x}
                    </div>
                  ))}

                </div>

                {/* Decorative Circles */}
                <div className="absolute -right-16 top-24 h-40 w-40 rounded-full border-[32px] border-msred/70" />

                <div className="absolute -left-20 bottom-24 h-52 w-52 rounded-full border border-white/10" />

              </div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Hero;