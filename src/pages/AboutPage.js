import Header from "../components/homepage/Header";
import AboutHero from "../components/aboutpage/AboutHero";
import AboutSection from "../components/aboutpage/AboutSection";
import AboutService from "../components/aboutpage/AboutService";
import AboutGlad from "../components/aboutpage/AboutGlad";
import AboutMore from "../components/aboutpage/AboutMore";

import IconSection from "../components/homepage/IconSection";
import Footer from "../components/homepage/Footer";



function AboutPage() {
    return (
        <>
            <Header />
            <AboutHero />
            <AboutSection /> 
            <AboutService />

            <AboutGlad />
            <AboutMore />

            <IconSection />


            <Footer />
        </>
    );
}
export default AboutPage;


