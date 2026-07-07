import { Award, GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";

const entries = [
  {
    title: "BS Computer Science (Data Science)",
    meta: "NED University of Engineering & Technology \u00b7 CGPA 3.57 \u00b7 2022 - 2026",
    icon: GraduationCap,
    bullets: [
      "Frontend web development",
      "Data analytics",
      "Business intelligence",
      "Business analysis",
    ],
  },
  {
    title: "Certifications & Bootcamps",
    meta: "10Pearls \u00b7 Google/Coursera \u00b7 Huawei \u00b7 YouTube",
    icon: Award,
    bullets: [
      "React & Angular",
      "Python for data analysis",
      "Business analyst for pre-sales professional",
      "Data Analytics and Business Intelligence",
    ],
  },
];

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const section = educationRef.current;

    if (!section) {
      return undefined;
    }

    const cards = section.querySelectorAll(".education-entry");
    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add("is-visible");
            observer.unobserve(item.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={educationRef} className="education-section" aria-labelledby="education-title">
      <div className="education-heading">
        <p className="education-eyebrow">Education</p>
        <h2 id="education-title">Academic foundation plus practical self-directed learning.</h2>
        <p>
          A focused computer science background supported by hands-on bootcamps,
          certifications, and continuous learning in modern software engineering.
        </p>
      </div>

      <ol className="education-timeline" aria-label="Education and certifications timeline">
        {entries.map((entry, entryIndex) => {
          const EducationIcon = entry.icon;

          return (
            <li
              key={entry.title}
              className="education-entry"
              style={{ "--education-index": entryIndex }}
            >
              <article className="education-card">
                <div className="education-card__header">
                  <span className="education-card__icon" aria-hidden="true">
                    <EducationIcon size={21} />
                  </span>
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.meta}</p>
                  </div>
                </div>

                <ul className="education-focus-list" aria-label={`${entry.title} focus areas`}>
                  {entry.bullets.map((bullet, bulletIndex) => (
                    <li key={bullet} style={{ "--education-bullet-index": bulletIndex }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Education;
