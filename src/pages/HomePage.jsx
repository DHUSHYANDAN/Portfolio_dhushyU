import About from "../components/About"
import Contactme from "../components/Contactme"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Template from "../components/Template"


const HomePage = () => {
  return (
    <>
      <Template />
      <About />
      <Projects/>
      <Contactme/>
      <Footer/>
    </>
  )
}

export default HomePage
