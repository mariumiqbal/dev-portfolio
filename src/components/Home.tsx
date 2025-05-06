const Home = () => (
  <>
    <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-5">I'm Marium</h1>
    <h4 className="text-xl font-semibold text-gray-600">
      Website Front-end and Automation Developer
    </h4>
    <a
      className="inline-block rounded-md mt-3 px-6 py-2 text-m font-bold bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white transition"
      href="/dev-portfolio/contact"
    >
      HIRE ME
    </a>
    <div className="flex gap-x-4 py-3 justify-center">
      <a
        href="https://github.com/mariumiqbal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My profile on GitHub"
      >
        <img src="src/assets/github.svg" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/marium-iqbal-07728139"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My profile on LinkedIn"
      >
        <img src="src/assets/linkedIn.svg" alt="" />
      </a>
    </div>
  </>
);

export default Home;
