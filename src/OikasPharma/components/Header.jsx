import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import logo from "../assets/logo_icon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Refs for mobile menu only
  const mobileMenuRef = useRef(null);
  const mobileItemRefs = useRef([]);

  const navItems = [
    { name: "Home", path: "/oikasPharma" },
    { name: "About Us", path: "/oikasPharma/about-us" },
    { name: "Services", path: "/oikasPharma/services" },
    { name: "Products", path: "/oikasPharma/products" },
    { name: "Contact", path: "/oikasPharma/contact" },
  ];

  const [showSticky, setShowSticky] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      gsap.set(mobileMenuRef.current, { display: "flex" });

      const tl = gsap.timeline();
      tl.to(mobileMenuRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.6,
        ease: "power4.out",
      }).fromTo(
        mobileItemRefs.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "back.out(1.2)",
        },
        "-=0.3"
      );
    } else {
      const tl = gsap.timeline();
      tl.to(mobileItemRefs.current, {
        x: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      }).to(mobileMenuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.5,
        ease: "power4.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        },
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* Main Header - Sticky on Mobile, Static on Desktop */}
      <header className={`w-full sticky md:relative top-0 z-40 transition-colors duration-300 ${scrolled ? "bg-white shadow-lg md:shadow-none md:bg-transparent" : "bg-gradient-to-br from-blue-50 to-indigo-100"}`}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Top branding */}
          <div className="w-full flex items-center justify-between px-4 py-2 md:justify-center md:px-0">
            <Link to="/" className="flex flex-row items-center gap-2 md:gap-3">
              <img
                src={logo}
                alt="Oikas Pharma Logo"
                className="w-20 md:w-28 transform hover:scale-105 transition-transform duration-300"
              />

              <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-extrabold text-[#1800ad] c-g">
                  Oikas Pharma
                </h1>
                <span className="text-gray-600 text-xs md:text-sm font-medium tracking-wide">
                  Caring For Human Life...
                </span>
              </div>
            </Link>

            {/* Mobile menu button (Main Header) */}
            <button
              className="md:hidden text-blue-700 hover:text-blue-900 transition-colors p-2 hover:bg-blue-100 rounded-lg"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} strokeWidth={2.5} />
            </button>
          </div>

          {/* Desktop Navigation (Main Header) */}
          <nav className="hidden md:flex w-full border-t border-blue-200">
            <ul className="flex w-full justify-center gap-8 px-4 pt-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="relative cursor-pointer px-6 py-2 font-semibold text-blue-700 gap-2
                                            hover:text-blue-900 transition-colors duration-200 group block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#1800ad] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* Secondary Sticky Header - Desktop Only */}
      <header
        className={`hidden md:block fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md transition-transform duration-300 ease-in-out ${showSticky ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 ">

          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Oikas Logo" className="w-15 md:w-20 hover:rotate-12 transition-transform duration-300" />
            <h1 className="text-lg md:text-2xl p-2 font-bold text-[#1800ad] c-g">Oikas Pharma</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-12">
            {/* Desktop Nav (Compact) */}
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-semibold  text-gray-700 hover:text-[#1800ad] transition-colors relative group py-1 ${isActive ? "text-[#1800ad]" : ""}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#1800ad] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button (Sticky Header) */}
          <button
            className="md:hidden text-gray-700 hover:text-[#1800ad] p-1"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Call to Action Button (Optional for sticky header) */}
          <div className="hidden md:block">
            <Link to="/contact" className="px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Get In Touch
            </Link>
          </div>
        </div>
      </header >


      {/* Mobile Fullscreen Menu */}
      <div
        ref={mobileMenuRef}
        style={{ clipPath: "circle(0% at 100% 0%)" }}
        className="fixed inset-0 z-50 bg-gradient-to-br  from-blue-700 via-indigo-700 to-purple-800 text-white hidden flex-col items-center justify-center md:hidden"
      >
        <button
          className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} strokeWidth={2.5} />
        </button>

        <ul className="flex flex-col gap-6 mb-10 text-center">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              ref={(el) => (mobileItemRefs.current[index] = el)}
              className={`cursor-pointer text-2xl font-bold hover:scale-110 
              transition-transform duration-200 hover:text-blue-200 border-b-2 ${window.location.pathname === item.path ? "border-white" : "border-transparent"
                }`}
            >
              <Link to={item.path} onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-10 text-center flex flex-col items-center">
          <img
            src={logo}
            alt="Oikas Pharma Logo"
            className="w-20 md:w-28 transform hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl font-extrabold c-g">
            Oikas Pharma
          </h1>
          <p className="text-blue-200 text-sm font-medium">Caring For Human Life...</p>
        </div>
      </div >
    </>
  );
}