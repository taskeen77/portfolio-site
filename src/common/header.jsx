import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import resumeFile from "../assets/Resume/TaskeenSadiq - Resume.pdf";

const sectionLinks = [
  { label: "Home", id: "portfolio" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "featured-projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("portfolio");
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeDrawer = useCallback((restoreFocus = true) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  const scrollToSection = useCallback(
    (id) => {
      const scroll = () => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      };

      if (location.pathname !== "/") {
        navigate("/");
        window.setTimeout(scroll, 80);
      } else {
        scroll();
      }

      closeDrawer(false);
    },
    [closeDrawer, location.pathname, navigate],
  );

  const handleAnchorClick = (event, id) => {
    event.preventDefault();
    setActiveSection(id);
    scrollToSection(id);

    // Pointer clicks should not keep a second nav item visually focused while
    // the active section changes during subsequent scrolling.
    if (event.detail > 0) {
      event.currentTarget.blur();
    }
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68%", threshold: [0, 0.15, 0.5] },
    );

    const observed = new Set();
    const observeAvailableSections = () => {
      sectionLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && !observed.has(section)) {
          observed.add(section);
          observer.observe(section);
        }
      });
    };

    observeAvailableSections();
    const mutationObserver = new MutationObserver(observeAvailableSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => drawerRef.current?.querySelector(focusableSelector)?.focus());

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDrawer();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = [...drawerRef.current.querySelectorAll(focusableSelector)];
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDrawer, isOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const closeAtDesktop = (event) => {
      if (event.matches) closeDrawer(false);
    };
    media.addEventListener("change", closeAtDesktop);
    return () => media.removeEventListener("change", closeAtDesktop);
  }, [closeDrawer]);

  const renderLinks = (mobile = false) => (
    <ul className={mobile ? "mobile-nav-list" : "site-nav__list"}>
      {sectionLinks.map(({ label, id }) => {
        const isActive = location.pathname === "/" && activeSection === id;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              className={isActive ? "is-active" : undefined}
              aria-current={isActive ? "location" : undefined}
              onClick={(event) => handleAnchorClick(event, id)}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner mx-auto flex h-14 w-full max-w-[1320px] flex-nowrap items-center justify-between px-2 sm:px-3">
        <div className="site-header__side site-header__side--brand flex min-w-0 flex-1 justify-start">
          <a
            className="site-brand"
            href="#portfolio"
            aria-label="Taskeen Sadiq — home"
            onClick={(event) => handleAnchorClick(event, "portfolio")}
          >
            <span className="site-brand__mark" aria-hidden="true">TS</span>
            <span className="site-brand__copy">
              <strong>Taskeen Sadiq</strong>
              <small>Software Engineer</small>
            </span>
          </a>
        </div>

        <nav className="site-nav hidden shrink-0 md:block" aria-label="Primary navigation">
          {renderLinks()}
        </nav>

        <div className="site-header__side flex min-w-0 flex-1 items-center justify-end">
          <a
            className="site-header__cta hidden md:inline-flex"
            href={resumeFile}
            download="Taskeen-Sadiq-Resume.pdf"
          >
            <span>Download Resume</span>
            <Download size={14} strokeWidth={2} aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            className="site-header__menu inline-flex md:hidden"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={21} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-layer md:hidden${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <button
          className="mobile-nav-backdrop"
          type="button"
          tabIndex={-1}
          aria-label="Close navigation menu"
          onClick={() => closeDrawer()}
        />
        <div
          ref={drawerRef}
          id="mobile-navigation"
          className="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mobile-nav-heading">
            <span>Menu</span>
            <button type="button" aria-label="Close navigation menu" onClick={() => closeDrawer()}>
              <X size={21} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">{renderLinks(true)}</nav>
          <a
            className="site-header__cta site-header__cta--mobile"
            href={resumeFile}
            download="Taskeen-Sadiq-Resume.pdf"
            tabIndex={isOpen ? 0 : -1}
          >
            Download Resume <Download size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
