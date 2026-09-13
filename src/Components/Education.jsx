function Education() {
  return (
    <section id="education" className="education section-padding">

      {/* Section Heading */}
      <div className="section-heading education-heading">

        <span>04 — MY JOURNEY</span>

        <h2>
          Education & <strong>Experience</strong>
        </h2>

        <p>
          My academic journey and continuous learning have helped me
          build a strong foundation in information technology,
          computer science and modern web development.
        </p>

      </div>


      <div className="journey-container">

        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <div className="journey-column">

          <div className="journey-title">
            <span>EDUCATION</span>
          </div>


          <div className="timeline">


            {/* SCHOOL */}

            <div className="timeline-item">

              <div className="timeline-dot">
                <span></span>
              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  COMPLETED
                </span>

                <h3>School Education</h3>

                <h4>Dare Arqam School</h4>

                <p>
                  Completed my school education at Dare Arqam School,
                  building the academic foundation that prepared me
                  for higher education and professional development.
                </p>

              </div>

            </div>


            {/* INTERMEDIATE */}

            <div className="timeline-item">

              <div className="timeline-dot">
                <span></span>
              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  COMPLETED
                </span>

                <h3>Intermediate</h3>

                <h4>Punjab College</h4>

                <p>
                  Completed my Intermediate education through Punjab
                  Police, developing discipline, responsibility and
                  a strong foundation for my higher studies.
                </p>

              </div>

            </div>


            {/* ADP IT */}

            <div className="timeline-item">

              <div className="timeline-dot">
                <span></span>
              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  COMPLETED
                </span>

                <h3>ADP Information Technology</h3>

                <h4>Riphah International University</h4>

                <p>
                  Completed my Associate Degree in Information
                  Technology, gaining knowledge in programming,
                  computer systems, databases and modern IT concepts.
                </p>

              </div>

            </div>


            {/* BSCS */}

            <div className="timeline-item">

              <div className="timeline-dot">
                <span></span>
              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  CURRENTLY STUDYING
                </span>

                <h3>Bachelor  in Computer Science</h3>

                <h4>GC University</h4>

                <p>
                  Currently pursuing BSCS to further develop my
                  knowledge in software development, programming,
                  computer science and modern technologies.
                </p>

              </div>

            </div>


          </div>

        </div>



        {/* =====================================================
            EXPERIENCE & LEARNING
        ===================================================== */}

        <div className="journey-column">

          <div className="journey-title">
            <span>EXPERIENCE & LEARNING</span>
          </div>


          <div className="timeline">


            {/* FRONTEND */}

            <div className="timeline-item">

              <div className="timeline-dot">
                <span></span>
              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  CURRENT FOCUS
                </span>

                <h3>Frontend Development</h3>

                <h4>React.js Learning Journey</h4>

                <p>
                  Building practical web projects using HTML,
                  CSS, JavaScript and React.js while continuously
                  improving my frontend development skills.
                </p>

              </div>

            </div>


            {/* PROJECTS */}

            <div className="timeline-item">

              <div className="timeline-dot">
                <span></span>
              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  PROJECT BASED
                </span>

                <h3>Personal Projects</h3>

                <h4>Web & AI Development</h4>

                <p>
                  Creating practical projects including my personal
                  portfolio, Student Life OS, ecommerce interfaces
                  and JARVIS AI Assistant.
                </p>

              </div>

            </div>


            {/* FUTURE */}

            <div className="timeline-item">

              <div className="timeline-dot">
                <span></span>
              </div>

              <div className="timeline-card">

                <span className="timeline-date">
                  FUTURE GOAL
                </span>

                <h3>Full-Stack Development</h3>

                <h4>MERN Stack</h4>

                <p>
                  My next goal is to expand into backend development
                  and become a professional full-stack developer
                  using modern technologies.
                </p>

              </div>

            </div>


          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;