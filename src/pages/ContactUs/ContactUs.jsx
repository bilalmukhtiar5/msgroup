import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Typing shuru hote hi us field ka error hata dein
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.'
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    // Phone validation (optional field, but if filled must be valid)
    const phonePattern = /^[0-9+\-\s]{7,15}$/
    if (formData.phone.trim() && !phonePattern.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setResult(null)

    const form = new FormData(event.target)
    form.append("access_key", "f883bd87-2dd4-4afc-a711-d53860b5b55c")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      })

      const data = await response.json()

      if (data.success) {
        setResult({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setResult({ type: 'error', message: 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setResult({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
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
            Planning an event, brand experience, or production? Fill out the form below, or get in touch with our team directly by email or phone.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-5">

          {/* Form Card */}
          <form
            onSubmit={onSubmit}
            noValidate
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
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition focus:border-msred ${
                    errors.name ? 'border-red-400' : 'border-black/15'
                  }`}
                  placeholder="Your Full Name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="text-sm text-black/50">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition focus:border-msred ${
                    errors.email ? 'border-red-400' : 'border-black/15'
                  }`}
                  placeholder="Your email address"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm text-black/50">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition focus:border-msred ${
                  errors.phone ? 'border-red-400' : 'border-black/15'
                }`}
                placeholder="Enter Your Mobile Number"
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-black/50">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-black outline-none transition focus:border-msred ${
                  errors.message ? 'border-red-400' : 'border-black/15'
                }`}
                placeholder="How can we help you?"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Result Message */}
            {result && (
              <p
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  result.type === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {result.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 rounded-full bg-msred px-7 py-3.5 text-sm font-bold text-white transition hover:bg-msredDark disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border-l border-msred/50 pl-5">
              <p className="text-sm text-black/40">Email</p>
              <p className="mt-1 text-lg font-semibold">info@msgroup.com</p>
            </div>
            <div className="border-l border-msred/50 pl-5">
              <p className="text-sm text-black/40">Phone</p>
              <p className="mt-1 text-lg font-semibold">+92 345 0757518</p>
            </div>
            <div className="border-l border-msred/50 pl-5">
              <p className="text-sm text-black/40">Location</p>
              <p className="mt-1 text-lg font-semibold">Head Office # TF-279, Deans Trade Centre,
                Peshawar Cantt, Saddar, Peshawar, Khyber Pakhtunkhwa, Pakistan.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactUs