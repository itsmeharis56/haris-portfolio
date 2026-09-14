function Projects() {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      category: "FEATURED PROJECT",
      description:
        "My personal developer portfolio built with React.js. It includes a modern dark interface, responsive layout, project showcase, skills, education, services and contact sections.",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      image: "/Projects/portfolio.png",
      demo: "https://haris-imran-portfolio-gamma.vercel.app",
      github: "https://github.com/itsmeharis56/haris-portfolio",
    },
    {
      number: "02",
      title: "JARVIS AI Assistant",
      category: "AI / VOICE ASSISTANT",
      description:
        "A personal AI assistant project with voice recognition, AI-powered chat interaction and a Python FastAPI backend.",
      technologies: ["Python", "FastAPI", "JavaScript", "AI"],
      image: "/Projects/jarvis.jpg",
      demo: "",
      github: "",
    },
    {
      number: "03",
      title: "Student Life OS",
      category: "REACT WEB APPLICATION",
      description:
        "A student-focused web application designed to organize useful resources, tools and information in a clean and modern interface.",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      image: "/Projects/student-life.jpg",
      demo: "",
      github: "",
    },
    {
      number: "04",
      title: "E-Commerce Product UI",
      category: "FRONTEND PROJECT",
      description:
        "A responsive ecommerce interface displaying API-based products with modern cards and a clean shopping experience.",
      technologies: ["React", "API", "JavaScript", "CSS"],
      image: "/Projects/ecommerce.jpg",
      demo: "",
      github: "",
    },
  ];

  return (
    <section id="projects" className="projects section-padding">
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

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
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
                  {project.demo
                    ? "VIEW PROJECT ↗"
                    : "COMING SOON"}
                </span>
              </div>
            </div>

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

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-demo"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="project-github">
                    Live Demo Soon
                  </span>
                )}

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    GitHub →
                  </a>
                ) : (
                  <span className="project-github">
                    GitHub Soon
                  </span>
                )}

              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;