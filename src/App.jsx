import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Guestbook from "./pages/guest/Guestbook.jsx";
// import Nav from "./components/nav/Nav.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
          {/* <Nav/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guest-book" element={<Guestbook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
