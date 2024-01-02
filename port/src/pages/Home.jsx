
import React from 'react';
import Footer from '../components/Footer';
import Contactus from '../components/Contactus';
import About from '../components/Projects'
import Projects from '../components/Projects';
import Template from '../components/template';



const Home = () => {
    return (
    <>   
        <Template/>
        <About />
        <Projects/>
        <Contactus/>
        <Footer/> 
        
    </>

    )
}

export default Home