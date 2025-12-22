import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "System Design",
  "SQL & BigQuery",
  "API Development",
  "Frontend Engineering"
];

export default function PortfolioHero() {
  const skillRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    skills.forEach((skill) => {
      tl.to(skillRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          skillRef.current.innerText = skill;
        },
      })
        .to(skillRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to({}, { duration: 1.5 });
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white px-6">
      <div className="max-w-3xl w-full">
        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-zinc-100">
          Shaniraj Korke
        </h1>

        {/* Rotating skill */}
        <div className="mb-12 h-8">
          <span
            ref={skillRef}
            className="text-2xl md:text-3xl font-light text-zinc-400"
          >
            JavaScript
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-2xl">
          Full-stack developer building web applications with a focus on performance and user experience.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
          >
            GitHub
          </a>
          <span className="text-zinc-700">—</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
          >
            LinkedIn
          </a>
          <span className="text-zinc-700">—</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
}