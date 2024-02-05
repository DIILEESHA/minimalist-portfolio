import "./App.css";
import Header from "./components/header/Header";
import Languages from "./components/lang/Languages.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Skills from "./components/skills/Skills.jsx";
import Testo from "./components/testomonials/Testo.jsx";
import Tools from "./components/tools/Tools.jsx";
import Faq from "./components/faq/Faq.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Tools />
      <Portfolio />
      <Languages />
      <Testo />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
