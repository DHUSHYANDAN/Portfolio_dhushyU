import About from "../components/About"
import ContactMe from "../components/ContactMe"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Template from "../components/Template"


const HomePage = () => {
  return (
    <>
      <Template />
      <About />
      <Projects/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default HomePage
