import {
  ArrowRight,
  CheckCircle2,
  Download,
  Github,
} from "lucide-react";
import heroImage from "../assets/images/hero.png";
import resumeFile from "../assets/Resume/TaskeenSadiq - Resume.pdf";

const technologies = ["React", "Next.js", "Angular", "Node.js", "NestJS"];

const highlights = [
  { title: "Software Engineering Internship", detail: "Shispare" },
  { title: "Full Stack Development", detail: "React \u2022 Next.js \u2022 NestJS" },
  { title: "Backend Development", detail: "REST APIs \u2022 JWT \u2022 RBAC" },
  {
    title: "Application Optimization",
    detail: "Reduced redundant authenticated-user API requests through improved client-side state management.",
  },
];

const Hero = () => {
  const handleSectionLink = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section id="portfolio" className="hero-section" aria-labelledby="hero-title">
      <div className="section-shell hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">Available for full-time software engineering roles</p>
            <h1 id="hero-title" className="hero-title">Taskeen Sadiq</h1>
            <p className="hero-subtitle">Software Engineer</p>

            <p className="hero-lead">
              Building modern full-stack web applications with React, Next.js, Angular, Node.js, and NestJS.
            </p>

            <p className="hero-description">
              Software Engineer with hands-on experience developing full-stack web applications using React, Next.js, Angular, Node.js, and NestJS. Completed a Software Engineering internship at Shispare, building REST APIs, authentication, RBAC, and responsive user interfaces in an Agile environment.
            </p>

            <ul className="hero-skills" aria-label="Core technologies">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <div className="hero-actions">
              <a
                className="btn-hero btn-hero--primary"
                href="#featured-projects"
                onClick={(event) => handleSectionLink(event, "featured-projects")}
              >
                View Projects <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                className="btn-hero btn-hero--secondary"
                href={resumeFile}
                download="Taskeen-Sadiq-Resume.pdf"
              >
                Download Resume <Download size={14} aria-hidden="true" />
              </a>
              <a
                className="hero-contact-link"
                href="https://github.com/taskeen77"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Taskeen Sadiq's GitHub profile"
              >
                GitHub <Github size={14} aria-hidden="true" />
              </a>
            </div>

            <p className="hero-apprenticeship">
              Software Engineering Apprentice @ Shispare <span aria-hidden="true">&bull;</span> Jan 2026 {"\u2013"} Apr 2026
            </p>

            <ul className="hero-availability" aria-label="Current availability">
              <li><CheckCircle2 size={14} aria-hidden="true" /> Open to Full-Time Opportunities</li>
              <li><CheckCircle2 size={14} aria-hidden="true" /> Available for Selected Freelance Projects</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={heroImage}
                alt="Full-stack development technology stack including React, Next.js, TypeScript, Angular, Node.js, Tailwind CSS, Express, MongoDB, GitHub, VS Code, and Postman"
                width="1536"
                height="1024"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <dl className="hero-stats" aria-label="Software engineering experience highlights">
          {highlights.map(({ title, detail }) => (
            <div className="stat-item" key={title}>
              <dt className="stat-value">{title}</dt>
              <dd className="stat-label">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
