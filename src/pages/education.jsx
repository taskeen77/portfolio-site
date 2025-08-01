import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      style={{ padding: "4rem 2rem" }}
      className="bg-white text-gray-900"
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "2.5rem",
          textAlign: "center",
        }}
        className="text-fuchsia-500"
      >
        <FaGraduationCap style={{ display: "inline", marginRight: "10px" }} />
        Education
      </h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* NED University Entry */}
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "1rem",
            marginBottom: "1.5rem",
            backgroundColor: "#f9f5ff",
            borderLeft: "4px solid #d946ef",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
            className="text-fuchsia-600"
          >
            Bachelor of Science in Computer Science
          </h3>
          <p
            style={{ fontSize: "0.95rem", marginBottom: "0.5rem", color: "#555" }}
          >
            NED University • 2022 – 2026
          </p>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            Specialization in <strong>Data Science</strong>. Gained skills in:
            <br />
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', listStyle: 'disc' }}>
              <li>Frontend Web Development</li>
              <li>Data Analytics</li>
              <li>Business Intelligence</li>
              <li>Business Analysis</li>
            </ul>
          </p>
        </div>

        {/* Certifications Entry */}
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "1rem",
            marginBottom: "1.5rem",
            backgroundColor: "#f9f5ff",
            borderLeft: "4px solid #d946ef",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
            className="text-fuchsia-600"
          >
            Certifications & Bootcamps
          </h3>
          <p
            style={{ fontSize: "0.95rem", marginBottom: "0.5rem", color: "#555" }}
          >
            10Pearls, Coursera (Google), YouTube
          </p>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            Completed specialized training in:
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', listStyle: 'disc' }}>
              <li>React & Angular</li>
              <li>Python for Data Analysis</li>
              <li>Business Analyst for Pre-Sales Professional</li>
              <li>Data Analytics – Google (Coursera)</li>
              <li>Business Intelligence – Google (Coursera)</li>
            </ul>
            Passionate about continuous learning and building practical skills through hands-on projects and real-world case studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
