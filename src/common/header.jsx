import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const sectionLinks = [
  { name: "PORTFOLIO", id: "portfolio" },
  { name: "ABOUT", id: "about" },
  { name: "SERVICES", id: "services" },
  { name: "EDUCATION", id: "education" },
  { name: "CONTACT", id: "contact" },
];

const routeLinks = [
  { name: "Projects", to: "/projects" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for route to load, then scroll
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: "rgba(10,10,10,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #1f2937",
      boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
      width: "100%",
    }}>
      {/* <div style={{
        // maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 7rem",
      }}> */}
      <div style={{
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: isMobile ? "1rem 1rem" : "1rem 7rem",
}}>

        {/* Logo */}
        <h1 style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          fontStyle: "italic",
          fontFamily: "'Playfair Display', serif",
          color: "#f0abfc",
          whiteSpace: "nowrap",

        }}>
          Taskeen Sadiq
        </h1>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{
            display: "flex",
            gap: "1.5rem",
            fontSize: "0.85rem",
            textTransform: "uppercase",
            fontWeight: "500",
            letterSpacing: "1px",
            alignItems: "center",
          }}>
            {sectionLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#ffffff",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#f0abfc")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
              >
                {item.name}
              </button>
            ))}

            {routeLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#f0abfc")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Contact Button */}
        {!isMobile && (
          <button
            onClick={() => handleNavClick("contact")}
            style={{
              backgroundColor: "#f9fafb",
              color: "#1f2937",
              fontWeight: "bold",
              fontSize: "0.85rem",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              marginLeft: "1rem",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0abfc")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f9fafb")}
          >
            CONTACT ME 
          </button>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              backgroundColor: "#f9fafb",
              padding: "0.4rem",
              borderRadius: "6px",
              color: "#1f2937",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isMobile && isOpen && (
        <div style={{
          backgroundColor: "rgba(240, 171, 252, 0.95)",
          padding: "1.25rem 1.5rem",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}>
          {sectionLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              style={{
                display: "block",
                marginBottom: "1rem",
                color: "#fff",
                fontWeight: "600",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                textAlign: "left",
              }}
            >
              {item.name}
            </button>
          ))}

          {routeLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                marginBottom: "1rem",
                color: "#fff",
                fontWeight: "600",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            style={{
              display: "block",
              backgroundColor: "#f9fafb",
              color: "#1f2937",
              fontWeight: "bold",
              textAlign: "center",
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              width: "100%",
              border: "none",
            }}
          >
            CONTACT ME
          </button>
        </div>
      )}
    </header>
  );
}
