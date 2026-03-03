import React, { useEffect, useRef, useState } from 'react'
import LogoLoop from './LogoLoop'
import { SiReact, SiNextdotjs, SiUnrealengine, SiTailwindcss, SiJavascript, SiAndroid, SiKotlin,SiJetpackcompose,SiPython, SiFirebase, SiLua } from 'react-icons/si';
import gsap from 'gsap';
import Shuffle from './Shuffle';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
    { node: <SiUnrealengine />, title: "Unreal Engine", href: "https://www.unrealengine.com" },
    { node: <SiAndroid />, title: "Android", href: "https://www.android.com" },
    { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org" },
    { node: <SiJetpackcompose />, title: "Jetpack Compose", href: "https://developer.android.com/jetpack/compose" },
    { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
    { node: <SiLua />, title: "Lua", href: "https://www.lua.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
];

const FolioInfoSec1 = () => {
    const [showHello, setShowHello] = useState(true);
    const contentRef = useRef(null);
    const sectionRef = useRef(null);
    const hasTriggered = useRef(false);

    useEffect(() => {

        setTimeout(() => {

            gsap.to(".helloDiv", {
                opacity: 0,
                duration: 1,
                height: 0,
                ease: "power2.out",
            });
        }, 1000);


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
                    <div className='w-full h-[80vh] md:h-screen flex flex-col bold items-center justify-center pb-12 md:pb-32 snap-start helloDiv'>
                    <h1 className={`text-zinc-600/30 text-7xl md:text-9xl italic mix-blend-plus-lighter font-bold uppercase pointer-events-none transition-opacity duration-1000 ${showHello ? 'opacity-100' : 'opacity-0'}`}>
                            
                        <Shuffle
                            text="Hello."
                            shuffleDirection="up"
                            duration={0.35}
                            animationMode="evenodd"
                            shuffleTimes={1}
                            ease="power3.out"
                            stagger={0.03}
                            threshold={0.1}
                            triggerOnce={true}
                            triggerOnHover
                            respectReducedMotion={true}
                            loop={false}
                            loopDelay={0}
                        />
                        </h1>
                    </div>

                    {/* Content 'Frames' below */}
                    <div ref={contentRef} className='flex flex-col gap-18 md:gap-24 px-12 md:px-24 md:py-24 min-h-screen justify-center '>
                        <div className='flex flex-col gap-6'>
                            <h2 className='text-zinc-500 text-sm tracking-widest uppercase'>About me</h2>
                            <p className='text-zinc-300 text-lg font-light leading-relaxed'>
                                I build things that work, and I’m obsessed with understanding how and why they work.
                                Curiosity is basically my operating system. If I don’t know it, I’ll learn it.
                                If it exists, I’ll try building it.
                            </p>
                            <p className='text-zinc-500 w-full text-sm hover:text-zinc-300 transition-colors duration-300'>
                                ChatGPT gave me this shit i'll write somthing real later.
                            </p>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <h2 className='text-zinc-500 text-sm tracking-widest uppercase'>What skills do I have?</h2>
                            <p className='text-zinc-300 text-lg font-light leading-relaxed'>
                                I build systems from the inside out. I’ve worked on so many things. More than any single tool, I value depth: understanding systems thoroughly
                                and improving them with intention.
                            </p>
                            <p className='text-zinc-500 text-sm mt-4'>here's some stuff i usually do</p>
                            <div className='pt-2 opacity-80 hover:opacity-100 transition-opacity duration-500'>
                                <LogoLoop logos={techLogos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </section>
    )
}

export default FolioInfoSec1