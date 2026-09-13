function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            HI<span>.</span>
          </a>

          <p>
            Building modern digital experiences with code,
            creativity and continuous learning.
          </p>

        </div>


        {/* Navigation */}

        <div className="footer-links">

          <span>QUICK LINKS</span>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>


        {/* Social */}

        <div className="footer-social">

          <span>CONNECT</span>

          <div>

            <a href="#" aria-label="GitHub">
              GH
            </a>

            <a href="#" aria-label="LinkedIn">
              IN
            </a>

            <a href="#" aria-label="Instagram">
              IG
            </a>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Haris Imran. All rights reserved.
        </p>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;