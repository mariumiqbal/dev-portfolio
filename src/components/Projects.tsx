import ProjectCard from "./ProjectCard";

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
    <>
      {ProjectList.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </>
  );
};

export default Projects;
