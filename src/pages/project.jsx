import { ArrowRight, FolderGit2, Globe, Server } from "lucide-react";
import { useEffect, useRef } from "react";

const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

const projects = [
  {
    title: "Authentication & Product Management",
    description:
      "A full-stack role-based product management system with separate frontend and backend repositories. It includes authentication, role management, protected product workflows, inventory-style product tables, and clean admin actions for adding, editing, archiving, and deleting products.",
    stack: ["React", "Node.js", "Express", "Authentication", "RBAC", "REST APIs"],
    githubLinks: [
      {
        label: "Backend",
        href: "https://github.com/taskeensadiq/authentication-backend",
        icon: Server,
      },
      {
        label: "Frontend",
        href: "https://github.com/taskeensadiq/authentication-frontend",
        icon: FolderGit2,
      },
    ],
    preview: "product-management",
    accent: "#2563eb",
    bg: "#f8fbff",
  },
  {
    title: "SubMind",
    description:
      "Subscription Mindmap (SubMind) is a full-featured web app built to help users manage and visualize their subscriptions with ease. It includes full CRUD operations, an intuitive dashboard with interactive analytics. Note: This app is hosted on Replit. If the server is temporarily inactive, it may take a few moments to spin up or fall back to a minimal display.",
    stack: ["React", "Chart.js", "Lucide Icons", "Tailwind CSS", "CRUD", "LocalStorage"],
    github: "https://github.com/taskeen77/SubMind",
    demo: "https://taskeen77.github.io/SubMind/",
    image: asset("SubMind.png"),
    accent: "#059669",
    bg: "#f0fdfa",
  },
  {
    title: "Book Inventory Manager",
    description:
      "A simple yet complete Book Inventory CRUD app built with Angular and Bootstrap. It uses JSON Server for backend simulation, deployed on Replit, and features graceful fallback using a local JSON file when the server is offline.",
    stack: ["Angular", "Bootstrap", "JSON Server", "TypeScript", "CRUD", "Replit"],
    github: "https://github.com/taskeen77/books-CRUD",
    demo: "https://25c1ab03-a696-49ec-8068-ba345783ecc4-00-38igbtid0xv6h.sisko.replit.dev:4200/books-CRUD/books",
    image: asset("book inventory.png"),
    accent: "#7b3f00",
    bg: "#fef6f0",
  },
  {
    title: "Imperium Clone",
    description:
      "A visually faithful clone of the Imperium Dynamics landing page, developed using Angular and styled with Ng Zorro. Built with a component-first architecture, responsive layout, and custom theming to replicate brand identity.",
    stack: ["Angular", "Ng Zorro", "SCSS", "TypeScript", "Responsive Design", "UI Clone"],
    demo: "https://www.loom.com/share/40c9865eca7d4990bebf53b2a377a03c",
    image: asset("imperium Clone.png"),
    accent: "#6b21a8",
    bg: "#f9f5ff",
  },
  {
    title: "Mini UI",
    description:
      "Mini UI is a collection of modern, reusable interface components built with both Angular (using Ng Zorro) and React (using Tailwind). Designed for rapid prototyping and consistent UI development, it includes polished navbars, buttons, cards, and form components \u2014 all themed for visual harmony and adaptability.",
    stack: ["Angular", "React", "Ng Zorro", "Tailwind CSS", "TypeScript", "Component Library"],
    demo: "https://www.loom.com/share/cf3e5dd15e054b02bca17899a6b5e01c",
    image: asset("mini-ui.png"),
    accent: "#0d9488",
    bg: "#f0fdfa",
  },
  {
    title: "Navbar Showcase",
    description:
      "A collection of responsive navigation bar designs built with HTML, SCSS, Angular, ng-zorro and modern layout practices.",
    stack: ["HTML", "SCSS", "Angular", "Responsive Design", "Ng-Zorro"],
    image: asset("Navbars.png"),
    accent: "#1d4ed8",
    bg: "#e1faee",
  },
];

const ProductManagementPreview = () => (
  <div className="project-preview project-preview--product" aria-hidden="true">
    <div className="product-preview__topline">
      <div>
        <strong>Product Management</strong>
        <span>Manage products, roles, and inventory activity</span>
      </div>
      <div className="product-preview__actions">
        <span>Role (1)</span>
        <span>Create Role</span>
        <span>Add Product</span>
      </div>
    </div>

    <div className="product-preview__table">
      {["Monitor", "Screen", "Mobile phone", "Laptop charger", "Printer"].map((item, index) => (
        <div className="product-preview__row" key={item}>
          <span>{item}</span>
          <span>{index % 2 === 0 ? "No description" : "Archived"}</span>
          <span>{index % 2 === 0 ? "CREATED" : "MODIFIED"}</span>
          <span>
            <i />
            <i />
          </span>
        </div>
      ))}
    </div>
  </div>
);

const ProjectVisual = ({ project }) => {
  if (project.preview === "product-management") {
    return <ProductManagementPreview />;
  }

  return (
    <div className="project-card__image">
      <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__overlay">
          <Globe size={18} aria-hidden="true" />
          Live demo
        </a>
      )}
    </div>
  );
};

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  const githubLinks = project.githubLinks ?? (
    project.github
      ? [{ label: "GitHub", href: project.github, icon: FolderGit2 }]
      : []
  );

  return (
    <article
      className={`project-card${featured ? " project-card--featured" : ""}`}
      style={{
        "--project-accent": project.accent,
        "--project-bg": project.bg,
        "--project-index": index,
      }}
    >
      <ProjectVisual project={project} />

      <div className="project-card__body">
        <p className="project-card__eyebrow">{featured ? "Featured project" : "Project"}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="project-card__tags" aria-label={`${project.title} technologies`}>
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {githubLinks.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ArrowRight size={16} aria-hidden="true" />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const FeaturedProjects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const section = projectsRef.current;
    if (!section) return undefined;

    const revealItems = section.querySelectorAll(".projects-section-header, .project-card");
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
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={projectsRef}>
      <div className="section-header projects-section-header">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Full-stack and frontend projects built with practical engineering.</h2>
        <p className="section-lead">
          A polished selection of production-style applications, UI systems, CRUD workflows,
          authentication features, and responsive frontend builds.
        </p>
      </div>

      <div className="projects-grid projects-grid--featured">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} index={index} />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const section = projectsRef.current;
    if (!section) return undefined;

    const revealItems = section.querySelectorAll(".projects-section-header, .project-card");
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
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-page">
      <div ref={projectsRef} className="section-shell">
        <div className="section-header projects-section-header">
          <p className="eyebrow">Projects</p>
          <h1 className="section-title">A complete view of the portfolio.</h1>
          <p className="section-lead">
            Explore the full project set, including full-stack authentication, CRUD applications,
            UI clones, reusable component systems, and responsive frontend experiments.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index === 0} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
