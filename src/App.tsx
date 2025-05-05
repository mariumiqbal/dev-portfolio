import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <Router basename="/dev-portfolio">
    <div className="bg-gray-50">
      <header>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center pt-5">
          My Portfolio
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2 text-center pb-3">
          Welcome to my portfolio website built in React and TypeScript!
        </h2>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link
                to="/"
                className="rounded-md px-3 py-2 text-l font-bold text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                to="/projects"
                className="rounded-md px-3 py-2 text-l font-bold text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                {" "}
                Projects{" "}
              </Link>
              <Link
                to="/contact"
                className="rounded-md px-3 py-2 text-l font-bold text-gray-200 hover:bg-gray-700 hover:text-white"
              >
                {" "}
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="min-h-screen text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
