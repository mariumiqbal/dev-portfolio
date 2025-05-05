import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <Router basename="/dev-portfolio">
    <header>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Welcome to my portfolio website built in React and TypeScript!
      </h2>
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
      </Routes>
    </main>
  </Router>
);

export default App;
