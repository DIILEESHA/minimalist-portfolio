import Header from "../../components/header/Header";
import Skills from "../../components/skills/Skills";
import Tools from "../../components/tools/Tools";
import Portfolio from "../../components/portfolio/Portfolio";
import Languages from "../../components/lang/Languages";
import Testo from "../../components/testomonials/Testo";
import Faq from "../../components/faq/Faq";
import './home.css'

export default function Home() {
  return (
    <div className="homer">
      {/* <div className="template_img">
          <img src="https://i.imgur.com/Wg6uLJe.png" alt="" />
        </div> */}
      <Header />
      <Skills />
      <Tools />
      <Portfolio />
      <Languages />
      <Testo id="recommend" />
      {/* <Faq /> */}
    </div>
  );
}
