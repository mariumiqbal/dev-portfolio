import LinkInIcon from "../assets/linkedIn.svg";
import GithubIcon from "../assets/github.svg";

const Home = () => (
  <div className="max-w-lg ml-20">
    <article className="p-5">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-5">I'm Marium</h1>
      <h2 className="text-xl font-semibold text-gray-600 pb-5">
        Website Front-end and Automation Developer
      </h2>
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
          <img src={GithubIcon} alt="LinkedIn" width="24" height="24" />
        </a>
        <a
          href="https://www.linkedin.com/in/marium-iqbal-07728139"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My profile on LinkedIn"
        >
          <img src={LinkInIcon} alt="LinkedIn" width="24" height="24" />
        </a>
      </div>
    </article>
  </div>
);

export default Home;
