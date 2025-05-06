import linkedInIcon from "./../../src/assets/github.svg";
import githubIcon from "./../../src/assets/linkedIn.svg";

const Home = () => (
  <div className="max-w-lg ml-20">
    <article className="p-5">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-5">I'm Marium</h1>
      <h4 className="text-xl font-semibold text-gray-600 pb-5">
        Website Front-end and Automation Developer
      </h4>
      <a
        className="inline-block rounded-md mt-3 px-6 py-2 text-m font-bold bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white transition"
        href="/dev-portfolio/contact"
      >
        HIRE ME
      </a>
      <div className="flex gap-x-4 py-6 px-5">
        <a
          href="https://github.com/mariumiqbal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My profile on GitHub"
        >
          <img className="w-6 h-6" src={githubIcon} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/marium-iqbal-07728139"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My profile on LinkedIn"
        >
          <img className="w-6 h-6" src={linkedInIcon} alt="" />
        </a>
      </div>
    </article>
  </div>
);

export default Home;
