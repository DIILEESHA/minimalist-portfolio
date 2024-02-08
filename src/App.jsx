import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Guestbook from "./pages/guest/Guestbook.jsx";
import About from "./pages/about/About.jsx";
import Contactme from "./components/Contactme.jsx";
import Project from "./pages/projects/Project.jsx";
import Single from "./pages/single/Single.jsx";
import All from "./pages/home/All.jsx";
// import { useState } from "react";
// import Nav from "./components/nav/Nav.jsx";

function App() {
  // const[pop,setPop] = useState(false)
  return (
    <div>
      <BrowserRouter>
        {/* <Nav/> */}
        <Contactme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guest-book" element={<Guestbook />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/portfolio" element={<Project />} />
          {/* <Route path="/project/:slug" element={<Single />} /> */}
        </Routes>
        <Footer />
        {/* <Single/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
