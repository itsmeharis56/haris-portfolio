import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "React.js Developer",
    "Frontend Developer",
    "Web Developer",
    "Tech Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}

        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-status-dot"></span>
            AVAILABLE TO LEARN & BUILD
          </div>

          <p className="hero-small-text">
            HELLO, I'M
          </p>

          <h1>
            Haris
            <span> Imran.</span>
          </h1>

          <div className="hero-role">

            <span className="role-label">
              I'M A
            </span>

            <div className="role-text">
              {roles[roleIndex]}
            </div>

          </div>

          <p className="hero-description">
            I create modern, responsive and user-friendly web
            experiences using HTML, CSS, JavaScript and React.js.
            I enjoy learning new technologies and turning ideas
            into practical digital projects.
          </p>


          {/* BUTTONS */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View My Work
              <span>↗</span>
            </a>

            <a
             href="/Haris Imran (Resume).pdf"
              className="secondary-btn"
             download="Haris Imran (Resume).pdf"
            >
              Download CV ↓
            </a>

          </div>


          {/* STATS */}

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>04+</strong>
              <span>Projects</span>
            </div>

            <div className="hero-stat-line"></div>

            <div className="hero-stat">
              <strong>React</strong>
              <span>Current Focus</span>
            </div>

            <div className="hero-stat-line"></div>

            <div className="hero-stat">
              <strong>BSCS</strong>
              <span>Student</span>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="hero-visual">

          <div className="orbit orbit-one"></div>

          <div className="orbit orbit-two"></div>

          <div className="orbit-dot dot-one"></div>

          <div className="orbit-dot dot-two"></div>


          {/* PROFILE PHOTO */}

          <div className="profile-wrapper">

            <div className="profile-ring">

              <div className="profile-inner">

                <img
                  src="/Profile.jpeg"
                  alt="Haris Imran"
                  className="profile-image"
                />

              </div>

            </div>

          </div>


          {/* FLOATING CARDS */}

          <div className="floating-card hero-card-one">

            <span className="card-small">
              CURRENTLY
            </span>

            <strong>React.js</strong>

          </div>


          <div className="floating-card hero-card-two">

            <span className="card-small">
              EDUCATION
            </span>

            <strong>BSCS</strong>

          </div>


          <div className="floating-card hero-card-three">

            <span className="card-small">
              BASED IN
            </span>

            <strong>Faisalabad</strong>

          </div>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="hero-bottom">

        <div className="hero-socials">

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            IN
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            IG
          </a>

        </div>


        <a href="#about" className="scroll-indicator">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <span></span>
          </div>

        </a>

      </div>

    </section>
  );
}

export default Hero;