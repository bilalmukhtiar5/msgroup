import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Top CTA Strip */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="section-kicker">
              <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
              Let's Talk
            </p>
            <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Got an event in mind?
              <span className="block text-msred">Let's make it unforgettable.</span>
            </h3>
          </div>

          <a
            href="mailto:hello@msgroup.com"
            className="group inline-flex w-fit items-center gap-3 border-b-2 border-msred pb-2 text-lg font-semibold text-white transition-colors hover:text-msred sm:text-xl"
          >
            hello@msgroup.com
          </a>
        </div>

        {/* Middle Content */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-2xl font-black tracking-tight">
              MS <span className="text-msred">Group</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-white/50">
              Creative production for events and experiences that people
              actually remember.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-white/40">Studio</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#about" className="text-white/70 transition-colors hover:text-white">About</a></li>
              <li><a href="#work" className="text-white/70 transition-colors hover:text-white">Our Work</a></li>
              <li><a href="#services" className="text-white/70 transition-colors hover:text-white">Services</a></li>
              <li><a href="#video" className="text-white/70 transition-colors hover:text-white">Showreel</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-white/40">Services</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><span className="text-white/70">Event Production</span></li>
              <li><span className="text-white/70">Creative Direction</span></li>
              <li><span className="text-white/70">Brand Experiences</span></li>
              <li><span className="text-white/70">Live Broadcasts</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white/40">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>+92 300 1234567</li>
              <li>Lahore, Pakistan</li>
              <li className="flex gap-4 pt-2">
                <a href="#" aria-label="Instagram" className="transition-colors hover:text-msred">Instagram</a>
                <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-msred">LinkedIn</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} MS Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer