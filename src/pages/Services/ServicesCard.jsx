//import React from 'react'
import { useNavigate } from 'react-router-dom'
import event from "../../../dist/service-cards/events.webp"
import brandActivation from "../../../dist/service-cards/brand-activation.jpg"

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
    icon: "✦",
    image: event,
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
    icon: "◎",
    image: brandActivation,
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
    icon: "◉",
    image: "/service-cards/staffing.jpg",
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
    icon: "◇",
    image: "/service-cards/exhibitions.jpg",
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
    icon: "▣",
    image: "/service-cards/printing.jpg"
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
    icon: "▶",
    image: "/service-cards/production-media.jpg"
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
    icon: "❖",
    image: "/service-cards/decor.jpg"
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
    icon: "□",
    image: "/service-cards/gifting.jpg"
  }
];

const Services = () => {
  const navigate = useNavigate()

  const goTo = (id) => {
    navigate(`/services#${id}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
  <p className="text-lg font-bold uppercase tracking-wider text-msred">
    What we do
  </p>

  <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
    Complete solutions for
    <span className="text-msred"> every brand moment.</span>
  </h2>

  <p className="mt-5 max-w-2xl leading-7 text-black/55">
    From <b>Concept to Execution</b>, MS Group Limited brings together <b>strategy,
    creativity, production,</b> and people under one roof—delivering seamless 
    solutions for <b>events, brand activations, experiential marketing, corporate 
    experiences, and beyond.</b>
  </p>
</div>

<div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
  {services.map((service) => (
    <button
      key={service.id}
      onClick={() => goTo(service.id)}
      className="group relative min-h-77.5 overflow-hidden rounded-3xl border border-black/10 text-left transition duration-300 hover:-translate-y-1"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      {/* Dark overlay taake text readable rahe */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/20" />

      {/* Content (image ke upar) */}
      <div className="relative z-10 flex h-full flex-col p-6">
        <div className="flex items-start justify-between">
          <span className="text-xs font-black tracking-widest text-white/50">
            {service.number}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl text-white backdrop-blur-sm transition group-hover:bg-msred">
            {service.icon}
          </span>
        </div>

        <h3 className="mt-12 text-xl font-black leading-tight text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/70">
          {service.short}
        </p>

        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black uppercase tracking-wider text-msred">
          View details
          <span className="transition group-hover:translate-x-1">→</span>
        </span>
      </div>
    </button>
  ))}
</div>
      </section>
    </div>
  )
}

export { services };

export default Services;