import React from 'react'
import CEO from "../../assets/our-team/Managing-Director.webp"
import bilal from "../../assets/our-team/bilal-mukhtiar.webp"
import ayesha from "../../assets/our-team/ayesha-ishfaq.webp"
import junaid from "../../assets/our-team/muhammad-junaid-waris.webp"
import munir from "../../assets/our-team/munir.webp"
import gulalai from "../../assets/our-team/gulalai-khan.webp"
import nayyab from "../../assets/our-team/nayyab.webp"
import asia from "../../assets/our-team/asia-gul.png"

const leadership = [
  {
    name: "Muhammad Shehriyar",
    role: "CEO & Managing Director",
    email: "ceo@msgroup.pk",
    image: CEO,
  },
]

const management = [
  {
    name: "Muhammad Junaid Waris",
    role: "Business Development Manager",
    email: "bdm@msgroup.pk",
    image: junaid,
    description:
      "Driving business growth through client relationships, strategic partnerships, new business opportunities, and effective coordination, with a focus on strengthening MS Group Limited’s market presence and delivering lasting value to clients.",
  },
  {
    name: "Munir Ali",
    role: "Operations & Project Manager",
    email: "operations@msgroup.pk",
    image: munir,
    description:
      "Overseeing project execution, operational coordination, team management, and on-ground delivery, ensuring every project is organized efficiently and executed with professionalism, precision, and attention to detail.",
  },
  {
    name: "Sundas Nayab",
    role: "Accounts & Finance Manager",
    email: "accounts@msgroup.pk",
    image: nayyab,
    description:
      "Managing financial records, accounts coordination, payment documentation, budgeting support, and financial administration, ensuring accuracy, transparency, and efficient financial operations across MS Group Limited.",
  },
  {
    name: "Ayesha Ishfaq",
    role: "Admin & HR Manager",
    email: "admin@msgroup.pk",
    image: ayesha,
    description:
      "Overseeing administrative operations, HR coordination, team support, employee documentation, and internal processes, ensuring an organized, professional, and efficient working environment across MS Group Limited.",
  },
  {
    name: "Gulalai Khan",
    role: "General Enquiries",
    email: "info@msgroup.pk",
    image: gulalai,
    description:
      "Your first point of contact for general enquiries, information requests, and initial assistance, helping visitors and clients connect with the right team at MS Group Limited.",
  },
  {
    name: "Bilal Mukhtiar",
    role: "Web Developer",
    email: "web@msgroup.pk",
    image: bilal,
    description:
      "Responsible for developing and maintaining the company's website, ensuring a seamless user experience and implementing new features to enhance functionality.",
  },
  {
    name: "Asia Gul",
    role: "Careers & Recruitment Manager",
    email: "careers@msgroup.pk",
    image: asia,
    description:
      "Managing recruitment, career opportunities, candidate screening, interview coordination, and onboarding support, ensuring an efficient hiring process and a professional recruitment experience."
  },
]


const Team = () => {
  return (
    <div className="min-h-screen bg-white pt-32">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="section-kicker text-sm">
          <span className="mr-3 inline-block h-px w-7 bg-msred align-middle" />
          Our Team
        </p>

        <h1 className="mt-3 max-w-xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          The people behind
          <span className="block text-msred">every experience.</span>
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-black/55 sm:text-base">
          From leadership to execution, meet the team that brings MS Group's
          events and brand experiences to life.
        </p>
      </section>

      {/* CEO / LEADERSHIP */}
      <section className="mx-auto mt-12 max-w-7xl px-5 lg:px-8">

        <p className="section-kicker">Leadership</p>

        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
          Leadership team.
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 bg-white">
          <div className="grid lg:grid-cols-[280px_1fr]">

            {/* CEO Image */}
            <div className="h-80 w-full overflow-hidden bg-black/5 lg:h-full">
              <img
                src={CEO}
                alt="Muhammad Shehriyar"
                className="h-full w-full object-cover"
              />
            </div>
            {/* CEO Content */}
            <div className="p-6 sm:p-8">

              <p className="text-xs font-bold uppercase tracking-[.2em] text-msred">
                Leadership
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                MUHAMMAD SHEHRIYAR
              </h3>

              <p className="mt-1 text-sm font-semibold text-msred">
                CEO & Managing Director
              </p>

              <div className="mt-5 max-w-3xl space-y-3 text-sm leading-6 text-black/60">

                <p>
                  Muhammad Shehriyar is an entrepreneur and business leader with a
                  growing portfolio of companies spanning <strong className="text-black/80">
                    event management, brand experiences, printing and creative
                    solutions, and emerging consumer-focused ventures
                  </strong>.
                </p>

                <p>
                  As <strong className="text-black/80">CEO & Managing Director of
                    MS Group Limited</strong>, he leads the company’s strategic vision
                  with a focus on <strong className="text-black/80">
                    innovation, operational excellence, strong client relationships,
                    and long-term growth
                  </strong>.
                </p>

                <p>
                  He also provides leadership across <strong className="text-black/80">
                    Jehanzeb Sons Group, Print Right (Private) Limited, and other
                    business ventures
                  </strong>, working to build sustainable businesses while carrying
                  forward the entrepreneurial values and legacy established by his
                  late father, <strong className="text-black/80">
                    Muhammad Jehanzeb
                  </strong>.
                </p>

                <p>
                  With a forward-looking approach and a strong commitment to quality,
                  Muhammad Shehriyar continues to expand the family’s business legacy—
                  bringing together <strong className="text-black/80">
                    creativity, professionalism, strategic thinking, and execution
                  </strong> across every venture.
                </p>

              </div>

              {/* Closing Statement */}
              <p className="mt-5 text-sm font-black text-black">
                Building on a Legacy. Creating the Future.
              </p>

            </div>
          </div>
        </div>

      </section>



    
      {/* MANAGEMENT */}
{/* MANAGEMENT */}
<section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

  <p className="section-kicker">Management</p>

  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
    Leading each department.
  </h2>

  <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

    {management.map((person) => (
      <div
        key={person.name}
        className="overflow-hidden rounded-2xl border border-black/10 bg-white"
      >

        {/* Profile Image */}
        <div className="h-64 w-full overflow-hidden bg-black/5">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Profile Content */}
        <div className="p-4">

          <p className="text-[9px] font-bold uppercase tracking-[.18em] text-msred">
            Management
          </p>

          <h3 className="mt-2 text-base font-black leading-tight tracking-tight">
            {person.name}
          </h3>

          <p className="mt-1 text-xs font-semibold leading-4 text-msred">
            {person.role}
          </p>

          <a
            href={`mailto:${person.email}`}
            className="mt-2 block truncate text-[11px] text-black/45 transition hover:text-msred"
          >
            {person.email}
          </a>

          <p className="mt-4 text-[11px] leading-5 text-black/55">
            {person.description}
          </p>

        </div>
      </div>
    ))}

  </div>
</section>
    </div>
  )
}

export default Team