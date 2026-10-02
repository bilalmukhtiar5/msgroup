import { useState } from "react";
import Services, { services } from "../Services/ServicesCard";
import VideoSection from "./VideoSection";
import { Link } from "react-router-dom";
import TrustStrip from "./TrustStrip";
import Testimonials from "./Testimonials";
import AffiliationsTeaser from "./AffiliationsTeaser";

import { ArrowUpRight, ArrowRight } from "lucide-react";




const Home = () => {
  const featured = services.slice(0, 3);

  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (

    <div className="min-h-screen bg-white">


      {/* HERO */}
      <main id="home" className="pt-20">
        <section className="relative overflow-hidden bg-[#111] text-white">
          <div className="absolute -right-32 -top-40 h-130 w-130 rounded-full bg-msred/20 blur-3xl" />
          <div className="absolute -bottom-52 -left-32 h-105 w-105 rounded-full bg-msred/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-162.5 max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div>
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-msred">
                <span className="h-px w-9 bg-msred" />
                Events • Experiences • Brands
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">
                We create
                <span className="block text-msred">experiences</span>
                people remember.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                MS Group Limited delivers integrated solutions across event management,
                brand activations, event production, fabrication, promotional staffing,
                and corporate branding.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => goTo("services")}
                  className="rounded-full bg-msred px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-msredDark"
                >
                  Plan Your Event
                </button>
                <button
                  onClick={() => goTo("contact")}
                  className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold transition hover:bg-white hover:text-black"
                >
                  Talk to Our Team
                </button>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
                <div>
                  <p className="text-3xl font-black">08</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/45">Service Areas</p>
                </div>
                <div>
                  <p className="text-3xl font-black">360°</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/45">Solutions</p>
                </div>
                <div>
                  <p className="text-3xl font-black">01</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/45">Group</p>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="aspect-4/5 rounded-4xl border border-white/10 bg-linear-to-br from-msred/35 via-msred/10 to-white/03 p-4 shadow-2xl">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[.22em] text-white/50">MS Group</span>
                    <span className="h-3 w-3 rounded-full bg-msred" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[.25em] text-msred">Beyond the ordinary</p>
                    <p className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                      Events.
                      <br />Experiences.
                      <br />Brands.
                      <br />Impact.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {["ACTIVATION", "PRODUCTION", "BRANDING", "From Vision to Experience"].map((x) => (
                      <div key={x} className="border border-white/10 bg-white/04 px-3 py-3 text-[10px] font-bold tracking-[.16em] text-white/60">
                        {x}
                      </div>
                    ))}
                  </div>

                  <div className="absolute -right-16 top-24 h-40 w-40 rounded-full border-32px border-msred/70" />
                  <div className="absolute -left-20 bottom-24 h-52 w-52 rounded-full border border-white/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <VideoSection />

        <Services />

        {/* ABOUT STRIP */}
        <section id="about" className="bg-[#111] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="section-kicker">Why MS Group Limited</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                One partner.
                <span className="block text-msred">Multiple capabilities.</span>
              </h2>
            </div>
            <div className="space-y-6 text-white/60 leading-7">
              <p>
                We bring together event expertise, experiential marketing, production, fabrication, staffing, media, and branding less than one roof—making execution simpler, more efficient, and more effective for our clients.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Creative execution", "End-to-end production", "Professional teams", "Brand-focused delivery"].map((x) => (
                  <div key={x} className="border border-white/10 bg-white/03 px-5 py-4 text-sm font-semibold text-white/80">
                    <span className="mr-3 text-msred">+</span>{x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY DETAILS */}



        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          {/* Header */}
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Service details</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Explore our <span className="text-msred">capabilities.</span>
              </h2>
              <p className="mt-4 text-base text-neutral-500 sm:text-lg">
                We plan, design, and deliver complete brand experiences, so you work with one partner instead of many.
              </p>
            </div>

            <Link
              to="/services"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-msred px-6 py-3 font-semibold text-white transition hover:bg-msredDark"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 3 Featured Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((s) => (
              <Link
                key={s.id}
                to="/services"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-msred hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute left-5 top-4 text-sm font-bold tracking-widest text-white/90">
                    {s.number}
                  </span>
                  <span className="absolute right-5 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-msred">
                    {s.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-500">
                    {s.short}
                  </p>

                  {/* Pehle 3 items as tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.items.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-msred"
                      >
                        {item}
                      </span>
                    ))}
                    {s.items.length > 3 && (
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                        +{s.items.length - 3} more
                      </span>
                    )}
                  </div>

                  <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-msred">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Testimonials />
        <AffiliationsTeaser />

        <TrustStrip />
        {/* CTA */}
        <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 mt-20">
          <div className="overflow-hidden rounded-4xl bg-msred px-7 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-white/60">Let’s work together</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Have an event, campaign or brand experience in mind?
              </h2>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-black text-msred lg:mt-0"
            >
              Request a Quote →
            </Link>
          </div>
        </section>
      </main>
      {/* <Blog/> */}
    </div>
  );
}


export default Home