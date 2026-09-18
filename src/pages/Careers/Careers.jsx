import React, { useState, useEffect } from 'react'

const Careers = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [openJob, setOpenJob] = useState(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs')
        if (!response.ok) throw new Error('Failed to fetch jobs')
        const data = await response.json()
        setJobs(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

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

        {/* Loading State */}
        {loading && (
          <p className="mt-14 text-center text-black/50">Loading jobs...</p>
        )}

        {/* Error State */}
        {error && (
          <p className="mt-14 text-center text-red-600">
            Could not load jobs right now. Please try again later.
          </p>
        )}

        {/* No Jobs State */}
        {!loading && !error && jobs.length === 0 && (
          <p className="mt-14 text-center text-black/50">
            No open positions right now. Check back soon!
          </p>
        )}

        {/* Job Listings */}
        {!loading && !error && jobs.length > 0 && (
          <div className="mt-14 space-y-4">
            {jobs.map((job) => {
              const isOpen = openJob === job._id

              return (
                <div
                  key={job._id}
                  className="overflow-hidden rounded-3xl border border-black/10"
                >
                  {/* Job Header */}
                  <button
                    onClick={() => toggleJob(job._id)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-black/[.02] sm:p-8"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-black">{job.title}</h3>
                        <span className="rounded-full bg-msred/10 px-3 py-1 text-xs font-bold text-msred">
                          {job.type}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-black/50">
                        {job.department} · {job.location}
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
                            {job.responsibilities.map((item, i) => (
                              <li
                                key={i}
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
                            {job.requirements.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-black/65"
                              >
                                <span className="mt-0.5 font-bold text-msred">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <a
                        href={`mailto:careers@msgroup.com?subject=Application for ${job.title}`}
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-msred px-7 py-3.5 text-sm font-bold text-white transition hover:bg-msredDark"
                      >
                        Apply Now →
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* General Note */}
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