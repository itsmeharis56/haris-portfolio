function Contact() {
  return (
    <section id="contact" className="contact section-padding">

      {/* Heading */}
      <div className="section-heading contact-heading">

        <span>06 — GET IN TOUCH</span>

        <h2>
          Let's Build Something
          <strong> Great Together</strong>
        </h2>

        <p>
          Have an idea, project or opportunity? Feel free to get
          in touch. I'm always interested in learning, building
          and exploring new opportunities.
        </p>

      </div>


      <div className="contact-container">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="contact-info">

          <div className="contact-intro">
            <span className="contact-label">
              AVAILABLE FOR OPPORTUNITIES
            </span>

            <h3>
              Let's start a
              <span> conversation.</span>
            </h3>

            <p>
              Whether you want to discuss a project, collaboration,
              internship or development opportunity, you can reach
              me through the contact details below.
            </p>
          </div>


          {/* Email */}

          <a
            href="mailto:your-email@example.com"
            className="contact-card"
          >

            <div className="contact-icon">
              @
            </div>

            <div>
              <span>Email</span>
              <strong>itsmeharis11@gmail.com</strong>
            </div>

            <div className="contact-arrow">
              ↗
            </div>

          </a>


          {/* Location */}

          <div className="contact-card">

            <div className="contact-icon">
              +
            </div>

            <div>
              <span>Location</span>
              <strong>Faisalabad, Pakistan</strong>
            </div>

          </div>


          {/* Social */}

          <div className="contact-socials">

            <span>FOLLOW ME</span>

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


        {/* =====================================================
            CONTACT FORM
        ===================================================== */}

        <form className="contact-form">

          <div className="form-row">

            <div className="form-group">

              <label>Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />

            </div>


            <div className="form-group">

              <label>Your Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>

          </div>


          <div className="form-group">

            <label>Subject</label>

            <input
              type="text"
              placeholder="What is this about?"
            />

          </div>


          <div className="form-group">

            <label>Your Message</label>

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
            ></textarea>

          </div>


          <button type="submit" className="contact-submit">
            Send Message
            <span>↗</span>
          </button>

        </form>

      </div>


      {/* Bottom */}

      <div className="contact-bottom">

        <span></span>

        <p>
          HARIS IMRAN — WEB DEVELOPER
        </p>

        <span></span>

      </div>

    </section>
  );
}

export default Contact;