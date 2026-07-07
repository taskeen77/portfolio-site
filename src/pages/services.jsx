import {
  CalendarDays,
  Code2,
  Settings,
} from "lucide-react";
import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Software Engineering Apprentice",
    company: "Shispare",
    date: "Jan 2026 \u2013 Apr 2026",
    startDate: "2026-01",
    location: "Karachi, Pakistan",
    icon: Settings,
    summary:
      "Built and maintained full-stack features for production web applications in an Agile software engineering environment.",
    contributions: [
      <>Developed full-stack features using <strong>Next.js</strong> and <strong>NestJS</strong>.</>,
      <>Built secure <strong>REST APIs</strong>, <strong>JWT authentication</strong>, and <strong>RBAC</strong>.</>,
      <>Optimized authenticated user state management by reducing redundant WhoAmI API requests through improved client-side caching and refresh logic.</>,
      <>Worked with <strong>MongoDB</strong>, SQL databases, debugging, testing, and sprint delivery.</>,
    ],
    technologies: ["Next.js", "NestJS", "Node.js", "MongoDB", "REST APIs", "JWT", "RBAC"],
  },
  {
    title: "Angular Developer (Project-Based)",
    company: "Browsefy Tech",
    date: "Jan 2025 \u2013 Sep 2025",
    startDate: "2025-01",
    location: "Remote",
    icon: Code2,
    summary:
      "Developed responsive Angular applications with reusable components and seamless API integration.",
    contributions: [
      <>Built reusable UI components using <strong>Angular</strong>, <strong>TypeScript</strong>, and <strong>SCSS</strong>.</>,
      <>Integrated <strong>REST APIs</strong> and improved frontend reliability.</>,
      <>Enhanced application usability using <strong>HCI principles</strong>.</>,
    ],
    technologies: ["Angular", "TypeScript", "SCSS", "REST APIs"],
  },
];

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const container = experienceRef.current;
    if (!container) return undefined;

    const items = container.querySelectorAll(".experience-entry");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8%" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={experienceRef} className="experience-section" aria-labelledby="experience-title">
      <header className="experience-heading">
        <p className="experience-eyebrow">Experience</p>
        <h2 id="experience-title">Professional experience building modern web applications.</h2>
        <p>
          Hands-on experience developing full-stack applications, secure backend systems, and responsive user interfaces in Agile development environments.
        </p>
      </header>

      <ol className="experience-timeline" aria-label="Professional experience timeline">
        {experiences.map((experience, experienceIndex) => {
          const Icon = experience.icon;
          return (
            <li
              className="experience-entry"
              key={`${experience.company}-${experience.title}`}
              style={{ "--experience-index": experienceIndex }}
            >
              <span className="experience-node" aria-hidden="true">
                <span>{experience.startDate.slice(0, 4)}</span>
              </span>

              <article className="experience-card">
                <div className="experience-card__topline">
                  <span className="experience-role-icon" aria-hidden="true">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <div className="experience-card__identity">
                    <div className="experience-card__title-row">
                      <h3>{experience.title}</h3>
                      <p className="experience-company">
                        {experience.company} <span aria-hidden="true">{"\u2022"}</span> {experience.location}
                      </p>
                    </div>
                    <div className="experience-meta" aria-label="Employment date">
                      <time dateTime={experience.startDate}>
                        <CalendarDays size={14} aria-hidden="true" /> {experience.date}
                      </time>
                    </div>
                  </div>
                </div>

                <p className="experience-summary">{experience.summary}</p>

                <div className="experience-contributions">
                  <h4>Highlights</h4>
                  <ul>
                    {experience.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <span>Technologies:</span>
                  <ul className="experience-tags" aria-label={`${experience.title} technologies`}>
                    {experience.technologies.map((technology, tagIndex) => (
                      <li key={technology} style={{ "--tag-index": tagIndex }}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Experience;
