import React from "react";

const Contact = () => {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4">
            Contact MS Group
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Let's Create Something
            <span className="block text-gray-400">
              Exceptional Together.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl text-lg leading-relaxed">
            Have an event, travel experience or project in mind?
            Tell us what you need and our team will help bring your
            vision to life.
          </p>

        </div>
      </section>


      {/* Contact + Quotation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>

              <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
                Get In Touch
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                We’re here to help.
              </h2>

              <p className="text-gray-600 mt-5 max-w-lg leading-relaxed">
                Whether you're planning a corporate event,
                conference, exhibition, travel experience or
                special occasion, our team is ready to assist you.
              </p>


              {/* Contact Details */}
              <div className="mt-10 space-y-6">

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    📞
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Call Us
                    </p>

                    <p className="font-semibold">
                      +92 XXX XXXXXXX
                    </p>
                  </div>
                </div>


                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    ✉
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email Us
                    </p>

                    <p className="font-semibold">
                      info@msgroupevents.com
                    </p>
                  </div>
                </div>


                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    📍
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Location
                    </p>

                    <p className="font-semibold">
                      Peshawar, Pakistan
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* Quotation Form */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">

              <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
                Start A Conversation
              </p>

              <h2 className="text-3xl font-bold mt-3">
                Request a Quotation
              </h2>

              <p className="text-gray-600 mt-3">
                Share your requirements and we'll get back to you
                with a customized proposal.
              </p>


              <form className="mt-8 space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                  />
                </div>


                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+92 XXX XXXXXXX"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                  />
                  </div>

                </div>


                {/* Company */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company / Organization
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                  />
                </div>


                {/* Service */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Required
                  </label>

                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option>
                      Corporate Events
                    </option>

                    <option>
                      Conferences & Summits
                    </option>

                    <option>
                      Seminars & Workshops
                    </option>

                    <option>
                      Annual Meetings
                    </option>

                    <option>
                      Catering
                    </option>

                    <option>
                      Travel & Tourism
                    </option>

                    <option>
                      Ticketing
                    </option>

                    <option>
                      Other
                    </option>

                  </select>
                </div>


                {/* Event Date + Guests */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Event Date
                    </label>

                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Number of Guests
                    </label>

                    <input
                      type="number"
                      placeholder="e.g. 100"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                    />
                  </div>

                </div>


                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message / Requirements
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your event or requirements..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black resize-none"
                  />
                </div>


                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Request a Quote
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;