import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Guestbook from "./pages/guest/Guestbook.jsx";
import About from "./pages/about/About.jsx";
import Contactme from "./components/Contactme.jsx";
import Project from "./pages/projects/Project.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Resume from "./pages/resume/Resume.jsx";
import Blog from "./pages/blog/Blog.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Contactme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guest-book" element={<Guestbook />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/portfolio" element={<Project />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
