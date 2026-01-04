import React, { useEffect } from "react";
import gsap from "gsap";

export default function PageHero({ title, subtitle, backgroundImage }) {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(".page-hero-overlay", { opacity: 1, duration: 1 })
            .to(".page-hero-content", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");
    }, []);

    return (
        <section className="relative w-full h-[35vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[#0a0552]">
            {/* Background Image */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                ></div>
            )}

            {/* Overlay Gradient */}
            <div className="page-hero-overlay absolute inset-0 bg-linear-to-b from-[#1200ad]/50 to-[#0a0552]/50 z-10 opacity-0"></div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 page-hero-content opacity-0 translate-y-8">
                <h1 className="text-3xl md:text-6xl font-black text-white mb-4 drop-shadow-lg tracking-tight c-g">
                    {title}
                </h1>
                {subtitle && (
                    <div className="w-20 h-1 bg-white/30 mx-auto rounded-full mb-6"></div>
                )}
                {subtitle && (
                    <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
