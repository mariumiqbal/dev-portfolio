import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <header>
        <h1>My Portfolio</h1>
        <p>Welcome to my React + TypeScript portfolio!</p>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/contact"> Contact</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div> Not Found </div>} />
        </Routes>
      </main>
    </Router>
  );
}

const Home = () => (
  <>
    <h2>Welcome to My Portfolio</h2>
    <p>
      I am a React developer with strong skills in front-end development,
      testing, and delivering high-quality applications.
    </p>
  </>
);

const Projects = () => (
  <>
    <h2>Welcome to My Projects</h2>
    <h3>Project 1</h3>
    <a
      href="https://mariumdeu.wixsite.com/weather"
      target="_blank"
      rel="noopener noreferrer"
    >
      Weather App in Wix
    </a>
    <a
      href="https://github.com/mariumiqbal/weatherAppInWIX"
      target="_blank"
      rel="noopener noreferrer"
    >
      {"   "}Github repo
    </a>

    <h3>Project 2</h3>
    <p>
      {" "}
      PlayWright Automation Tool
      <a
        href="https://github.com/mariumiqbal/Playwright"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"   "}Github repo
      </a>
    </p>
  </>
);

const Contact = () => (
  <>
    <h2> Contact </h2>
    <p> Email: marium.deu@gmail.com</p>
    <p>
      LinkedIn:
      <a
        href="https://www.linkedin.com/in/marium-iqbal-07728139"
        target="_blank"
        rel="noopener noreferrer"
      >
        in/marium-iqbal
      </a>
    </p>
    <p>
      Github:
      <a
        href="https://github.com/mariumiqbal"
        target="_blank"
        rel="noopener noreferrer"
      >
        mariumiqbal
      </a>
    </p>
  </>
);

export default App;
