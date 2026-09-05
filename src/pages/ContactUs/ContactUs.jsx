import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // yahan apna API call ya email service (EmailJS/Formspree) laga sakte hain
  }

  return (
    <section className="bg-[#111] py-24 text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let's start
            <span className="block text-msred">a conversation.</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
            Event, brand experience ya production ke liye kuch plan kar rahe
            hain? Neeche form fill karein ya seedha email/call karein.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-5">

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/50">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-msred"
                  placeholder="Bilal Mukhtiar"
                />
              </div>
              <div>
                <label className="text-sm text-white/50">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-msred"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-white/50">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-msred"
                placeholder="+92 300 1234567"
              />
            </div>

            <div>
              <label className="text-sm text-white/50">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-2 w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-msred"
                placeholder="Apna event ya idea batayein..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 border-b-2 border-msred pb-2 text-lg font-semibold text-white transition-colors hover:text-msred"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border-l border-msred/50 pl-5">
              <p className="text-sm text-white/40">Email</p>
              <p className="mt-1 text-lg font-semibold">hello@msgroup.com</p>
            </div>
            <div className="border-l border-msred/50 pl-5">
              <p className="text-sm text-white/40">Phone</p>
              <p className="mt-1 text-lg font-semibold">+92 300 1234567</p>
            </div>
            <div className="border-l border-msred/50 pl-5">
              <p className="text-sm text-white/40">Location</p>
              <p className="mt-1 text-lg font-semibold">Lahore, Pakistan</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactUs