import Header from '../../components/header/Header'
import Skills from '../../components/skills/Skills'
import Tools from '../../components/tools/Tools'
import Portfolio from '../../components/portfolio/Portfolio'
import Languages from '../../components/lang/Languages'
import Testo from '../../components/testomonials/Testo'
import Faq from '../../components/faq/Faq'

export default function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <Tools />
      <Portfolio />
      <Languages />
      <Testo />
      <Faq />
    </div>
  )
}
