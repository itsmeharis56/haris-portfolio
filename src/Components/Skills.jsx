function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
      percentage: 100,
      icon: "01",
    },
    {
      name: "CSS",
      level: "Advanced",
      percentage: 100,
      icon: "02",
    },
    {
      name: "JavaScript",
      level: "Advanced",
      percentage: 95,
      icon: "03",
    },
    {
      name: "React.js",
      level: " Intermediate",
      percentage: 80,
      icon: "04",
    },
    {
      name: "MS Office",
      level: "Advanced",
      percentage: 100,
      icon: "05",
    },
    {
      name: "Git & GitHub",
      level: "Intermediate",
      percentage: 75,
      icon: "06",
    },
  ];

  return (
    <section id="skills" className="skills section-padding">

      {/* Heading */}
      <div className="section-heading">
        <span>02 — MY SKILLS</span>

        <h2>
          Tools I Use To Build
          <strong> Digital Products</strong>
        </h2>

        <p>
          I continuously improve my technical skills by building
          practical projects and learning modern web technologies.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <div className="skill-top">

              <div className="skill-number">
                {skill.icon}
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="skill-percent">
                {skill.percentage}%
              </div>

            </div>

            {/* Progress */}
            <div className="progress-background">
              <div
                className="progress-fill"
                style={{
                  width: `${skill.percentage}%`,
                }}
              ></div>
            </div>

          </div>
        ))}

      </div>

      {/* Bottom Text */}
      <div className="skills-bottom">

        <div className="skills-line"></div>

        <p>
          Always learning. Always building. Always improving.
        </p>

        <div className="skills-line"></div>

      </div>

    </section>
  );
}

export default Skills;