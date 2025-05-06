type ProjectCardProps = {
  index: number;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ index, title, description, link }: ProjectCardProps) => (
  <div className="flex flex-col max-w-sm mx-auto">
    <h4 className="text-xl font-semibold text-gray-800 pb-5">
      {index + 1} . {title}
    </h4>
    <p className="text-l font-semibold text-gray-600 mb-5">{description}</p>
    <a
      className="inline-block rounded-md p-3 mx-auto text-m font-bold mb-5 ml-20
      bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white transition"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;
