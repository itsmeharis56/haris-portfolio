function About() {
  return (
    <section id="about" className="about section-padding">

      <div className="section-heading">
        <span>01 — ABOUT ME</span>
        <h2>Turning Ideas Into <strong>Digital Experiences</strong></h2>
      </div>

      <div className="about-container">

        {/* Left Side */}
        <div className="about-content">

          <p className="about-intro">
            I'm <strong>Haris Imran</strong>, an IT graduate and
            aspiring web developer from Faisalabad, Pakistan.
          </p>

          <p>
            I have completed my Associate Degree in Information Technology
            and I'm continuously improving my skills in modern web
            development. My current focus is on building clean,
            responsive and user-friendly websites with React.js.Also Completing my Bachelor's in Computer Science from Government College University Faisalabad.
          </p>

          <p>
            I enjoy learning new technologies, solving problems and
            turning ideas into real digital projects. My goal is to
            grow as a professional developer and eventually work with
            modern full-stack technologies.
          </p>

          <div className="about-buttons">
            <a href="#contact" className="primary-btn">
              Let's Work Together <span>↗</span>
            </a>

            <a href="/Haris-Imran-CV.pdf" className="cv-btn">
              Download CV ↓
            </a>
          </div>

        </div>

        {/* Right Side */}
        <div className="about-stats">

          <div className="stat-card">
            <span className="stat-number">01</span>
            <div>
              <h3>ADP IT</h3>
              <p>Education</p>
            </div>
          </div>
   <div className="stat-card">
            <span className="stat-number">02</span>
            <div>
              <h3>Bachelor's in Computer Science</h3>
              <p>Education</p>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-number">03</span>
            <div>
              <h3>Mern Stack Web Development</h3>
              <p>Passion</p>
            </div>
          </div>

          <div className="stat-card">
            <span className="stat-number">04</span>
            <div>
              <h3>Faisalabad</h3>
              <p>Pakistan</p>
            </div>
          </div>


        </div>

      </div>

    </section>
  );
}

export default About;