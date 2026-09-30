import React from 'react'

const Section = ({ title, children }) => (
  <section>
    <h2 className="text-xl font-black text-black">{title}</h2>
    {children}
  </section>
)

const List = ({ items }) => (
  <ul className="mt-3 list-disc space-y-2 pl-5">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const services = [
  'Events & Experiences',
  'Brand Activations & Experiential Marketing',
  'Promotional Staffing & Talent Management',
  'Exhibitions, Stalls & Fabrication',
  'Printing, Branding & Outdoor Advertising',
  'Event Production & Media Services',
  'Event Décor, Hospitality & Venue Management',
  'Corporate Gifting & Promotional Merchandise',
  'Software & Web Development',
  'Website Design & Development',
  'Custom Software Development',
  'Business Management Systems',
  'Social Media Management',
  'Digital Marketing & Content Creation',
]

const payments = [
  'Advance payment may be required before work commences.',
  'Project execution will commence only after the agreed advance payment has been received.',
  'Remaining payments shall be made according to the agreed payment schedule.',
  'Delayed payments may result in project delays, suspension of services, or additional charges where applicable.',
]

const digitalTerms = [
  'Project requirements, deliverables, and timelines shall be agreed upon before work begins.',
  'Additional features, revisions, or changes beyond the approved scope may incur additional charges.',
  'Clients are responsible for the accuracy and legality of all content, materials, and information provided.',
  'Domain registration, web hosting, third-party software licenses, advertising budgets, platform fees, and external tools are not included unless specifically stated in writing.',
  'While MS Group strives to achieve the best possible results, specific rankings, traffic levels, sales, leads, engagement, or marketing outcomes cannot be guaranteed.',
  'Ownership of completed websites, software, and digital assets shall transfer to the client upon receipt of full payment, unless otherwise agreed in writing.',
]

const websiteUse = [
  'Use the website for any unlawful purpose.',
  'Attempt unauthorized access to systems, data, or services.',
  "Interfere with the website's functionality or security.",
  'Submit false, misleading, harmful, or inappropriate content.',
]

const Terms = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">

        <p className="section-kicker">
          <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-black/40">
          Last updated: 29 September 2026
        </p>

        <div className="mt-12 space-y-10 text-black/70 leading-7">

          <Section title="1. Introduction">
            <p className="mt-3">
              Welcome to MS Group ("we", "us", or "our"). These Terms &amp;
              Conditions govern your access to and use of our website and
              services. By accessing our website or engaging our services,
              you agree to be bound by these Terms &amp; Conditions.
            </p>
          </Section>

          <Section title="2. Our Services">
            <p className="mt-3">
              MS Group provides professional services including, but not
              limited to:
            </p>
            <List items={services} />
            <p className="mt-3">
              Service availability may vary based on project requirements,
              timelines, locations, and resource availability.
            </p>
          </Section>

          <Section title="3. Quotations & Project Approval">
            <p className="mt-3">
              All quotations, proposals, and estimates provided by MS Group
              are subject to written approval. Any changes to project scope,
              specifications, quantities, timelines, or deliverables may
              result in revised pricing and project schedules.
            </p>
          </Section>

          <Section title="4. Payments & Taxes">
            <List items={payments} />
            <h3 className="mt-6 font-bold text-black">Taxes</h3>
            <p className="mt-2">
              Unless otherwise stated, all quotations, proposals, and
              invoices are exclusive of applicable taxes. Any federal,
              provincial, sales, withholding, food, venue, government, or
              other applicable taxes shall be charged separately in
              accordance with relevant laws and regulations.
            </p>
          </Section>

          <Section title="5. Client Responsibilities">
            <p className="mt-3">
              Clients are responsible for providing accurate information,
              approvals, content, branding materials, access credentials,
              and feedback necessary for project execution. Delays caused by
              incomplete information, late approvals, or requested changes
              may affect project timelines and delivery schedules.
            </p>
          </Section>

          <Section title="6. Software, Website & Digital Services">
            <p className="mt-3">
              For software development, website development, social media
              management, and digital marketing services:
            </p>
            <List items={digitalTerms} />
          </Section>

          <Section title="7. Cancellations & Changes">
            <p className="mt-3">
              If a project, event, campaign, or service is cancelled,
              postponed, or significantly modified after confirmation, MS
              Group reserves the right to recover costs incurred, work
              completed, and any non-refundable third-party expenses.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p className="mt-3">
              All trademarks, logos, content, and materials provided by the
              client remain the property of the client. Creative concepts,
              designs, proposals, presentations, software code, marketing
              materials, and other deliverables created by MS Group remain
              the property of MS Group until full payment has been received,
              unless otherwise agreed in writing.
            </p>
          </Section>

          <Section title="9. Website Use">
            <p className="mt-3">Users agree not to:</p>
            <List items={websiteUse} />
            <p className="mt-3">
              MS Group reserves the right to restrict or terminate access to
              users who violate these Terms.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p className="mt-3">
              To the maximum extent permitted by law, MS Group shall not be
              liable for any indirect, incidental, consequential, special,
              or business-related losses arising from the use of our website
              or services.
            </p>
            <p className="mt-3">
              MS Group's total liability, where applicable, shall not exceed
              the amount paid by the client for the specific services giving
              rise to the claim.
            </p>
          </Section>

          <Section title="11. Force Majeure">
            <p className="mt-3">
              MS Group shall not be responsible for delays, interruptions,
              or failures resulting from circumstances beyond our reasonable
              control, including natural disasters, government actions,
              technical failures, public emergencies, labor disputes,
              transportation disruptions, or other unforeseen events.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p className="mt-3">
              These Terms &amp; Conditions shall be governed by and
              interpreted in accordance with the laws of the Islamic
              Republic of Pakistan. Any disputes arising from these Terms
              shall be subject to the jurisdiction of the competent courts
              of Pakistan.
            </p>
          </Section>

          <Section title="13. Updates to These Terms">
            <p className="mt-3">
              MS Group reserves the right to modify or update these Terms
              &amp; Conditions at any time. Any revisions will become
              effective immediately upon publication on this website.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p className="mt-3">
              MS Group
              <br />
              Email:{' '}
              <a href="mailto:info@msgroup.pk" className="font-semibold text-msred">
                info@msgroup.pk
              </a>
            </p>
            <p className="mt-3">
              If you have any questions regarding these Terms &amp;
              Conditions, please contact our team.
            </p>
          </Section>

        </div>
      </div>
    </div>
  )
}


export default Terms