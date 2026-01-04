import React from "react";
import PageHero from "../components/PageHero";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import TrustSection from "../components/TrustSection";
import ContactSection from "../components/ContactSection";

const Services = () => {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title="Our Services"
                subtitle="Comprehensive pharmaceutical sourcing and supply chain solutions tailored for your growth."
                backgroundImage="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop"
            />
            <ServicesSection />
            <ProcessSection />
            <TrustSection />
            <ContactSection />
        </div>
    );
};

export default Services;
