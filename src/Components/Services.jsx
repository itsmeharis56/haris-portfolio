function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Building modern, responsive and user-friendly websites using HTML, CSS, JavaScript and React.js.",
      tags: ["HTML", "CSS", "JavaScript"],
    },

    {
      number: "02",
      title: "React Development",
      description:
        "Creating interactive frontend interfaces and reusable components with React.js.",
      tags: ["React", "Vite", "Components"],
    },

    {
      number: "03",
      title: "Responsive Design",
      description:
        "Designing websites that provide a clean and consistent experience across desktop, tablet and mobile devices.",
      tags: ["UI", "Mobile", "Responsive"],
    },

    {
      number: "04",
      title: "AI & Web Projects",
      description:
        "Exploring AI-powered web applications and building practical projects that combine modern web technologies with AI.",
      tags: ["AI", "Python", "FastAPI"],
    },
  ];

  return (
    <section id="services" className="services section-padding">

      {/* Heading */}

      <div className="section-heading services-heading">

        <span>05 — WHAT I DO</span>

        <h2>
          Building Digital
          <strong> Experiences</strong>
        </h2>

        <p>
          I enjoy turning ideas into practical digital experiences
          while continuously learning and improving my development skills.
        </p>

      </div>


      {/* Services Grid */}

      <div className="services-grid">

        {services.map((service) => (

          <div className="service-card" key={service.number}>

            {/* Number */}

            <div className="service-number">
              {service.number}
            </div>


            {/* Icon */}

            <div className="service-icon">
              <span>↗</span>
            </div>


            {/* Content */}

            <div className="service-content">

              <h3>{service.title}</h3>

              <p>
                {service.description}
              </p>

            </div>


            {/* Tags */}

            <div className="service-tags">

              {service.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>


            {/* Bottom Arrow */}

            <div className="service-arrow">
              Explore <span>→</span>
            </div>

          </div>

        ))}

      </div>


      {/* Bottom Statement */}

      <div className="services-bottom">

        <span></span>

        <p>
          Turning ideas into clean, functional and meaningful products.
        </p>

        <span></span>

      </div>

    </section>
  );
}

export default Services;