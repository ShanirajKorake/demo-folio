import React, { useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".hero-overlay", { opacity: 1, duration: 1.5 })
      .to(".hero-content", { y: 0, opacity: 1, duration: 1, ease: "power4.out" }, "-=1");
  }, []);



  return (
  <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 scale-105 animate-slow-zoom"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')" }}
    ></div>

    {/* Overlay */}
    <div className="hero-overlay absolute inset-0 bg-linear-to-r from-[#0a0552]/90 via-[#1200ad]/70 to-blue-900/40 z-10 opacity-0"></div>

    <div className="relative z-20 max-w-5xl mx-auto px-6 text-center hero-content opacity-0 translate-y-12">
      <div className="inline-block px-5 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm font-semibold tracking-wider uppercase">
        You Care for Patients. We Power Your Supply.
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 drop-shadow-lg c-g">
        Reliable Pharma <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white">
          Supply That Delivers
        </span>
      </h1>

      <p className="text-blue-100 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10 font-medium drop-shadow-md">
        We specialize in sourcing and supplying quality-assured pharmaceutical products from trusted manufacturers, ensuring timely delivery and regulatory compliance across every order.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="px-10 py-4 rounded-full bg-white text-[#1200ad] font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:bg-blue-50 hover:scale-105 transition-all duration-300" onClick={()=>(navigate("/oikasPharma/products"))}>
          View Products
        </button>

        <button className="px-10 py-4 rounded-full bg-transparent border-2 border-white/50 text-white font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm" onClick={()=>(navigate("/oikasPharma/contact"))}>
          Contact us
        </button>
      </div>
    </div>
  </section>
);

}
