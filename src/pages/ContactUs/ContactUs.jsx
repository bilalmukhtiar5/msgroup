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
   <section className="bg-[#f6f4f4] py-24 text-black min-h-screen">
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
      <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
        Event, brand experience ya production ke liye kuch plan kar rahe
        hain? Neeche form fill karein ya seedha email/call karein.
      </p>
    </div>

    {/* Content Grid */}
    <div className="mt-16 grid gap-12 lg:grid-cols-5">

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-3 space-y-6 rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-sm text-black/50">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-msred"
              placeholder="Bilal Mukhtiar"
            />
          </div>
          <div>
            <label className="text-sm text-black/50">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-msred"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-black/50">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-msred"
            placeholder="+92 300 1234567"
          />
        </div>

        <div>
          <label className="text-sm text-black/50">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black outline-none transition focus:border-msred"
            placeholder="Apna event ya idea batayein..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-3 rounded-full bg-msred px-7 py-3.5 text-sm font-bold text-white transition hover:bg-msredDark"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="lg:col-span-2 space-y-8">
        <div className="border-l border-msred/50 pl-5">
          <p className="text-sm text-black/40">Email</p>
          <p className="mt-1 text-lg font-semibold">hello@msgroup.com</p>
        </div>
        <div className="border-l border-msred/50 pl-5">
          <p className="text-sm text-black/40">Phone</p>
          <p className="mt-1 text-lg font-semibold">+92 300 1234567</p>
        </div>
        <div className="border-l border-msred/50 pl-5">
          <p className="text-sm text-black/40">Location</p>
          <p className="mt-1 text-lg font-semibold">Peshawar, Pakistan</p>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default ContactUs