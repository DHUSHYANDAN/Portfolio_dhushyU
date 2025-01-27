import Footer from "../components/Footer"
import Template from "../components/Template"
import Navbars from "../components/Navbars"
import About from "../components/About"
import Projects from "../components/Projects"
import Cont from "../components/Contactme"

const HomePage = () => {
  return (
    <>
      
      <Navbars />
      <Template />
     <About/>
      <Projects/>
      
      <Cont/>
      <Footer />
    </>
  )
}

export default HomePage
