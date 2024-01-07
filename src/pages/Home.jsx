
import React from 'react';
import Footer from '../components/Footer';
import Contactme from '../components/Contactme';

import Projects from '../components/Projects';
import Template from '../components/Template';
import About from '../components/About';


function Home() {
    return (
        <>
            <Template />
            <About />
            <Projects />
            <Contactme />
            <Footer />

        </>

    );
}

export default Home