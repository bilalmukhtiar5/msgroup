import React from 'react'

const Terms = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">

        <p className="section-kicker">
          <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm text-black/40">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="mt-12 space-y-10 text-black/70 leading-7">

          <section>
            <h2 className="text-xl font-black text-black">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the MS Group website and services, you
              agree to be bound by these Terms & Conditions. If you do not
              agree with any part of these terms, please do not use our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">2. Services</h2>
            <p className="mt-3">
              MS Group provides event management, brand activation,
              production, fabrication, staffing and related services.
              Specific terms for individual projects will be agreed upon
              separately through a signed proposal or contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">3. Use of Website</h2>
            <p className="mt-3">
              You agree to use this website only for lawful purposes and in
              a way that does not infringe the rights of, or restrict or
              inhibit the use of, this website by any third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">4. Intellectual Property</h2>
            <p className="mt-3">
              All content on this website, including text, images, logos
              and designs, is the property of MS Group and may not be
              reproduced or used without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">5. Payments & Cancellations</h2>
            <p className="mt-3">
              Payment terms, cancellation policies and refund conditions for
              services booked with MS Group will be outlined in individual
              service agreements or contracts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">6. Limitation of Liability</h2>
            <p className="mt-3">
              MS Group shall not be held liable for any indirect, incidental
              or consequential damages arising from the use of our website
              or services, to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">7. Changes to Terms</h2>
            <p className="mt-3">
              We reserve the right to update or modify these Terms &
              Conditions at any time. Continued use of our website after
              changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">8. Contact Us</h2>
            <p className="mt-3">
              For any questions regarding these Terms & Conditions, contact
              us at{' '}
              <a href="mailto:hello@msgroup.com" className="font-semibold text-msred">
                hello@msgroup.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Terms