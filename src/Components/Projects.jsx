function Projects() {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      category: "FEATURED PROJECT",
      description:
        "My personal developer portfolio built with React.js. It includes a modern dark interface, responsive layout, project showcase, skills, education, services and contact sections.",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      demo: "#",
      github: "#",
    },

    {
      number: "02",
      title: "JARVIS AI Assistant",
      category: "AI / VOICE ASSISTANT",
      description:
        "A personal AI assistant project with voice recognition, AI-powered chat interaction and a Python FastAPI backend.",
      technologies: ["Python", "FastAPI", "JavaScript", "AI"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      demo: "#",
      github: "#",
    },

    {
      number: "03",
      title: "Student Life OS",
      category: "REACT WEB APPLICATION",
      description:
        "A student-focused web application designed to organize useful resources, tools and information in a clean and modern interface.",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
      demo: "#",
      github: "#",
    },

    {
      number: "04",
      title: "E-Commerce Product UI",
      category: "FRONTEND PROJECT",
      description:
        "A responsive ecommerce interface displaying API-based products with modern cards and a clean shopping experience.",
      technologies: ["React", "API", "JavaScript", "CSS"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects section-padding">

      {/* SECTION HEADING */}

      <div className="section-heading projects-heading">

        <span>03 — SELECTED WORK</span>

        <h2>
          Projects That Turn
          <strong> Ideas Into Reality</strong>
        </h2>

        <p>
          A selection of projects I have created while learning
          modern web development, React.js and AI technologies.
        </p>

      </div>


      {/* PROJECT LIST */}

      <div className="projects-list">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            {/* IMAGE */}

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-overlay">
                <span>
                  VIEW PROJECT ↗
                </span>
              </div>

            </div>


            {/* CONTENT */}

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="project-tech">

                {project.technologies.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>


              {/* LINKS */}

              <div className="project-links">

                <a
                  href={project.demo}
                  className="project-demo"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  className="project-github"
                >
                  GitHub →
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;