import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <Router basename="/dev-portfolio">
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <header>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center pt-5">
          My Portfolio
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2 text-center pb-3 sm:text=l">
          Welcome to my portfolio website built in React and TypeScript!
        </h2>
        <nav className="bg-gray-800">
          <div className="mx-auto px-2">
            <div className="flex h-16 items-center sm:gap-x-8 md:gap-x-12 lg:gap-x-16">
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
      <main className="flex-1">
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
