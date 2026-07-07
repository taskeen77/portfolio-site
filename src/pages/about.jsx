import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  PanelsTopLeft,
  Target,
} from "lucide-react";
import { useEffect, useRef } from "react";

const milestones = [
  {
    year: "2022",
    title: "Started BS Computer Science (Data Science)",
    organization: "NED University",
    description:
      "Built a strong foundation in programming, data structures, databases, and software engineering while beginning my journey into web development.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Learned Modern Frontend Development",
    description:
      "Developed practical experience with React, Angular, TypeScript, responsive design, and component-based interfaces through hands-on projects.",
    icon: Code2,
  },
  {
    year: "2025",
    title: "Angular Developer (Project-Based)",
    organization: "Browsefy Tech",
    description:
      "Built reusable Angular components, integrated REST APIs, resolved frontend issues, and improved usability by applying Human-Computer Interaction principles.",
    icon: PanelsTopLeft,
  },
  {
    year: "2026",
    title: "Software Engineering Apprentice",
    organization: "Shispare",
    description:
      "Developed full-stack features with Next.js and NestJS, implemented JWT authentication, RBAC, and REST APIs, and reduced redundant authenticated-user API requests.",
    icon: BriefcaseBusiness,
  },
  {
    year: "Today",
    title: "Building Production-Ready Software",
    description:
      "Continuing to expand my full-stack expertise while seeking a Software Engineering opportunity where I can contribute to scalable products and grow as an engineer.",
    icon: Target,
  },
];

const stackCategories = [
  { title: "Frontend", groups: [["React", "Next.js", "Angular"], ["TypeScript", "JavaScript"], ["HTML5", "CSS3"], ["Tailwind CSS", "SCSS"]] },
  { title: "Backend", groups: [["Node.js", "NestJS", "Express.js"], ["REST APIs", "JWT", "RBAC"]] },
  { title: "Databases", groups: [["MongoDB", "MySQL", "PostgreSQL"]] },
  { title: "Tools", groups: [["Git", "GitHub", "Postman"], ["VS Code", "Chrome DevTools"], ["Agile/Scrum"]] },
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const container = aboutRef.current;
    if (!container) return undefined;

    const revealItems = container.querySelectorAll(".about-milestone");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
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
      { threshold: 0.16, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={aboutRef} className="about-layout" aria-labelledby="about-title">
      <div className="about-intro">
        <p className="about-eyebrow">About</p>
        <h2 id="about-title" className="about-title">My Engineering Journey</h2>
        <div className="about-copy">
          <p>
            My journey into software engineering started with a curiosity for building websites and gradually evolved into developing complete full-stack applications. Along the way, I explored modern JavaScript frameworks, backend development, authentication systems, databases, and scalable application architecture through internships, academic projects, and continuous learning.
          </p>
          <p>
            Today, I enjoy building software that combines clean user experiences with reliable backend systems. I focus on writing maintainable code, solving practical engineering problems, and continuously improving my skills by working on projects that mirror real-world applications.
          </p>
        </div>
      </div>

      <ol className="about-timeline" aria-label="Engineering journey timeline">
        {milestones.map(({ year, title, organization, description, icon: Icon }, index) => (
          <li className="about-milestone" key={year} style={{ "--journey-index": index }}>
            <span className="about-milestone__marker" aria-hidden="true">
              <Icon size={18} strokeWidth={1.8} />
            </span>
            <article className="about-milestone__card">
              <time dateTime={year === "Today" ? undefined : year}>{year}</time>
              <h3>{title}</h3>
              {organization && <p className="about-milestone__organization">{organization}</p>}
              <p>{description}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
};

export const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const container = skillsRef.current;
    if (!container) return undefined;

    const revealItems = container.querySelectorAll(".about-stack-card");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
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
      { threshold: 0.16, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={skillsRef} className="about-stack" aria-labelledby="skills-title">
      <div className="about-stack__heading">
        <p className="about-eyebrow">Technical toolkit</p>
        <h2 id="skills-title">Technologies I work with</h2>
      </div>
      <div className="about-stack__grid">
        {stackCategories.map(({ title, groups }, index) => (
          <article className="about-stack-card" key={title} style={{ "--stack-index": index }}>
            <h3>{title}</h3>
            <ul>
              {groups.map((group) => (
                <li key={group.join("-")}>
                  {group.map((technology) => <span key={technology}>{technology}</span>)}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default About;
