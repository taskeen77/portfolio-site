const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-gray-900"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        width: '100%',
      }}
    >
      <div
        className="mx-auto px-6"
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        {/* Container flex: column on small, row on md+ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Left - Text */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <h2
              className="text-gray-900"
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m{' '}
              <span className="font-semibold text-fuchsia-600">Taskeen</span>, a
              self-taught{' '}
              <span className="font-semibold text-fuchsia-600">
                Frontend Developer{' '}
              </span>
              with a passion for crafting clean, user-friendly web experiences.
              I enjoy turning complex UI challenges into elegant, responsive
              designs.
            </p>
              <p
              style={{
                color: '#374151',
                fontSize: '1rem',
                marginTop: '1.5rem',
              }}
            >
              Frontend development allows me to blend logic and creativity —
              whether it’s prototyping UI, building components, or optimizing
              performance. Every line of code brings a design to life.
            </p>

            {/* Skills */}
            <div style={{ marginTop: '2rem' }}>
              <h3
                className="text-xl font-semibold text-gray-800"
                style={{
                  borderLeft: '4px solid #d946ef',
                  paddingLeft: '12px',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                }}
              >
                🛠 Skills
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {[
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'TypeScript',
                  'Angular',
                  'SCSS',
                  'Python',
                  'Pandas',
                  'Numpy',
                  'Matplotlib',
                  'Seaborn',
                  'Scikit-learn',
                  'Data Cleaning',
                  'Data Visualization',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-gray-800 bg-fuchsia-100 hover:bg-fuchsia-200 transition"
                    style={{
                      padding: '8px 14px',
                      borderRadius: '999px',
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div style={{ marginTop: '2rem' }}>
              <h3
                style={{
                  borderLeft: '4px solid #d946ef',
                  paddingLeft: '12px',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  color: '#6b7280',
                  marginBottom: '1rem',
                }}
              >
                🧰 Tools
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  'VS Code',
                  'Chrome DevTools',
                  'GitHub',
                  'Postman',
                  'SpreadSheets',
                  'Angular Material',
                  'NgZorro',
                  'Bootstrap',
                  'Tailwind'
                ].map((tool) => (
                  <span
                    key={tool}
                    className="bg-fuchsia-100 text-gray-900"
                    style={{
                      padding: '8px 14px',
                      borderRadius: '999px',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div style={{ marginTop: '2rem' }}>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1rem',
                  borderLeft: '4px solid #d946ef',
                  paddingLeft: '12px',
                }}
              >
                🌱 Currently Learning
              </h3>
              <p style={{ color: '#374151' }}>
                I’m currently learning and exploring{" "}
                <span style={{ fontWeight: '500', color: '#d946ef' }}>
                  Business Intelligence (BI)
                </span>{" "}
                and{" "}
                <span style={{ fontWeight: '500', color: '#d946ef' }}>
                  Business Analysis (BA)
                </span>
                . I also have a strong grip in{" "}
                <span style={{ fontWeight: '500', color: '#d946ef' }}>
                  Data Analytics
                </span>{" "}
                through various projects.
              </p>
            </div>


          </div>

          {/* Right - Illustration */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '1rem',
            }}
          >
            <img
              src="https://illustrations.popsy.co/white/web-design.svg"
              alt="Frontend illustration"
              style={{
                maxWidth: '90%',
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Responsive Media Queries (inline) */}
      <style>
        {`
          @media (min-width: 768px) {
            section#about > div > div {
              flex-direction: row !important;
              gap: 4rem !important;
            }
          }

          @media (max-width: 767px) {
            section#about {
              padding: 3rem 1rem;
            }

            section#about h2 {
              font-size: 24px !important;
            }

            section#about p {
              font-size: 0.95rem;
              line-height: 1.6;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
