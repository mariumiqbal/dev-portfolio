type ProjectCardProps = {
  index: number;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ index, title, description, link }: ProjectCardProps) => (
  <div>
    <h4>
      {index + 1} . {title}
    </h4>
    <p>{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "black",
        background: "blue",
        padding: "8px 12px",
        borderRadius: "4px",
        textDecoration: "none",
        display: "inline-block",
      }}
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;
