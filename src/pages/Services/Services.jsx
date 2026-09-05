import React from 'react'



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

const Services = () => {
  return (
    
    <div className="min-h-screen bg-white">
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
    </div>
  )
}

export default Services