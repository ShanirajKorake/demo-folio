import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../assets/logo_icon.png";

export default function PageLoader({ children }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const progressBarRef = useRef(null);
  const shimmerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const tl = gsap.timeline({
      onComplete: () => {
        clearInterval(progressInterval);
        setLoading(false);
      },
    });

    // Shimmer effect
    gsap.to(shimmerRef.current, {
      x: "200%",
      repeat: -1,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // Main animation sequence
    tl.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0, rotation: -10 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.4)"
      }
    )
      .fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .fromTo(
        taglineRef.current,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .fromTo(
        progressBarRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(logoRef.current, {
        scale: 1.05,
        repeat: 2,
        yoyo: true,
        duration: 0.4,
        ease: "power1.inOut",
      })
      .to([logoRef.current, titleRef.current, taglineRef.current, progressBarRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.in",
        stagger: 0.1,
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
      }, "-=0.2");

    return () => {
      tl.kill();
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-eto-br from-blue-50 via-white to-indigo-50 flex-col overflow-hidden"
        >
          {/* Animated background circles */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with shimmer effect */}
            <div className="relative overflow-hidden mb-6">
              <img
                ref={logoRef}
                src={logo}
                alt="Company Logo"
                className="w-40 md:w-60 relative z-10"
              />
              {/* <div
                ref={shimmerRef}
                className="absolute inset-0 -translate-x-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  width: '50%',
                }}
              ></div> */}
            </div>

            {/* Title */}
            <div
              ref={titleRef}
              className="opacity-0 text-4xl md:text-5xl font-extrabold text-[#1800ad] c-g mb-2"
            >
              Oikas Pharma
            </div>

            {/* Tagline */}
            <div
              ref={taglineRef}
              className="opacity-0 text-sm md:text-base text-gray-600 font-medium mb-8"
            >
              Caring For Human Life...
            </div>

            {/* Progress bar */}
            {/* <div className="w-64 md:w-80 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full origin-left"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div> */}

            {/* Loading text */}
            {/* <div className="mt-4 text-sm text-gray-500 font-medium">
              Loading... {Math.floor(Math.min(progress, 100))}%
            </div> */}
          </div>
        </div>
      )}

      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-50"></div>
      <div
        className={`relative min-h-screen transition-all duration-1000 ${loading ? "opacity-0 scale-95" : "opacity-100"
          }`}
      >
        {children}
      </div>
    </>
  );
}