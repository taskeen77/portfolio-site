const ContactForm = () => {
  return (
    <div className="contact-grid">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Make the next step easy.</h2>
        <p className="section-lead">
          Use this form for freelance inquiries, hiring conversations, or product collaboration. I
          keep the process straightforward and responsive.
        </p>
      </div>

      <form action="https://formspree.io/f/myzpowlo" method="POST" className="card contact-form">
        <label htmlFor="name">
          Name
          <input name="name" type="text" id="name" placeholder="Your full name" required />
        </label>

        <label htmlFor="email">
          Email
          <input name="email" type="email" id="email" placeholder="you@example.com" required />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Tell me about your role or project"
            required
          />
        </label>

        <button type="submit" className="btn-primary">
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
