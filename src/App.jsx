import { Suspense, useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./common/header";
import Hero from "./common/hero";
import About, { Skills } from "./pages/about";
import ContactForm from "./pages/form";
import Experience from "./pages/services";
import Education from "./pages/education";
import Projects, { FeaturedProjects } from "./pages/project";
import "./App.css";

function LazySection({ id, children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "160px 0px",
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id={id} ref={ref} className={`portfolio-section ${className}`.trim()}>
      <div className="section-shell">
        {isVisible ? children : <div className="section-skeleton" aria-hidden="true" />}
      </div>
    </section>
  );
}

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="section-shell footer-bar">
        <p>&copy; {new Date().getFullYear()} Taskeen Sadiq. Software Engineer and Full Stack Developer.</p>
        <button type="button" onClick={() => scrollToSection("portfolio")}>
          Back to top
        </button>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="page-shell">
      <Hero />
      <LazySection id="about">
        <About />
      </LazySection>
      <LazySection id="experience">
        <Experience />
      </LazySection>
      <section id="featured-projects" className="portfolio-section portfolio-section--featured">
        <div className="section-shell">
          <FeaturedProjects />
        </div>
      </section>
      <LazySection id="skills">
        <Skills />
      </LazySection>
      <LazySection id="education">
        <Education />
      </LazySection>
      <LazySection id="contact">
        <ContactForm />
      </LazySection>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <>
      <button
        className="skip-link"
        type="button"
        onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
      >
        Skip to content
      </button>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<div className="route-fallback">Loading projects...</div>}>
              <Projects />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
