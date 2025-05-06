import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const ProjectList = [
    {
      title: "Weather App in Wix",
      description:
        "This project is built in WIX for exploration with plain JavaScript",
      link: "https://mariumdeu.wixsite.com/weather",
    },
    {
      title: "PlayWright Automation Tool",
      description: "I have implemented PlayWright tool to write test scenarios",
      link: "https://github.com/mariumiqbal/Playwright",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-lg ml-20"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-5">Projects</h1>

      {ProjectList.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </motion.div>
  );
};

export default Projects;
