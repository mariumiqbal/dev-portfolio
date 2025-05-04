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
    <p className="text-base text-gray-600 leading-relaxed mb-4">
      {description}
    </p>
    <a
      className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;
