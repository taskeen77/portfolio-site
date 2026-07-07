import { useEffect, useRef } from "react";

const ContactForm = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const section = contactRef.current;
    if (!section) return undefined;

    const revealItems = section.querySelectorAll(".contact-copy, .contact-form, .contact-form label, .contact-form button");
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
    <div ref={contactRef} className="contact-grid">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Make the next step easy.</h2>
        <p className="section-lead">
          Use this form for freelance inquiries, hiring conversations, or product collaboration. I
          keep the process straightforward and responsive.
        </p>
      </div>

      <form action="https://formspree.io/f/myzpowlo" method="POST" className="card contact-form">
        <label htmlFor="name" style={{ "--contact-index": 0 }}>
          Name
          <input name="name" type="text" id="name" placeholder="Your full name" required />
        </label>

        <label htmlFor="email" style={{ "--contact-index": 1 }}>
          Email
          <input name="email" type="email" id="email" placeholder="you@example.com" required />
        </label>

        <label htmlFor="message" style={{ "--contact-index": 2 }}>
          Message
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Tell me about your role or project"
            required
          />
        </label>

        <button type="submit" className="btn-primary" style={{ "--contact-index": 3 }}>
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
