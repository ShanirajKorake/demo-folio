import React, { useEffect, useRef, useState } from 'react'
import LogoLoop from './LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const FolioInfoSec1 = () => {
    const [showHello, setShowHello] = useState(true);
    const contentRef = useRef(null);
    const sectionRef = useRef(null);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            // Only trigger once when the section comes into full view
            if (entry.isIntersecting && entry.intersectionRatio > 0.6 && !hasTriggered.current) {
                hasTriggered.current = true;

                // Wait briefly for user to land, then fade and scroll 
                setTimeout(() => {
                    setShowHello(false);

                    setTimeout(() => {
                        if (contentRef.current) {
                            contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500); // Wait for fade out before scrolling
                }, 1200);
            }
        }, { threshold: [0.6] });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className='w-full flex justify-center relative overscroll-none'>
            {/* The Vertical Movie Roll Tape */}
            <div className='w-full max-w-3xl min-h-screen relative bg-zinc-900/30 backdrop-blur-md border-x border-zinc-700/50 shadow-2xl flex flex-col justify-start'>

                {/* Left Film Strip Holes */}
                <div className='absolute left-2 md:left-4 top-0 bottom-0 w-3 md:w-4 border-r border-zinc-800/50 pointer-events-none'
                    style={{
                        backgroundImage: 'repeating-linear-gradient(to bottom, rgba(15,15,18,0.7), rgba(15,15,18,0.7) 16px, transparent 16px, transparent 32px)'
                    }} />

                {/* Right Film Strip Holes */}
                <div className='absolute right-2 md:right-4 top-0 bottom-0 w-3 md:w-4 border-l border-zinc-800/50 pointer-events-none'
                    style={{
                        backgroundImage: 'repeating-linear-gradient(to bottom, rgba(15,15,18,0.7), rgba(15,15,18,0.7) 16px, transparent 16px, transparent 32px)'
                    }} />

                <div className='flex flex-col relative z-10 w-full'>

                    {/* Intro 'Frame' of the movie roll - full viewport height initially */}
                    <div className='w-full h-screen flex flex-col justify-end items-center pb-32 snap-start'>
                        <h1 className={`text-zinc-600/30 text-7xl md:text-9xl tracking-tighter mix-blend-plus-lighter font-bold uppercase pointer-events-none transition-opacity duration-1000 ${showHello ? 'opacity-100' : 'opacity-0'}`}>
                            Hello.
                        </h1>
                    </div>

                    {/* Content 'Frames' below */}
                    <div ref={contentRef} className='flex flex-col gap-24 px-12 md:px-24 py-32 min-h-screen'>
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-zinc-500 text-sm tracking-widest uppercase'>About me</h2>
                            <p className='text-zinc-300 text-lg font-light leading-relaxed'>
                                I build things that work, and I’m obsessed with understanding how and why they work.
                                Curiosity is basically my operating system. If I don’t know it, I’ll learn it.
                                If it exists, I’ll try building it.
                            </p>
                            <a href="#" className='text-zinc-500 text-sm hover:text-zinc-300 transition-colors duration-300 w-max'>
                                here read more if you want to &rarr;
                            </a>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <h2 className='text-zinc-500 text-sm tracking-widest uppercase'>What skills do I have?</h2>
                            <p className='text-zinc-300 text-lg font-light leading-relaxed'>
                                I build systems from the inside out. From writing low-level logic to designing intuitive
                                interfaces, I focus on structure, clarity, and reliability. I’ve worked on firmware,
                                application flows, and performance tuning — solving real problems where software meets
                                hardware. More than any single tool, I value depth: understanding systems thoroughly
                                and improving them with intention.
                            </p>
                            <p className='text-zinc-500 text-sm mt-4'>here's some of them</p>
                            <div className='pt-2 opacity-80 hover:opacity-100 transition-opacity duration-500'>
                                <LogoLoop logos={techLogos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FolioInfoSec1