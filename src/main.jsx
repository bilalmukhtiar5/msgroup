import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services = [
  {
    id: "events",
    number: "01",
    title: "Events & Experiences",
    short: "Corporate events, conferences, launches, celebrations and high-impact experiences.",
    items: [
      "Corporate Events", "Conferences & Summits", "Seminars & Workshops",
      "Annual Meetings", "Award Ceremonies", "Gala Dinners", "Product Launches",
      "Dealer Conferences", "Employee Engagement Events", "Government & Institutional Events",
      "Sports & Entertainment Events", "Weddings & Celebrations"
    ],
    icon: "✦"
  },
  {
    id: "activation",
    number: "02",
    title: "Brand Activation & Experiential Marketing",
    short: "Turn brand moments into memorable customer experiences across multiple touchpoints.",
    items: [
      "Brand Activations", "Product Sampling", "Product Demonstrations",
      "Consumer Engagement", "Mall & Retail Activations", "In-Store Activations",
      "Roadshows", "Pop-Up Activations", "Campus Activations",
      "National & Multi-City Campaigns"
    ],
    icon: "◎"
  },
  {
    id: "staffing",
    number: "03",
    title: "Promotional Staffing & Talent",
    short: "Professional promotional teams, hosts, ambassadors and event coordination staff.",
    items: [
      "Female Promoters", "Brand Ambassadors", "Ushers & Hostesses",
      "Sales Promoters", "Event Coordinators", "Registration Staff",
      "Promotional Teams", "Influencer & Celebrity Management"
    ],
    icon: "◉"
  },
  {
    id: "exhibitions",
    number: "04",
    title: "Exhibitions, Stalls & Fabrication",
    short: "Custom exhibition environments, booths, kiosks, displays and branded structures.",
    items: [
      "Exhibition Stalls", "Custom Booths", "Trade Show Booths",
      "Mall Kiosks & Pop-Up Stores", "Product Display Units", "Retail Displays",
      "Brand Installations", "Stage & Event Structures", "Set Design", "Branded Counters"
    ],
    icon: "◇"
  },
  {
    id: "printing",
    number: "05",
    title: "Printing, Branding & OOH",
    short: "Complete visual branding, print production, signage and outdoor advertising solutions.",
    items: [
      "Digital & Large Format Printing", "Offset Printing", "Vinyl Printing & Pasting",
      "Flex & Backlit Printing", "Signage & 3D Signage", "LED Signage",
      "Shop & Retail Branding", "Vehicle Branding", "Outdoor Branding",
      "OOH Advertising", "Media Walls", "Corporate Branding", "Promotional Materials"
    ],
    icon: "▣"
  },
  {
    id: "production",
    number: "06",
    title: "Event Production & Media",
    short: "Stage, LED, sound, lighting, AV, streaming and professional event content.",
    items: [
      "Stage Production & Setup", "SMD, LED Screens & Video Walls",
      "Sound & Audio Systems", "Event Lighting", "Trussing & Rigging",
      "AV Equipment & Technical Production", "Live Streaming",
      "Event Photography & Videography", "Drone Coverage", "Video Production",
      "Highlight & Same-Day Event Content"
    ],
    icon: "▶"
  },
  {
    id: "decor",
    number: "07",
    title: "Event Décor, Hospitality & Venue Management",
    short: "Venue styling, décor, catering, hospitality and smooth guest management.",
    items: [
      "Stage & Thematic Décor", "Corporate & Wedding Décor", "Floral & Entrance Décor",
      "Venue Styling", "Furniture & Event Props", "Corporate & Event Catering",
      "VIP Hospitality", "Guest & Registration Management", "Venue Management"
    ],
    icon: "❖"
  },
  {
    id: "gifting",
    number: "08",
    title: "Corporate Gifting & Promotional Merchandise",
    short: "Branded gifts, merchandise and executive items designed around your brand.",
    items: [
      "Corporate & Executive Gifts", "Promotional Giveaways", "Customized Merchandise",
      "Branded Apparel", "T-Shirts & Caps", "Mugs & Pens", "Diaries & Power Banks",
      "USB Drives & Gift Boxes", "Awards, Trophies, Certificates & Plaques"
    ],
    icon: "□"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={() => goTo("home")} className="flex items-center">
            <img src="/ms-group-logo.png" alt="MS Group" className="h-12 w-auto object-contain" />
          </button>

          <nav className="hidden items-center gap-9 text-sm font-semibold lg:flex">
            <button onClick={() => goTo("home")} className="nav-link">Home</button>
            <button onClick={() => goTo("services")} className="nav-link">Services</button>
            <button onClick={() => goTo("about")} className="nav-link">About</button>
            <button onClick={() => goTo("contact")} className="nav-link">Contact</button>
            <button onClick={() => goTo("contact")} className="rounded-full bg-msred px-5 py-2.5 text-white transition hover:bg-msredDark">
              Get a Quote
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-black/10 px-3 py-2 text-xl lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <button onClick={() => goTo("home")} className="text-left">Home</button>
              <button onClick={() => goTo("services")} className="text-left">Services</button>
              <button onClick={() => goTo("about")} className="text-left">About</button>
              <button onClick={() => goTo("contact")} className="text-left">Contact</button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <main id="home" className="pt-20">
        <section className="relative overflow-hidden bg-[#111] text-white">
          <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-msred/20 blur-3xl" />
          <div className="absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-msred/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
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
                MS Group delivers integrated event management, brand activation,
                production, fabrication, staffing and corporate branding solutions.
              </p>

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
              <div className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-gradient-to-br from-msred/35 via-msred/10 to-white/[.03] p-4 shadow-2xl">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/50 p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[.22em] text-white/50">MS Group</span>
                    <span className="h-3 w-3 rounded-full bg-msred" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[.25em] text-msred">Beyond the ordinary</p>
                    <p className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                      Events.
                      <br />Brands.
                      <br />Impact.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {["EVENTS", "ACTIVATION", "PRODUCTION", "BRANDING"].map((x) => (
                      <div key={x} className="border border-white/10 bg-white/[.04] px-3 py-3 text-[10px] font-bold tracking-[.16em] text-white/60">
                        {x}
                      </div>
                    ))}
                  </div>

                  <div className="absolute -right-16 top-24 h-40 w-40 rounded-full border-[32px] border-msred/70" />
                  <div className="absolute -left-20 bottom-24 h-52 w-52 rounded-full border border-white/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker">What we do</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Complete solutions for
              <span className="text-msred"> every brand moment.</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-black/55">
              From concept to execution, MS Group brings strategy, creativity,
              production and people together under one roof.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => goTo(service.id)}
                className="group min-h-[310px] rounded-3xl border border-black/10 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-msred/30 hover:shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-black tracking-widest text-black/30">{service.number}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-msred/10 text-xl text-msred transition group-hover:bg-msred group-hover:text-white">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mt-12 text-xl font-black leading-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/50">{service.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-msred">
                  View details <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ABOUT STRIP */}
        <section id="about" className="bg-[#111] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="section-kicker">Why MS Group</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                One partner.
                <span className="block text-msred">Multiple capabilities.</span>
              </h2>
            </div>
            <div className="space-y-6 text-white/60 leading-7">
              <p>
                We combine event expertise, experiential marketing, production,
                fabrication, staffing, media and branding to make execution simpler
                for our clients.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Creative execution", "End-to-end production", "Professional teams", "Brand-focused delivery"].map((x) => (
                  <div key={x} className="border border-white/10 bg-white/[.03] px-5 py-4 text-sm font-semibold text-white/80">
                    <span className="mr-3 text-msred">+</span>{x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY DETAILS */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="section-kicker">Service details</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Explore our capabilities.
            </h2>
            <p className="mt-5 text-black/55">
              Each service category can become its own detailed page later.
              For this demo, the complete sub-services are shown below.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <article id={service.id} key={service.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-black/10">
                <div className="grid lg:grid-cols-[.42fr_.58fr]">
                  <div className="bg-[#111] p-7 text-white sm:p-10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black tracking-widest text-white/35">{service.number}</span>
                      <span className="text-2xl text-msred">{service.icon}</span>
                    </div>
                    <h3 className="mt-12 max-w-md text-3xl font-black leading-tight sm:text-4xl">{service.title}</h3>
                    <p className="mt-5 max-w-md text-sm leading-6 text-white/50">{service.short}</p>
                  </div>

                  <div className="p-7 sm:p-10">
                    <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 border-b border-black/5 py-3 text-sm">
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

        {/* CTA */}
        <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-msred px-7 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-white/60">Let’s work together</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Have an event, campaign or brand experience in mind?
              </h2>
            </div>
            <button className="mt-8 rounded-full bg-white px-7 py-3.5 text-sm font-black text-msred lg:mt-0">
              Request a Quote →
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 MS Group. All rights reserved.</p>
          <p>Events • Experiences • Branding • Production</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
