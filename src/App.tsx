import { useEffect, useState, type SyntheticEvent } from "react";

// Hosted portfolio images in the exact order provided.
const citrackerLogin = "/citracker-login.jpg";
const cppCertificate = "/cpp-certificate.jpg";
const shallowSleepGameplay = "/shallow-sleep-gameplay.png";
const sqlBasicsCertificate = "/sql-basics-certificate.png";
const sqlIntermediateCertificate = "/sql-intermediate-certificate.jpg";
const sqlIntroductionCertificate = "/sql-introduction-certificate.jpg";
const vestEnclosureBox = "/vest-enclosure-box.png";
const vestEnclosureCurved = "/vest-enclosure-curved.png";
const athenaMaeBaranaResume = "/Athena-Mae-Barana-Resume.jpg";
const athenaProfile = "/athena-profile.jpg";
const citInventoryScreen = "/cit-inventory-screen.png";
const postureVest = "/posture-vest.png";
const ziploc8Backpack = "/ziploc8-backpack.png";
const ziploc8Hardware = "/ziploc8-hardware.png";
const faviconUrl = "/favicon.png";

const handleProfileImageError = (event: SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  image.onerror = null;
  image.style.display = "none";
};

const handleContentImageError = (event: SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  image.onerror = null;
  image.style.display = "none";
};

type Project = {
  id: string;
  title: string;
  shortTitle: string;
  role: string;
  category: "Web" | "Hardware" | "Creative";
  year: string;
  description: string;
  contributions?: string[];
  problem?: string;
  badge?: string;
  link?: { label: string; href: string };
  fit?: "contain" | "screen";
  gallery?: { src: string; caption: string }[];
  tags: string[];
  image: string;
};

type Certificate = {
  id: string;
  title: string;
  provider: string;
  date: string;
  image: string;
};

const projectData: Omit<Project, "id">[] = [
  {
    title: "CiTracker",
    shortTitle: "Classroom Attendance and Student Performance Management System",
    role: "Frontend Developer",
    category: "Web",
    year: "2026",
    badge: "Thesis",
    description:
      "CiTracker is an integrated classroom attendance and student performance management system that streamlines attendance monitoring, grading, assessments, and academic performance tracking. The system utilizes NFC technology for attendance validation and provides web and mobile accessibility for professors and students.",
    contributions: [
      "Developed responsive user interfaces using React.",
      "Designed dashboard for professor.",
      "Implemented attendance, grading, and assessment screens.",
      "Integrated frontend components with Supabase services.",
      "Participated in debugging, testing, and UI improvements.",
    ],
    tags: ["React", "JavaScript", "HTML", "CSS", "Supabase", "Android Studio", "NFC Technology"],
    link: { label: "Visit ci-tracker.online", href: "https://ci-tracker.online" },
    image: citrackerLogin,
    fit: "screen",
  },
  {
    title: "Posture Vest",
    shortTitle: "A wearable cue for better movement.",
    role: "Programmer & 3D Modeler",
    category: "Hardware",
    year: "2026",
    description:
      "A wearable technology project designed to address posture-related concerns through embedded system integration. The vest monitors posture and assists users in maintaining proper body alignment, providing a practical solution for posture correction and ergonomic awareness.",
    contributions: [
      "Assisted in embedded system development.",
      "Created 3D models and design prototypes.",
      "Participated in assembly and testing.",
      "Conducted troubleshooting and refinement.",
    ],
    problem: "Poor posture habits and posture-related physical strain.",
    tags: ["Thonny", "Embedded Systems", "AutoCAD", "Ultimaker", "3D Modeling"],
    image: postureVest,
    fit: "contain",
    gallery: [
      { src: vestEnclosureCurved, caption: "AutoCAD / Curved enclosure with lid" },
      { src: vestEnclosureBox, caption: "AutoCAD / Component housing with ports" },
    ],
  },
  {
    title: "CIT Inventory",
    shortTitle: "Making every asset visible.",
    role: "Lead Designer",
    category: "Web",
    year: "2026",
    description:
      "A web-based inventory management system developed for the College of Industrial Technology to improve laboratory inventory organization and asset management. The system enables administrators to monitor equipment records, track asset availability, and manage laboratory resources efficiently.",
    contributions: [
      "Designed the complete user interface.",
      "Created screen layouts and system mockups.",
      "Developed navigation designs and user flows.",
      "Contributed to system planning and documentation.",
    ],
    tags: ["Figma", "UI/UX Design", "Web System Design"],
    image: citInventoryScreen,
    fit: "screen",
  },
  {
    title: "Shallow Sleep",
    shortTitle: "A story you can step inside.",
    role: "Lead Gameplay Programmer & Narrative Designer",
    category: "Creative",
    year: "2025",
    description:
      "Shallow Sleep is a 2D narrative visual novel developed using the Pygame library. The game combines storytelling, dialogue systems, and interactive gameplay mechanics to create an immersive player experience. The project features chapter-based progression, custom pixel art environments, and character-driven storytelling.",
    contributions: [
      "Developed gameplay functionality and mechanics.",
      "Designed narrative progression and dialogue systems.",
      "Implemented player interaction features.",
      "Assisted in bug testing and optimization.",
      "Contributed to project planning and documentation.",
    ],
    tags: ["Python", "Pygame", "LibreSprite", "Visual Studio Code"],
    image: shallowSleepGameplay,
  },
  {
    title: "ZIPLOC8",
    shortTitle:
      "Developing a GPS Tracking Device with an Automated Location Sending Feature Attached in a Backpack to Prevent the Cases of Missing Residents",
    role: "Hardware & Embedded Systems Project",
    category: "Hardware",
    year: "2023",
    description:
      "ZIPLOC8 is a GPS tracking device with an automated location sending feature, designed to be attached to a backpack to help prevent cases of missing residents. A GPS module determines the carrier's position while a GSM module sends the location automatically, and a rechargeable power module keeps the compact enclosure running.",
    tags: ["GPS Tracking", "GY-NEO6MV2", "SIM800L GSM", "Embedded Systems"],
    image: ziploc8Backpack,
    fit: "contain",
    gallery: [
      { src: ziploc8Backpack, caption: "Tracker attached to the backpack" },
      { src: ziploc8Hardware, caption: "Inside: GPS, SIM800L GSM and charging modules" },
    ],
  },
];

const projects: Project[] = projectData.map((project, index) => ({
  ...project,
  id: String(index + 1).padStart(2, "0"),
}));

const skills = [
  "React",
  "JavaScript",
  "HTML / CSS",
  "Figma",
  "Supabase",
  "PostgreSQL",
  "Python",
  "Android",
  "GitHub",
  "UI / UX",
  "SQL",
  "3D Modelling",
  "Computer Hardware",
  "Problem Solving",
];

const skillsImproved = [
  "Frontend Development",
  "React Development",
  "Database Management",
  "Mobile Application Development",
  "UI/UX Design",
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Technical Documentation",
];

const contactDetails = [
  { label: "Name", value: "Athena Mae N. Baraña" },
  { label: "Email", value: "athenamaebarana@gmail.com", href: "mailto:athenamaebarana@gmail.com" },
  {
    label: "GitHub",
    value: "github.com/sobrangatinaCpu",
    href: "https://github.com/sobrangatinaCpu",
  },
  { label: "Location", value: "Malolos, Bulacan, Philippines" },
  { label: "Target position", value: "Frontend Developer Intern" },
  { label: "Availability", value: "Available for 500-Hour Internship Program" },
];

const certificates: Certificate[] = [
  {
    id: "01",
    title: "SQL Basics",
    provider: "LearnSQL.com",
    date: "08 Nov 2025",
    image: sqlBasicsCertificate,
  },
  {
    id: "02",
    title: "SQL Intermediate",
    provider: "SoloLearn",
    date: "11 Oct 2025",
    image: sqlIntermediateCertificate,
  },
  {
    id: "03",
    title: "Introduction to SQL",
    provider: "SoloLearn",
    date: "23 Aug 2025",
    image: sqlIntroductionCertificate,
  },
  {
    id: "04",
    title: "Introduction to C++",
    provider: "SoloLearn",
    date: "27 Mar 2025",
    image: cppCertificate,
  },
];

const resumeTimeline = [
  {
    kind: "Work",
    period: "Nov 2020 — Nov 2025",
    title: "Inventory Clerk",
    place: "L’arc en Ciel Bag",
    points: [
      "Responsible for handling the stocks using Microsoft Office.",
      "Ensuring the number of stocks are enough needed for the rest of the month.",
    ],
  },
  {
    kind: "Education",
    period: "2023 — Present",
    title: "Bachelor of Industrial Technology, Major in Computer Technology",
    place: "Bulacan State University",
    points: [
      "Enhanced knowledge in computer programming, specifically C++ and MySQL.",
      "Learned computer hardware skills such as troubleshooting and repair.",
    ],
  },
  {
    kind: "Education",
    period: "2021 — 2023",
    title: "STEM",
    place: "City of Malolos Integrated School, Sto. Rosario",
    points: [
      "Led the capstone research group titled “Developing a GPS tracking device with an automated location sending feature attached in a backpack to prevent the cases of missing residents” in Barangay Panasahan.",
    ],
  },
];

const resumeSkills = [
  "People Skills",
  "Programming",
  "Time Management",
  "Adaptability",
  "Effective Communication",
  "Critical Thinking",
];

const resumeAwards = [
  {
    title: "Microsoft Office, PowerPoint and Canva Multimedia Platform Masterclass",
    meta: "Bulacan State University · Oct 2023",
  },
  { title: "Best STEM Research", meta: "CMIS Sto. Rosario, Malolos · Jul 2023" },
  { title: "With Honors", meta: "CMIS Sto. Rosario, Malolos · Jul 2023" },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={diagonal ? "M6 18 18 6M9 6h9v9" : "M5 12h14M13 6l6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function App() {
  useEffect(() => {
    let favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = faviconUrl;
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      selectedProject || selectedCertificate || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, selectedCertificate, menuOpen]);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  const navigateTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("athenamaebarana@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site">
      <div className="progress-line" style={{ transform: `scaleX(${scrollProgress / 100})` }} />

      <header className="topbar">
        <button className="wordmark" onClick={() => navigateTo("home")} aria-label="Go to top">
          ATHENA<span>®</span>
        </button>
        <div className="topbar-meta">
          <span>Frontend Developer</span>
          <span>Malolos, PH</span>
        </div>
        <div className="topbar-actions">
          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`menu-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-index">INDEX / 06</div>
        <nav>
          {["about", "work", "skills", "credentials", "resume", "contact"].map((item, index) => (
            <button key={item} onClick={() => navigateTo(item)}>
              <span>0{index + 1}</span>
              {item}
              <ArrowIcon diagonal />
            </button>
          ))}
        </nav>
        <div className="menu-foot">Available for a 500-hour internship · 2026</div>
      </div>

      <main>
        <section className="hero section-shell" id="home">
          <div className="eyebrow">
            <span className="status-dot" />
            Available for internship
          </div>
          <div className="hero-title">
            <h1>
              I BUILD DIGITAL
              <br />
              <span className="outline">EXPERIENCES</span>
            </h1>
            <div className="hero-orbit" aria-hidden="true">
              <div className="orbit-ring ring-one" />
              <div className="orbit-ring ring-two" />
              <div className="orbit-core">AM</div>
            </div>
          </div>
          <div className="hero-education">
            <span className="micro-label">Education</span>
            <strong>Bachelor of Industrial Technology</strong>
            <span>Major in Computer Technology</span>
            <span>Bulacan State University</span>
            <span>Expected graduation / Jun 2027</span>
          </div>
          <div className="hero-bottom">
            <p>
              <br />
            </p>
            <button
              className="round-link"
              onClick={() => navigateTo("work")}
              aria-label="View work"
            >
              <ArrowIcon />
            </button>
            <div className="hero-count">
              <strong>{String(projects.length).padStart(2, "0")}</strong>
              <span>Selected projects</span>
            </div>
          </div>
          <div className="coordinate">14.8527° N — 120.8160° E</div>
        </section>

        <section className="about section-shell intro-profile" id="about">
          <div className="about-grid">
            <div className="profile-card">
              <div className="profile-visual">
                <img
                    src={athenaProfile}
                    alt="Portrait of Athena Mae N. Baraña"
                    loading="eager"
                    decoding="async"
                    onError={handleProfileImageError}
                  />
                <div className="profile-frame" aria-hidden="true" />
                <span>Frontend / UX</span>
              </div>
              <div className="profile-caption">
                <span>Athena Mae N. Baraña</span>
                <span>© 2026</span>
              </div>
            </div>
            <div className="bio-copy">
              <span className="micro-label">Current position</span>
              <h3>Building my craft at Bulacan State University.</h3>
              <p>
                I’m a Computer Technology student creating responsive web and mobile applications.
                My work moves across classroom systems, embedded technology, interactive stories,
                and database-driven products.
              </p>
              <p>
                I’m looking for a team where I can contribute, learn quickly, and help ship digital
                experiences that are useful from the first click.
              </p>
              <a href="https://github.com/sobrangatinaCpu" target="_blank" rel="noreferrer">
                Explore GitHub <ArrowIcon diagonal />
              </a>
            </div>
          </div>
          <span className="micro-label profile-details-label">Contact information</span>
          <dl className="contact-details profile-details">
            {contactDetails.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="about section-shell">
          <div className="about-label">
            <span className="section-number">01 / ABOUT</span>
            <span>Student & maker</span>
          </div>
          <div className="about-statement">
            <span className="about-mark">A.</span>
            <p>
              I turn <em>curiosity</em> into functional interfaces—combining thoughtful design,
              clean code, and an eagerness to understand how things work.
            </p>
          </div>
        </section>

        <section className="type-marquee" aria-label="Type in motion">
          {[
            { dir: "left", offset: 0, style: "solid" },
            { dir: "right", offset: 3, style: "outline" },
            { dir: "left", offset: 6, style: "solid big" },
            { dir: "right", offset: 2, style: "blur" },
            { dir: "left", offset: 5, style: "solid" },
          ].map((row, rowIndex) => (
            <div className={`type-row ${row.style} ${row.dir}`} key={rowIndex} aria-hidden="true">
              <div className="type-track">
                {[0, 1].map((copy) => (
                  <div className="type-set" key={copy}>
                    {[
                      ...skillsImproved.slice(row.offset),
                      ...skillsImproved.slice(0, row.offset),
                    ].map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="work section-shell" id="work">
          <div className="section-heading">
            <div>
              <span className="section-number" style={{ fontSize: "16px" }}>02 / SELECTED WORK</span>
              <h2>PROJECTS</h2>
            </div>
          </div>

          <div className="filters" role="group" aria-label="Filter projects">
            {(["All", "Web", "Hardware", "Creative"] as const).map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
                <span>
                  {item === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === item).length}
                </span>
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article
                className={`project-card project-${project.id}`}
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                <button aria-label={`Open ${project.title} case study`}>
                  <div className={`project-image ${project.fit ? `fit-${project.fit}` : ""}`}>
                    <img src={project.image} alt={project.title} onError={handleContentImageError} />
                    <div className="image-grid" />
                    <span className="project-index">{project.id}</span>
                    <span className="project-open">
                      View case <ArrowIcon diagonal />
                    </span>
                  </div>
                  <div className="project-info">
                    <div>
                      <span>{project.role}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <div className="project-meta">
                      {project.badge && <span className="badge">{project.badge}</span>}
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-shell" id="skills">
          <div className="section-heading">
            <div>
              <span className="section-number" style={{ fontSize: "16px" }}>03 / CAPABILITIES</span>
              <h2>TOOLKIT</h2>
            </div>
            <div className="skill-score">
              <strong>{skills.length}</strong>
              <span>Tools in rotation</span>
            </div>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
                <i style={{ "--level": `${96 - ((index * 7) % 35)}%` } as React.CSSProperties} />
                <span>{index < 4 ? "Primary" : index < 9 ? "Working" : "Growing"}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="credentials section-shell" id="credentials">
          <div className="section-heading">
            <div>
              <span className="section-number" style={{ fontSize: "16px" }}>04 / CREDENTIALS</span>
              <h2>CERTIFIED</h2>
            </div>
          </div>
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.id}>
                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`View ${certificate.title} certificate`}
                >
                  <div className="certificate-image">
                    <img src={certificate.image} alt={`${certificate.title} certificate`} onError={handleContentImageError} />
                    <span>
                      View credential <ArrowIcon diagonal />
                    </span>
                  </div>
                  <div className="certificate-info">
                    <span>{certificate.id}</span>
                    <div>
                      <h3>{certificate.title}</h3>
                      <p>{certificate.provider}</p>
                    </div>
                    <time>{certificate.date}</time>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="resume section-shell" id="resume">
          <div className="section-heading">
            <div>
              <span className="section-number">05 / RESUME</span>
              <h2>THE FILE</h2>
            </div>
          </div>

          <div className="resume-sheet">
            <aside className="resume-side">
              <div className="resume-id">
                <img
                    src={athenaProfile}
                    alt="Athena Mae N. Baraña"
                    loading="lazy"
                    decoding="async"
                    onError={handleProfileImageError}
                  />
                <div>
                  <strong>Athena Mae N. Baraña</strong>
                  <span>BIT · Computer Technology</span>
                </div>
              </div>
              <div className="resume-block">
                <span className="micro-label">Contact</span>
                <ul className="resume-contact">
                  <li>0968-396-3331</li>
                  <li>
                    <a href="mailto:athenamaebarana@gmail.com">athenamaebarana@gmail.com</a>
                  </li>
                  <li>Matimbo, Malolos, Bulacan</li>
                </ul>
              </div>
              <div className="resume-block">
                <span className="micro-label">Skills</span>
                <div className="resume-chips">
                  {resumeSkills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="resume-block">
                <span className="micro-label">Awards &amp; certificates</span>
                <ul className="resume-awards">
                  {resumeAwards.map((award) => (
                    <li key={award.title}>
                      <strong>{award.title}</strong>
                      <span>{award.meta}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="resume-main">
              <div className="resume-block">
                <span className="micro-label">Profile</span>
                <p className="resume-profile">
                  Industrial Technology student majoring in Computer Technology, with comprehensive
                  expertise across software and hardware. Dynamic and results-driven, with 4 years
                  of experience in the Inventory Clerk field, detail-oriented while exceeding
                  metrics, and seeking to deliver excellent results for the company.
                </p>
              </div>

              <div className="resume-block">
                <span className="micro-label">Experience &amp; education</span>
                <ol className="resume-timeline">
                  {resumeTimeline.map((item) => (
                    <li key={item.title + item.period}>
                      <div className="resume-period">
                        <span>{item.kind}</span>
                        <time>{item.period}</time>
                      </div>
                      <h3>{item.title}</h3>
                      <em>{item.place}</em>
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>

              <a
                className="resume-download"
                href={athenaMaeBaranaResume}
                download="Athena-Mae-Barana-Resume.jpg"
              >
                <span>Download my resume</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 4v11M7 11l5 5 5-5M5 20h14"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </a>

              <div className="resume-block resume-reference">
                <span className="micro-label">Reference</span>
                <strong>Dina Divina</strong>
                <span>Secondary Education Teacher</span>
                <span>Phone / 0922-338-8662</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-top">
            <span className="section-number" style={{ fontSize: "15px", borderRadius: "16px" }}>06 / CONTACT</span>
            <span className="availability">
              <i /> Available for 500-hour internship
            </span>
          </div>
          <h2>
            HAVE A PROJECT
            <br />
            <span>IN MIND?</span>
          </h2>
          <div className="contact-actions">
            <a href="mailto:athenamaebarana@gmail.com?subject=Internship%20Opportunity">
              <span>Discuss Opportunities</span>
              <ArrowIcon diagonal />
            </a>
            <button onClick={copyEmail}>{copied ? "Email copied" : "Copy email"}</button>
          </div>
          <div className="footer-line">
            <span>© {new Date().getFullYear()} Athena Mae N. Baraña</span>
            <div>
              <a href="https://github.com/sobrangatinaCpu" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="mailto:athenamaebarana@gmail.com">Email</a>
            </div>
            <button onClick={() => navigateTo("home")}>Back to top ↑</button>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <button
            className="modal-backdrop"
            onClick={() => setSelectedProject(null)}
            aria-label="Close case study"
          />
          <div className="modal-panel">
            <div className="modal-top">
              <span>
                CASE STUDY / {selectedProject.id}
                {selectedProject.badge ? ` — ${selectedProject.badge.toUpperCase()}` : ""}
              </span>
              <button onClick={() => setSelectedProject(null)} aria-label="Close">
                <span />
                <span />
              </button>
            </div>
            <div
              className={`modal-image ${selectedProject.fit ? `fit-${selectedProject.fit}` : ""}`}
            >
              <img src={selectedProject.image} alt={selectedProject.title} onError={handleContentImageError} />
              <div className="modal-number">{selectedProject.id}</div>
              <span>
                {selectedProject.category} / {selectedProject.year}
              </span>
            </div>
            <div className="modal-content">
              <div>
                <span>{selectedProject.role}</span>
                <h2>{selectedProject.title}</h2>
                <h3>{selectedProject.shortTitle}</h3>
              </div>
              <div>
                <p>{selectedProject.description}</p>
                {selectedProject.contributions && (
                  <div className="contribution-list">
                    <span>Key contributions</span>
                    <ul>
                      {selectedProject.contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedProject.problem && (
                  <div className="contribution-list">
                    <span>Problem addressed</span>
                    <p className="problem-copy">{selectedProject.problem}</p>
                  </div>
                )}
                <div className="modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {selectedProject.link && (
                  <a
                    className="document-link"
                    href={selectedProject.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedProject.link.label} <ArrowIcon diagonal />
                  </a>
                )}
                {selectedProject.title === "Shallow Sleep" && (
                  <a
                    className="document-link"
                    href="/documents/shallow-sleep-project.docx"
                    download
                  >
                    Download project document <ArrowIcon diagonal />
                  </a>
                )}
              </div>
            </div>
            {selectedProject.gallery && (
              <div className="model-gallery">
                <span className="micro-label">3D models / prototypes</span>
                <div>
                  {selectedProject.gallery.map((item) => (
                    <figure key={item.caption}>
                      <img src={item.src} alt={item.caption} onError={handleContentImageError} />
                      <figcaption>{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedCertificate && (
        <div
          className="project-modal certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} certificate`}
        >
          <button
            className="modal-backdrop"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate"
          />
          <div className="certificate-modal-panel">
            <div className="modal-top">
              <span>
                CREDENTIAL / {selectedCertificate.id} — {selectedCertificate.title}
              </span>
              <button onClick={() => setSelectedCertificate(null)} aria-label="Close">
                <span />
                <span />
              </button>
            </div>
            <div className="certificate-full">
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate issued to Athena Baraña`}
              />
            </div>
            <div className="certificate-modal-caption">
              <span>{selectedCertificate.provider}</span>
              <time>{selectedCertificate.date}</time>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
