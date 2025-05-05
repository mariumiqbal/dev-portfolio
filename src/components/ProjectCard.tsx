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
      className="inline-block rounded-md p-3 text-m font-bold bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white transition"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;
