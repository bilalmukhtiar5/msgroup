import React, { useState } from 'react'

const jobs = [
  {
    id: "event-coordinator",
    title: "Event Coordinator",
    department: "Operations",
    location: "Lahore, Pakistan",
    type: "Full-time",
    posted: "Posted 2 days ago",
    description:
      "We're looking for a detail-oriented Event Coordinator to help plan and execute corporate events, from concept through to flawless on-ground delivery.",
    responsibilities: [
      "Coordinate event logistics, vendors and timelines",
      "Liaise with clients to understand event requirements",
      "Manage on-site setup and troubleshoot issues in real time",
      "Prepare post-event reports and feedback summaries",
    ],
    requirements: [
      "1-3 years experience in event management",
      "Strong communication and organizational skills",
      "Ability to work under pressure and tight deadlines",
      "Willingness to travel for on-site events",
    ],
  },
  {
    id: "creative-designer",
    title: "Creative Designer",
    department: "Creative",
    location: "Lahore, Pakistan",
    type: "Full-time",
    posted: "Posted 5 days ago",
    description:
      "Join our creative team to design branded experiences, event visuals, signage and marketing collateral across multiple client projects.",
    responsibilities: [
      "Design event branding, signage and promotional material",
      "Collaborate with the production team on visual concepts",
      "Maintain brand consistency across all client deliverables",
      "Prepare print-ready and digital design files",
    ],
    requirements: [
      "Proficiency in Adobe Creative Suite (Illustrator, Photoshop)",
      "Strong portfolio of branding or event design work",
      "Good eye for typography, layout and color",
      "2+ years of relevant design experience",
    ],
  },
  {
    id: "brand-executive",
    title: "Brand Activation Executive",
    department: "Marketing",
    location: "Lahore, Pakistan",
    type: "Full-time",
    posted: "Posted 1 week ago",
    description:
      "We're hiring a Brand Activation Executive to plan and execute experiential marketing campaigns that connect brands with consumers.",
    responsibilities: [
      "Plan and execute brand activation campaigns",
      "Coordinate promotional staff and on-ground teams",
      "Track campaign performance and consumer engagement",
      "Build relationships with retail and mall partners",
    ],
    requirements: [
      "Experience in experiential or field marketing",
      "Strong interpersonal and leadership skills",
      "Comfortable working on-site across multiple locations",
      "Bachelor's degree in Marketing or related field",
    ],
  },
]

const Careers = () => {
  const [openJob, setOpenJob] = useState(null)

  const toggleJob = (id) => {
    setOpenJob(openJob === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Careers
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Come build
            <span className="block text-msred">experiences with us.</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-black/55 sm:text-lg">
            We're always looking for people who care about creativity,
            execution and getting the details right. See our open roles
            below.
          </p>
        </div>

        {/* Job Listings */}
        <div className="mt-14 space-y-4">
          {jobs.map((job) => {
            const isOpen = openJob === job.id

            return (
              <div
                key={job.id}
                className="overflow-hidden rounded-3xl border border-black/10"
              >
                {/* Job Header */}
                <button
                  onClick={() => toggleJob(job.id)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-black/2 sm:p-8"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-black">{job.title}</h3>
                      <span className="rounded-full bg-msred/10 px-3 py-1 text-xs font-bold text-msred">
                        {job.type}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-black/50">
                      {job.department} · {job.location} · {job.posted}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 text-2xl text-msred transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Job Details */}
                {isOpen && (
                  <div className="border-t border-black/10 bg-[#faf9f9] p-6 sm:p-8">
                    <p className="text-sm leading-6 text-black/65">
                      {job.description}
                    </p>

                    <div className="mt-6 grid gap-8 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-black/40">
                          Responsibilities
                        </p>
                        <ul className="mt-3 space-y-2">
                          {job.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-black/65"
                            >
                              <span className="mt-0.5 font-bold text-msred">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-black/40">
                          Requirements
                        </p>
                        <ul className="mt-3 space-y-2">
                          {job.requirements.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-black/65"
                            >
                              <span className="mt-0.5 font-bold text-msred">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                          <a href={`mailto:careers@msgroup.com?subject=Application for ${job.title}`}
                      className="mt-8 inline-flex items-center gap-3 rounded-full bg-msred px-7 py-3.5 text-sm font-bold text-white transition hover:bg-msredDark">
                      Apply Now →
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* No openings fallback / General note */}
        <div className="mt-14 rounded-3xl border border-black/10 bg-[#faf9f9] p-8 text-center">
          <p className="text-sm text-black/55">
            Don't see a role that fits? Send us your resume anyway.
          </p>
          <a
            href="mailto:careers@msgroup.com?subject=General Application"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-msred"
          >
            careers@msgroup.com →
          </a>
        </div>

      </div>
    </div>
  )
}

export default Careers