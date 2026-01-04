import React from "react";
import PageHero from "../components/PageHero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import TrustSection from "../components/TrustSection";
import ContactSection from "../components/ContactSection";
import DirectorsSection from "../components/DirectorsSection";
import ValuesSection from "../components/ValuesSection";

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title="About Us"
                subtitle="Dedicated to excellence in pharmaceutical supply and distribution."
                backgroundImage="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop"
            />
            <AboutSection />
            <ValuesSection />
            <DirectorsSection />
            <StatsSection />
            <TrustSection />
            <ContactSection />
        </div>
    );
};

export default AboutUs;
