import React from "react";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <TrustSection />
            <StatsSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
        </div>
    );
};

export default Home;
