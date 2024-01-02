import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutMe/>
            <Project/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home
