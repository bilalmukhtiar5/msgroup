import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">

        <p className="section-kicker">
          <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-black/40">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="mt-12 space-y-10 text-black/70 leading-7">

          <section>
            <h2 className="text-xl font-black text-black">1. Introduction</h2>
            <p className="mt-3">
              MS Group ("we", "us", "our") respects your privacy and is
              committed to protecting any personal information you share
              with us. This Privacy Policy explains how we collect, use and
              protect your information when you visit our website or use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">2. Information We Collect</h2>
            <p className="mt-3">
              We may collect personal information such as your name, email
              address, phone number and any details you submit through our
              contact forms or inquiries. We may also collect non-personal
              data such as browser type, device information and usage
              patterns to improve our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">3. How We Use Your Information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>To respond to inquiries and provide requested services</li>
              <li>To improve our website, services and customer experience</li>
              <li>To send updates, offers or communications, where consented to</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">4. Sharing of Information</h2>
            <p className="mt-3">
              We do not sell or rent your personal information to third
              parties. We may share information with trusted partners or
              vendors solely for the purpose of delivering our services,
              under confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">5. Data Security</h2>
            <p className="mt-3">
              We implement reasonable technical and organizational measures
              to protect your information from unauthorized access, loss or
              misuse. However, no method of transmission over the internet
              is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">6. Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us using the
              details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-black">7. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please
              contact us at{' '}
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

export default PrivacyPolicy