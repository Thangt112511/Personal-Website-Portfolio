import Image from "next/image";
import ProjectsSection from "./components/projects";


export default function Home() {
 const projects = [
    {
      title: "Census Data Analytics Pipeline - U.S Education & Income Trends",
      desc: "Built an interactive Power BI dashboard using AWS Athena census data (2015–2020) to examine how education levels affect income and poverty across the U.S., revealing that regions with more college graduates have higher incomes and lower poverty rates, while many Southern and rural areas still lag behind.",
      readme:`U.S. Education, Income, and Poverty Dashboard (2015–2020)
Overview

This project explores how educational attainment influences income and poverty across the United States between 2015 and 2020. Using AWS Athena to query census data and Power BI for visualization, I built an interactive dashboard that tracks national, regional, state, and county-level trends to uncover where education most impacts economic outcomes.

Tools & Technologies

AWS S3 and Athena for storing and querying census datasets
Power BI for data modeling, DAX measures, and interactive visualization
SQL and DAX for data aggregation, year filters, and calculated insights
ODBC Connector for live querying from Athena into Power BI

Key Features

Dynamic KPI cards that track % Bachelor+, Median Income, and Poverty % by selected year
Interactive map that drills down from national to state to county levels
Trend analysis showing changes in education and income over time
Correlation visuals linking education attainment to income and poverty levels
Year and State slicers that filter and compare across time and geography

Insights

Regions with higher college attainment consistently show higher income and lower poverty rates
Southern and rural counties continue to lag behind despite national improvement
Education growth is one of the strongest predictors of economic mobility in the dataset

Skills Demonstrated

Data pipeline development using AWS, Athena, and Power BI
Dimensional modeling with star schema design
DAX for dynamic measures and time-based filtering
Interactive dashboard design with drill-through functionality
Data storytelling and insight presentation

Outcome

A fully interactive Power BI dashboard that visualizes how education drives economic prosperity, helping policymakers, researchers, and analysts identify where investments in education can yield the greatest economic impact.`,
      pbix: "/CensusDataAWS.pptx", 
      pdf: "/Sales Dashboard.pdf",
      img: "/proj-census.jpg",
      tags: ["Python", "Power BI", "Excel", "AWS (S3 & Athena)", "SQL"],
      featured: true,
    },
{
      title: "Sales & Profits Analytics Dashboard",
      desc: "Developed to explore sales, costs and profits across cities, products, managers and purchase types.Includes dynamic filters, map visuals, KPI cards and interactable elements so that stake holders can understand the data, uncover trends and quickly identify profit drivers. Cleaned and prepared raw excel data and used DAX measures to calculate interactive KPIs. This dashboard would essentially allow restaurant managers to monitor real-time performance across different locations, track profitability trends and identify which products were high performing",
      readme:``,
      pbix: "/Sales Dashboard.pbix", // add a custom field for pbix 
      pdf: "/Sales Dashboard.pdf",
      img: "/proj-sales.jpg",
      tags: ["Python", "Power BI", "Excel", "DAX", "VBA"],
      featured: false,
    },
{
      title: "Holiday Impact on Retail Sales",
      desc: "Enabled managers to monitor $21.7B sales as data across 45 stores, improving visibility into profitiability trends for holiday season. Authored an end to end retail analytics pipeline with SQL Server, Processed and transformed 6,000+ rows with SQL bulk inserts and star schema modeling, type safe SQL in order to designed and deliver a clean interactive Power BI model with multiple pages showing analytics on real world data such as growth rate, total sales over time.",
      readme:`Holiday Impact on Retail Sales - SQL Server + Power BI
Overview

This project analyzes how holiday periods affect retail sales performance using weekly store-level data. 
A raw CSV file was transformed into a structured SQL data warehouse and connected to Power BI to produce an 
interactive analytics dashboard. The report quantifies seasonality, 4-week rolling trends, and holiday-driven 
revenue spikes, providing insights that can inform decisions around inventory, staffing, and promotional timing.

Tools & Technologies

SQL Server / SSMS – Data warehousing and T-SQL scripting
Power BI Desktop – Data modeling, visualization, and DAX calculations
DAX – Implemented measures for YoY%, 4-week rolling averages, and holiday metrics
Data Modeling – Star schema design (DimDate, DimStore, FactWeeklySales)
CSV Data Source – Weekly retail sales dataset (~6,000+ records)

Key Features

SQL Data Warehouse
Engineered a star schema with modular T-SQL ETL scripts for dimension and fact table loading.
Ingested and validated data via BULK INSERT, type-safe parsing, and integrity constraints.
Implemented non-clustered indexes and data validation checks for faster and cleaner queries.
Power BI Dashboard
Built an interactive data model with defined relationships and a marked date table.
Designed KPI cards, slicers, and time-series visuals for intuitive analysis.
Developed DAX-based measures for 4-week rolling averages, YoY performance, and holiday share of sales.
Created drillthrough pages, custom tooltips, and page navigation for a professional user experience.

Insights

Holiday weeks generated a disproportionate share of revenue, showing consistent sales spikes in late Q4.
Holiday Share % and Holiday YoY % confirmed that holiday periods materially boost annual revenue growth.
Rolling averages revealed clear seasonality patterns and post-holiday slowdowns across stores and years.
Store-level analysis showed that a small group of stores accounts for the majority of total sales, reflecting an 80/20 distribution.
Skills Demonstrated
Data Engineering: SQL-based ETL design, schema modeling, constraints, and indexing.
Business Intelligence: Power BI data modeling, DAX calculations, and KPI development.
Visualization: Interactive dashboards with filters, drillthrough, and dynamic slicing.
Analytical Thinking: Extracted actionable insights on seasonality and operational planning from raw data.

Outcome

Delivered a complete end-to-end analytics solution from raw CSV ingestion to a professional Power BI dashboard. 
The project demonstrates proficiency in SQL data warehousing and business intelligence reporting, 
providing a repeatable framework for analyzing sales performance and quantifying the impact of holidays on revenue.`,
      pbix: "/Walmart Project.pbit", 
      pdf: "/Walmart Project.pdf",
      img: "/proj-walmart.jpg",
      tags: ["Python", "Power BI", "Excel", "SQL"],
      featured: true,
    },
{
      title: "Automobile Performance Report",
      desc: "Created two connected dashboards that allow users to track fuel efficiency, horsepower, and brand popularity over time. Drill-down options include origin, cylinders, and model year, as well as dynamic filters, scatterplots, and bar charts. Provides a comprehensive image of how different regions and brands compared in terms of MPG, horsepower, and number of models between the 1970s and 1980s. Shows sale trends, brand breakdowns and model pricing insights alongside using filters to get the cleanest data. (click me!)",
      link: "https://public.tableau.com/app/profile/thang.tran3889/viz/Autombileproject/Branddash",
      img: "/proj-automobile.jpg",
      tags: ["Tableau", "Excel"],
      featured: false,
    },
    {
      title: "Employee Recognition & Rewards System",
      desc: "Designed and documented a Slack-integrated Employee Recognition & Rewards System (ERRS) to improve morale, engagement and retention. Prepared a full report documentation that includes Gantt and PERT analysis and a break even analysis. Includes user requirements, project scope, communication plans, and project feasibility. Developed data flow diagrams that ex plores all processess to the system. (click me!)",
      link: "ERRS final report.docx.pdf",
      img: "/proj-errs.jpg",
      tags: ["Microsoft Slides", "Excel", "Python", "Lucidchart"],
      featured: false,
    },
      {
      title: "Netflix Data Mining Workflows Project",
      desc: "Analyzed and cleaned nearly 9000 Netflix shows and movives using the Naives Bayes model to uncover patterns in genre, country of origin and ratings with a accuracy of 99.97%. Tested decision tree, logistic regression models as well, but they did worse than Naive Bayes.Found movies dominate over TV shows; dramas, comedies and documentaries are most common; US, India and UK lead in production.",
      link: "#",
      img: "/proj-netflix.jpg",
      tags: ["Rapiderminer", "Excel", "Python"],
      featured: false,
    },
{
      title: "Healthcare Insurance Cost Analysis",
      desc: "Built a interactive data dashboard to explore how traits influence healthcare insurance charges. Performed data cleaning and exploratory data analysis on real world insurance data using Pandas and Seaborn/Plotly. Implemented multiple filters for users to inreactively explore the data with a streamlit sidebar. Deployed using Streamlit cloud and github for public access.",
      readme: `Healthcare Insurance Cost Explorer
Overview

Developed a web-based dashboard that visualizes healthcare insurance charges for 1,300+ policyholders.
Enables exploration of how age, BMI, smoking status, and region influence insurance costs.
Designed to support data storytelling and demographic-specific insights through interactive filters.

Tools & Technologies
Python: Data manipulation, backend logic
Pandas & NumPy: Data cleaning and analysis
Plotly: Interactive visualizations (scatter plots, box plots)
Streamlit: Web app development and deployment
Git & GitHub: Version control and project sharing
Streamlit Cloud: Application hosting

Key Features

Interactive filters for region, smoker status, sex, and age range
Dynamic scatter plots and box plots with hover/click data point inspection
Sidebar-driven UI for live data segmentation
Clean layout with overview, charts, and insights sections
Fully deployed and accessible via web link

Insights

Smoking status is the strongest cost driver, increasing charges by over 300%
Higher BMI and age are correlated with increased charges
Southeast region shows slightly higher median insurance costs
Non-smokers under 30 with BMI under 25 have the lowest average charges

Skills Demonstrated

Data wrangling and preprocessing
Exploratory data analysis and statistical insight generation
Building interactive dashboards for business intelligence
Visual storytelling through data
App deployment and version control workflows

Outcome

Delivered a fully functional and publicly accessible dashboard
Provides clear, filterable views for demographic-specific insurance cost trends
Simulates a real-world analysis product for business or healthcare stakeholders`,
      link: "https://thangtranhealthdashboard.streamlit.app/",
      img: "/proj-healthcare.jpg",
      tags: ["Python", "Pandas", "Excel", "Github", "Plotly", "Streamlit"],
      featured: true,
    },
  ];
 const experience = [
    {
      company: "CounterApp",
      role: "Data Coordinator",
      period: "Aug 2024 – Jun 2025",
      location: "Remote/Boston, MA",
      bullets: [
        "Maintained and reconciled donation and reporting datasets across cash, check, and digital transactions to ensure financial data integrity for nonprofit clients.",
        "Developed and automated reporting dashboards in Excel (pivot tables, macros, VLOOKUP) and Google Sheets, improving reporting accuracy and efficiency.",
        "Queried and validated data using SQL, enhancing the reliability of donation and revenue tracking systems.",
        "Created visualizations in Tableau and Power BI to highlight donation trends and resource allocation for nontechnical stakeholders.",
        "Partnered with product, engineering, and customer success teams to improve data pipelines, strengthen compliance, and deliver timely, insight-driven reports."
      ],
      logo: "/CounterApp.jpg", 
      link: "https://counterapp.io/",         
    },
    {
      company: "Lightforce Orthodontics",
      role: "Process Engineering Co-op",
      period: "June 2023 – May 2024",
      location: "Wilmington, MA",
      bullets: [
        "I had a really good time working at Lightforce, I collaborated with the process engineering team and the floor technicians to help improve process and production by 20%. .",
        "Gained alot of experience in time management, cross team collaboration and leadership through the engineers and my supervisor. Was given the oppurtunity to run my own printline of marketing parts for the whole company, printing with low error rates and efficient time",
        "Assisted in python code debugging and quality assurance for gear that the floor technicians used, also assisted the IT team on several occasions with computer or hardware issues"
      ],
      logo: "/lightforce.jpg", 
      link: "https://lf.co/",         
    },
    {
      company: "Randolph Engineering",
      role: "Technician",
      period: "May 2022 – Jun 2022",
      location: "Randolph, MA",
      bullets: [
        "Performed precision assembly and QA checks on 100+ aviator eyewear units daily, ensuring compliance with manufacturing standards. ",
        "Implemented improvements to shipping workflow, reducing errors in rates in product deliveries",
	"Learned alot about company manufacturing processes in how aviators were produced, how their materials were acquired and cost of production"
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
               href="/Resume.pdf"
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
            Turning messy data into clear decisions with SQL, Python (pandas), and BI (Power BI / Tableau).
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
          
           <a
  href="/Resume.pdf"
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
             	Welcome to my website! I’m Thang Tran, a UMass Lowell graduate with a degree in management information system.
                I am a data driven problem solver and my work turns complex data into clear, actionable insights and story-driven dashboards. Through my co-op at 
		Lightforce Orthodontics and multiple analytics projects, I’ve gained hands-on 
		experience with SQL, Python, Power BI and Tableau. I love learning! If you have any suggestions for my site please let me know!
		I hope we can meet soon!
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
    <ProjectsSection projects={projects} />

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

 

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="mt-3 max-w-prose text-white/80">
              Want to talk about an opportunity or a project? Reach out! I’m based in the Greater Boston area and open to roles.
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
