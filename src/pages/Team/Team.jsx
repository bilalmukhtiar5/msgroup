import React from 'react'

const leadership = [
  {
    name: "Muhammad Shehriyar",
    role: "CEO & Managing Director",
    email: "ceo@msgroup.pk",
    image: "/team/ceo.jpg",
  },
]

const management = [
  {
    name: "Sana Feroz",
    role: "Business Development Manager",
    email: "bdm@msgroup.pk",
    image: "/team/person1.jpg",
    description:
      "Driving business growth through client relationships, strategic partnerships, new business opportunities, and effective coordination, with a focus on strengthening MS Group Limited’s market presence and delivering lasting value to clients.",
  },
  {
    name: "Muhammad Suliman",
    role: "Operations & Project Manager",
    email: "operations@msgroup.pk",
    image: "/team/person2.jpg",
    description:
      "Overseeing project execution, operational coordination, team management, and on-ground delivery, ensuring every project is organized efficiently and executed with professionalism, precision, and attention to detail.",
  },
  {
    name: "Sundas Nayab",
    role: "Accounts & Finance Manager",
    email: "accounts@msgroup.pk",
    image: "/team/person3.jpg",
    description:
      "Managing financial records, accounts coordination, payment documentation, budgeting support, and financial administration, ensuring accuracy, transparency, and efficient financial operations across MS Group Limited.",
  },
  {
    name: "Ayesha",
    role: "Admin & HR Manager",
    email: "admin@msgroup.pk",
    image: "/team/person4.jpg",
    description:
      "Overseeing administrative operations, HR coordination, team support, employee documentation, and internal processes, ensuring an organized, professional, and efficient working environment across MS Group Limited.",
  },
  {
    name: "Asia Gul",
    role: "General Enquiries",
    email: "info@msgroup.pk",
    image: "/team/person5.jpg",
    description:
      "Your first point of contact for general enquiries, information requests, and initial assistance, helping visitors and clients connect with the right team at MS Group Limited.",
  },
  {
    name: "Bilal Mukhtiar",
    role: "Web Developer",
    email: "web@msgroup.pk",
    image: "/team/person6.jpg",
    description:
      "Responsible for developing and maintaining the company's website, ensuring a seamless user experience and implementing new features to enhance functionality.",
  },
]

// const staff = [
//   { name: "Full Name", role: "Event Coordinator", image: "/team/staff1.jpg" },
//   { name: "Full Name", role: "Brand Executive", image: "/team/staff2.jpg" },
//   { name: "Full Name", role: "Production Assistant", image: "/team/staff3.jpg" },
//   { name: "Full Name", role: "Design Executive", image: "/team/staff4.jpg" },
//   { name: "Full Name", role: "Marketing Executive", image: "/team/staff5.jpg" },
//   { name: "Full Name", role: "Logistics Officer", image: "/team/staff6.jpg" },
//   { name: "Full Name", role: "Account Executive", image: "/team/staff7.jpg" },
//   { name: "Full Name", role: "Field Coordinator", image: "/team/staff8.jpg" },
// ]

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
          src="/team/ceo.jpg"
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
          Muhammad Shehriyar
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
<section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

  <p className="section-kicker">Management</p>

  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
    Leading each department.
  </h2>

  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

    {management.map((person) => (
      <div
        key={person.name}
        className="overflow-hidden rounded-2xl border border-black/10 bg-white"
      >

        {/* Profile Image */}
        <div className="h-55 w-full overflow-hidden bg-black/5">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Profile Content */}
        <div className="p-5">

          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-msred">
            Management
          </p>

          <h3 className="mt-2 text-lg font-black tracking-tight">
            {person.name}
          </h3>

          <p className="mt-1 text-sm font-semibold text-msred">
            {person.role}
          </p>

          <a
            href={`mailto:${person.email}`}
            className="mt-2 block truncate text-xs text-black/45 transition hover:text-msred"
          >
            {person.email}
          </a>

          <p className="mt-4 text-xs leading-5 text-black/55">
            {person.description}
          </p>

        </div>

      </div>
    ))}

  </div>

</section>

      
      {/* STAFF GRID */}
{/* <section className="bg-[#111] py-20 text-white">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    <p className="section-kicker">Our Staff</p>

    <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
      The team on the ground.
    </h2>

    <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {staff.map((person) => (
        <div
          key={person.name}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/4"
        >

          
          <div className="h-55 w-full overflow-hidden bg-white/6">
            <img
              src={person.image}
              alt={person.name}
              className="h-full w-full object-cover"
            />
          </div>

          
          <div className="p-4">
            <h3 className="text-sm font-black">
              {person.name}
            </h3>

            <p className="mt-1 text-xs text-white/50">
              {person.role}
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section> */}

    </div>
  )
}

export default Team