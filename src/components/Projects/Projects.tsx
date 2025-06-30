import ProjectCard from "./ProjectCard";
import Tech from "./Tech";

function Projects() {
  const technologies = [
    { language: "python" },
    { language: "javascript" },
    { language: "typescript" },
  ];

  const colors = ["red", "yellow", "green"]; // List of colors

  return (
    <div>
      <ProjectCard
        projectTitle="Holsi"
        projectDescription="Holii"
        projectImage="https://media.tenor.com/VFFJ8Ei3C2IAAAAM/rickroll-rick.gif" //DELETE THIS LATER XD
      >
        {technologies.map((tech, index) => (
          <Tech
            key={tech.language}
            language={tech.language}
            color={colors[index % colors.length]} // Dynamically choose color
          />
        ))}
      </ProjectCard>
    </div>
  );
}
export default Projects;
