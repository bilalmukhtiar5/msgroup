import React from 'react'

const leadership = [
  {
    name: "Full Name",
    role: "CEO/Managing Director",
    email: "ceo@msgroup.pk",
    image: "/team/ceo.jpg",
  },
]

const management = [
  {
    name: "Full Name",
    role: "Business Development Manager",
    email: "bdm@msgroup.pk",
    image: "/team/person1.jpg",
  },
  {
    name: "Full Name",
    role: "Operations / Project Manager",
    email: "operations@msgroup.pk",
    image: "/team/person2.jpg",
  },
  {
    name: "Full Name",
    role: "Accounts / Finance",
    email: "accounts@msgroup.pk",
    image: "/team/person3.jpg",
  },
  {
    name: "Full Name",
    role: "Admin / HR Manager",
    email: "admin@msgroup.pk",
    image: "/team/person3.jpg",
  },
  {
    name: "Full Name",
    role: "General Enquiries",
    email: "info@msgroup.pk",
    image: "/team/person3.jpg",
  },
]

const staff = [
  { name: "Full Name", role: "Event Coordinator", image: "/team/staff1.jpg" },
  { name: "Full Name", role: "Brand Executive", image: "/team/staff2.jpg" },
  { name: "Full Name", role: "Production Assistant", image: "/team/staff3.jpg" },
  { name: "Full Name", role: "Design Executive", image: "/team/staff4.jpg" },
  { name: "Full Name", role: "Marketing Executive", image: "/team/staff5.jpg" },
  { name: "Full Name", role: "Logistics Officer", image: "/team/staff6.jpg" },
  { name: "Full Name", role: "Account Executive", image: "/team/staff7.jpg" },
  { name: "Full Name", role: "Field Coordinator", image: "/team/staff8.jpg" },
]

const Team = () => {
  return (
    <div className="min-h-screen bg-white pt-32">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="section-kicker">
          <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
          Our Team
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          The people behind
          <span className="block text-msred">every experience.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-black/55">
          From leadership to execution, meet the team that brings MS Group's
          events and brand experiences to life.
        </p>
      </section>

      {/* CEO / LEADERSHIP FEATURED */}
      <section className="mx-auto mt-16 max-w-7xl px-5 lg:px-8">
        {leadership.map((person) => (
          <div
            key={person.name}

            className="overflow-hidden rounded-4xl bg-[#111] text-white lg:flex lg:items-center"
          >
            <div className="aspect-square w-full overflow-hidden lg:w-85">
              <img
                src={person.image}
                alt={person.name}
                className="h-full w-full object-cover"
              />
             
            </div>
            <div className="p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[.25em] text-msred">
                Leadership
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {person.name}
              </h2>
              <p className="mt-2 text-white/50">{person.role}</p>
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/60">{person.email}</p>
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/60">
                Leading MS Group's vision with a focus on creativity,
                client relationships and flawless execution across every
                project.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* MANAGEMENT */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="section-kicker">Management</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
          Leading each department.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {management.map((person) => (
            <div
              key={person.name}
              className="overflow-hidden rounded-3xl border border-black/10"
            >
              <div className="aspect-4/5 w-full overflow-hidden bg-black/5">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black">{person.name}</h3>
                <p className="mt-1 text-sm text-msred">{person.role}</p>
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-2 inline-block text-sm text-msred hover:text-msredDark"
                  >
                    {person.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STAFF GRID */}
      <section className="bg-[#111] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="section-kicker">Our Staff</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            The team on the ground.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {staff.map((person) => (
              <div
                key={person.name}
                className="overflow-hidden rounded-2xl bg-white/4 border border-white/10"
              >
                <div className="aspect-square w-full overflow-hidden bg-white/6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-black">{person.name}</h3>
                  <p className="mt-0.5 text-xs text-white/50">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Team