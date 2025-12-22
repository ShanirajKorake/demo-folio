import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const skills = [
  "Android",
  "Kotlin",
  "Jetpack Compose",
  "JavaScript",
  "React",
  "Node.js",
  "System Design",
  "Linux",
  "Frontend",
  "BackEnd"
];

export default function PortfolioHero() {
  const skillRef = useRef(null);


  // cursor refs
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // ===== Skill rotation =====
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

    // ===== Cursor logic =====
    const dot = dotRef.current;
    const ring = ringRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.to(dot, {
        x: clientX,
        y: clientY,
        duration: 0.12,
        ease: "power3.out",
      });

      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.45,
        ease: "expo.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hover feedback
    const grow = () =>
      gsap.to(ring, { scale: 1.6, duration: 0.3, ease: "power3.out" });
    const shrink = () =>
      gsap.to(ring, { scale: 1, duration: 0.3, ease: "power3.out" });

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white px-6 cursor-none relative overflow-hidden geom select-none">
      {/* ===== Cursor elements ===== */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-999
                   h-2 w-2 rounded-full bg-zinc-100
                   -translate-x-1/2 -translate-y-1/2"
      />

      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-998
                   h-10 w-10 rounded-full border border-zinc-400/40
                   -translate-x-1/2 -translate-y-1/2"
      />

      {/* ===== Hero content ===== */}
      <div className="max-w-3xl w-full relative z-10">
        <h1 className="text-3xl md:text-7xl font-light tracking-tight mb-8 text-zinc-100 bbh select-none">
          Shaniraj Korke
        </h1>

        <div className="mb-8 h-8">
          <span
            ref={skillRef}
            className="text-lg md:text-3xl font-light text-zinc-400"
          >
            JavaScript
          </span>
        </div>

        <p className="text-md md:text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-2xl italic">
          "See you in a minute"
        </p>

        <div className="flex flex-wrap gap-4">
          {[{ lable: "GitHub", link: "https://github.com/ShanirajKorake" }, { lable: "Instagram", link: "https://www.instagram.com/shaniraj.mkv" }, { lable: "Letterboxd", link: "https://letterboxd.com/om_16" }].map((label, i) => (
            <span key={i} className="flex items-center gap-4">
              <a
                href={label.link}
                className=" text-zinc-400 text-sm md:text-lg hover:text-white transition-colors tracking-wide cursor-none"
              >
                {label.lable}
              </a>
              {i < 2 && <span className="text-zinc-700">—</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
