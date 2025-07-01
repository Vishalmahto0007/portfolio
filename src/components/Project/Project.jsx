import "./Project.css";
import projectData from "../../data/projectData"; // adjust path as needed

export default function Project() {
  return (
    <section id="project">
      <h2>
        <div className="square">
          <div className="square-intern"></div>
        </div>
        Project
      </h2>

      <div id="jobs">
        {projectData.map((project, index) => (
          <div className="job" key={index}>
            <div className="first">
              <img src={project.image} alt="Project preview" />
              <div className="text">
                <h4>{project.title}</h4>
                <p>{project.shortDesc}</p>
              </div>
            </div>
            <div className="second">
              <div className="text">
                <h4>{project.title}</h4>
                <p>{project.longDesc}</p>
                <div className="techs">
                  {project.techs.map((tech, i) => (
                    <span className="tech" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="btn-access">
                  <a
                    className="access-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
