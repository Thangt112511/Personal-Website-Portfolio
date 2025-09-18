import Image from "next/image";

export default function Home() {
 const projects = [
    {
      title: "Sales & Profits Analytics Dashboard",
      tech: "Python • Excel • Power BI",
      desc: "ETL + model + dashboard to identify at-risk customers (AUC .78).",
      link: "#", // you can change to an external doc if you have one
      img: "/proj-sales.jpg",
    },
{
      title: "Automobile Performance Report",
      tech: "Tableau • Excel",
      desc: "Map-based carpooling MVP with route matching and basic analytics.",
      link: "https://public.tableau.com/app/profile/thang.tran3889/viz/Autombileproject/Branddash",
      img: "/proj-automobile.jpg",
    },
    {
      title: "Employee Recognition & Rewards System",
      tech: "Microsoft Slides • Microsoft Excel • Lucidchart • Python",
      desc: "Automated weekly KPIs; reduced manual work by ~6h/week.",
      link: "#",
      img: "/proj-errs.jpg",
    },
      {
      title: "Netflix Data Mining Workflows Project",
      tech: "Rapidminer • Microsoft Excel • Python ",
      desc: "Automated weekly KPIs; reduced manual work by ~6h/week.",
      link: "#",
      img: "/proj-netflix.jpg",
    },
  ];
 const experience = [
    {
      company: "Lightforce Orthodontics",
      role: "Process Engineering Co-op",
      period: "June 2023 – May 2024",
      location: "Wilmington, MA",
      bullets: [
        "Built Power BI dashboards used by 5 regions; cut reporting time by 60%.",
        "Designed SQL models (CTEs/window functions) powering weekly KPIs.",
        "Automated Excel workflows with Python (pandas), reducing manual work ~6 h/week."
      ],
      logo: "/lightforce.jpg", // optional logo
      link: "https://lf.co/",         // optional link
    },
    {
      company: "Randolph Engineering",
      role: "Technician",
      period: "May 2022 – Jun 2022",
      location: "Randolph, MA",
      bullets: [
        "Segmented 100k customers (k-means) to improve targeting (+8% CTR).",
        "Built churn features (RFM, tenure) and baseline model (AUC .78)."
      ],
      logo: "/randolph.jpg",
      link: "https://www.randolphusa.com/?srsltid=AfmBOoqb3mv_l_qhSavZZiozCguZAclYZfdDcRiuK76tjyIXimcdZV1B",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top nav (anchors) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="font-semibold">Thang Tran</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
<a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
            <a
               href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded border border-white/30 px-3 py-1.5 hover:bg-white hover:text-black"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* HERO / INTRO */}
      <section id="top" className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2">
        {/* left side: name + title + photo + CTAs */}
        <div className="flex flex-col justify-center">
          <h1 className="text-8xl font-bold">Thang Tran</h1>
          <p className="mt-2 text-lg text-white/80">Business Data Analyst</p>

          {/* headshot (/public/me.jpg) */}
          <div className="mt-6">
            <Image
              src="/me.jpg"
              alt="Thang Tran headshot"
              width={180}
              height={180}
              className="rounded-full border border-white/20"
              priority
            />
          </div>

          {/* quick value line */}
          <p className="mt-6 max-w-xl text-white/80">
            Turning messy data into clear decisions — SQL, Python (pandas), and BI (Power BI / Tableau).
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
          
           <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded border border-white/30 px-4 py-2 hover:bg-white hover:text-black"
	>
  Download Resume
            </a>
          </div>
        </div>

        {/* right side: about card */}
        <div className="flex items-center justify-center">
          <div className="max-w-md rounded-xl bg-white p-6 text-gray-900 shadow-md">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              I’m a data analyst who loves shaping ambiguous datasets into insights teams can act on.
              Comfortable across the stack: cleaning & joining data (SQL), analysis & automation (Python),
              and building crisp dashboards (Power BI / Tableau).
            </p>
            <a
              href="#contact"
              className="mt-4 inline-block rounded bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-2 text-white/70">
          Selected work with outcomes. Ask for code samples or deep-dive writeups.
        </p>

     <div className="mt-8 grid gap-8 md:grid-cols-2">
  {projects.map((p) => {
    const clickable = p.link && p.link !== "#";
const CardContent = (
  <article
  className={`relative z-10 rounded-xl bg-white p-6 text-gray-900 shadow hover:shadow-xl transition-transform duration-200 hover:-translate-y-1 ${
  p.title === "Sales & Profits Analytics Dashboard" ? "p-6 pb-32" : "p-6"
}`}

  >
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{p.tech}</p>

        {p.img && (
          <Image
            src={p.img}
            alt={`${p.title} screenshot`}
            width={640}
            height={360}
            className="mt-3 rounded-lg border border-gray-100"
          />
        )}

        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
          <li>{p.desc}</li>
          <li>
            <span className="font-medium">Impact:</span> Replace this line with a number if you have one
            (e.g., “-60% reporting time”).
          </li>
        </ul>
      </article>
    );

    return (
      <div key={p.title} className="relative">
        {/* the offset gray box */}
         <div className="absolute left-2 bottom-2 h-full w-full rounded-xl bg-gray-300"></div>
        {/* the clickable card */}
        {clickable ? (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
          >
            {CardContent}
          </a>
        ) : (
          CardContent
        )}
      </div>
    );
  })}
</div>
<section id="experience" className="mx-auto max-w-6xl px-6 py-16">
  <h2 className="text-3xl font-semibold">Experience</h2>
  <p className="mt-2 text-white/70">Roles where I delivered measurable impact.</p>

  <div className="mt-8 grid gap-8">
    {experience.map((job) => (
      <div key={`${job.company}-${job.role}`} className="relative">
        {/* gray offset box */}
        <div className="absolute left-2 bottom-2 h-[95%] w-[95%] rounded-xl bg-gray-200"></div>

        {/* clickable wrapper if link provided */}
        {job.link && job.link !== "#" ? (
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
          >
            <article className="relative z-10 rounded-xl bg-white p-6 text-gray-900 shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                {job.logo ? (
                  // if you're already importing Image at top, this works; otherwise use <img>
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={48}
                    height={48}
                    className="rounded-md border border-gray-200"
                  />
                ) : null}
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <div className="text-gray-600">
                    <span className="font-medium">{job.company}</span> • {job.location}
                  </div>
                  <div className="text-sm text-gray-500">{job.period}</div>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-6 text-gray-800">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </article>
          </a>
        ) : (
          <article className="relative z-10 rounded-xl bg-white p-6 text-gray-900 shadow">
            <div className="flex items-start gap-4">
              {job.logo ? (
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={48}
                  height={48}
                  className="rounded-md border border-gray-200"
                />
              ) : null}
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <div className="text-gray-600">
                  <span className="font-medium">{job.company}</span> • {job.location}
                </div>
                <div className="text-sm text-gray-500">{job.period}</div>
              </div>
            </div>

            <ul className="mt-4 list-disc space-y-1 pl-6 text-gray-800">
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        )}
      </div>
    ))}
  </div>
</section>

      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="mt-3 max-w-prose text-white/80">
              Want to talk about an opportunity or a project? Reach out — I’m based in the Greater Boston area and open to roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
  <a
    href="mailto:thangt112511@gmail.com"
    className="rounded bg-white px-5 py-2.5 text-black hover:bg-gray-200"
  >
    Email Me: thangt112511@gmail.com
  </a>
  <a
    href="https://www.linkedin.com/in/thang-tran-0648491b5/"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded border border-white/30 px-5 py-2.5 hover:bg-white hover:text-black"
  >
    LinkedIn
  </a>
  <a
    href="https://github.com/Thangt112511"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded border border-white/30 px-5 py-2.5 hover:bg-white hover:text-black"
  >
    GitHub
  </a>
</div>
          </div>

          {/* simple form (replace action with your Formspree/Basin endpoint later) */}
          <form
            className="rounded-xl bg-white p-6 text-gray-900 shadow-md"
            action="https://formspree.io/f/your-endpoint"
            method="POST"
          >
            <h3 className="text-xl font-semibold">Send a Message</h3>
            <input
              className="mt-4 w-full rounded border border-gray-300 p-3"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="mt-3 w-full rounded border border-gray-300 p-3"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              className="mt-3 w-full rounded border border-gray-300 p-3"
              name="message"
              placeholder="Your message"
              rows={5}
              required
            />
            {/* honeypot to reduce spam (hidden field) */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
            <button
              type="submit"
              className="mt-4 w-full rounded bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Thang Tran • Built with Next.js & Tailwind
        </div>
      </footer>
    </div>
  );
}
