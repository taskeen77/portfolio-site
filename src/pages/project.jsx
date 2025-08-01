

import { Code2, Globe, FolderGit2 } from 'lucide-react';

// const projects = [
//   {
//     title: 'SubMind',
//     description:
//       'Subscription Mindmap (SubMind) is designed to help users efficiently manage and track their subscriptions. It offers full CRUD functionality, a visually rich dashboard with insightful analytics, and a dedicated reminder system to stay ahead of upcoming renewals.',
//     stack: ['React', 'Chart.js', 'Lucide Icons', 'Tailwind CSS', 'CRUD', 'LocalStorage'],
//     github: 'https://github.com/taskeen77/SubMind',
//     demo: 'https://taskeen77.github.io/SubMind/',
//     image: 'src/assets/SubMind.png',
//     accent: '#059669',
//     bg: '#f0fdfa',
//   },
//   {
//     title: 'Book Inventory Manager',
//     description:
//       'A simple yet complete Book Inventory CRUD app built with Angular and Bootstrap. It uses JSON Server for backend simulation, deployed on Replit, and features graceful fallback using a local JSON file when the server is offline.',
//     stack: ['Angular', 'Bootstrap', 'JSON Server', 'TypeScript', 'CRUD', 'Replit'],
//     github: 'https://github.com/taskeen77/books-CRUD',
//     demo: 'https://25c1ab03-a696-49ec-8068-ba345783ecc4-00-38igbtid0xv6h.sisko.replit.dev:4200/books-CRUD/books',
//     image: 'src/assets/book inventory.png',
//     accent: '#7b3f00',
//     bg: '#fef6f0',
//   },
// ];

const projects = [
  {
    title: 'SubMind',
    description:
      'Subscription Mindmap (SubMind) is a full-featured web app built to help users manage and visualize their subscriptions with ease. It includes full CRUD operations, an intuitive dashboard with interactive analytics. Note: This app is hosted on Replit. If the server is temporarily inactive, it may take a few moments to spin up or fall back to a minimal display.',
    stack: ['React', 'Chart.js', 'Lucide Icons', 'Tailwind CSS', 'CRUD', 'LocalStorage'],
    github: 'https://github.com/taskeen77/SubMind',
    demo: 'https://taskeen77.github.io/SubMind/',
    image: 'src/assets/SubMind.png',
    accent: '#059669',
    bg: '#f0fdfa',
  },
  {
    title: 'Book Inventory Manager',
    description:
      'A simple yet complete Book Inventory CRUD app built with Angular and Bootstrap. It uses JSON Server for backend simulation, deployed on Replit, and features graceful fallback using a local JSON file when the server is offline.',
    stack: ['Angular', 'Bootstrap', 'JSON Server', 'TypeScript', 'CRUD', 'Replit'],
    github: 'https://github.com/taskeen77/books-CRUD',
    demo: 'https://25c1ab03-a696-49ec-8068-ba345783ecc4-00-38igbtid0xv6h.sisko.replit.dev:4200/books-CRUD/books',
    image: 'src/assets/book inventory.png',
    accent: '#7b3f00',
    bg: '#fef6f0',
  },
  {
    title: 'Imperium Clone',
    description:
      'A visually faithful clone of the Imperium Dynamics landing page, developed using Angular and styled with Ng Zorro. Built with a component-first architecture, responsive layout, and custom theming to replicate brand identity.',
    stack: ['Angular', 'Ng Zorro', 'SCSS', 'TypeScript', 'Responsive Design', 'UI Clone'],
    // github: 'https://github.com/your-username/imperium-clone',
    demo: 'https://www.loom.com/share/40c9865eca7d4990bebf53b2a377a03c',
    image: 'src/assets/imperium clone.png',              
    accent: '#6b21a8',  // Purple tone matching Imperium
    bg: '#f9f5ff',
  },
  {
    title: 'Mini UI',
    description:
      'Mini UI is a collection of modern, reusable interface components built with both Angular (using Ng Zorro) and React (using Tailwind). Designed for rapid prototyping and consistent UI development, it includes polished navbars, buttons, cards, and form components — all themed for visual harmony and adaptability.',
    stack: ['Angular', 'React', 'Ng Zorro', 'Tailwind CSS', 'TypeScript', 'Component Library'],
    // github: 'https://github.com/taskeen77/mini-ui', // update if needed
    demo: 'https://www.loom.com/share/cf3e5dd15e054b02bca17899a6b5e01c', // optional loom/video link
    image: 'src/assets/mini-ui.png', // replace with actual screenshot
    accent: '#0d9488',  // Teal-600 (Tailwind palette)
    bg: '#f0fdfa',     // soft light-blue background
  },
  {
    title: 'Navbar Showcase',
    description: 'A collection responsive navigation bar designs built with HTML, SCSS, Angular, ng-zorro and modern layout practices.',
    stack: ['HTML', 'SCSS', 'Angular' ,'Responsive Design', 'Ng-Zorro'],
    image: 'src/assets/Navbars.png',
    accent: '#1d4ed8',
    bg: '#e1faee',
  },

  
  
];

const slate = '#0f172a';

const ProjectSection = ({ projects }) => (
  <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr', marginBottom: '2rem' }}>
    {projects.map((project, index) => (
      <div
        key={index}
        style={{
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          backgroundColor: project.bg,
          overflow: 'hidden',
          transition: 'transform 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
        className="group"
      >
        {/* Image */}
        <div style={{ position: 'relative' }} className="group"> 
          <img
            src={project.image}
            alt={`${project.title} Screenshot`}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            className="cursor-pointer"
          />
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              style={{
                backgroundColor: `${project.accent}80`,
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
            >
              <Globe size={26} className="pr-2" />
              Live Demo
            </a>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem' }}>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: project.accent,
              marginBottom: '0.5rem',
            }}
          >
            {project.title}
          </h3>
          <p style={{ marginBottom: '1rem', color: slate }}>{project.description}</p>

          {/* Stack tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            {project.stack.map((tech, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.8rem',
                  backgroundColor: '#ffffff',
                  color: slate,
                  border: `1px solid ${project.accent}`,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: project.accent,
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                <FolderGit2 size={16} />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: project.accent,
                  textDecoration: 'none',
                  fontWeight: '600',
                  
                }}
              >
                <Globe size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Projects = () => {
  const subMindProject = projects.filter((p) => p.title === 'SubMind');
  const bookProject = projects.filter((p) => p.title !== 'SubMind');

  return (
    <section
      id="projects"
      style={{
        backgroundColor: '#ffffff',
        color: slate,
        padding: '4rem 1rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Only One Heading */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <Code2 size={24} />
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: slate }}>Projects</h2>
        </div>

        {/* SubMind Projects */}
        <ProjectSection projects={subMindProject} />

        {/* Book Inventory Projects */}
        <ProjectSection projects={bookProject} />
      </div>

      {/* Responsive grid styles */}
      <style>
        {`
          @media (min-width: 768px) {
            #projects > div > div:last-child {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            #projects > div > div:last-child {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
