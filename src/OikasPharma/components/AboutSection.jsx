import React, { useEffect } from "react";
import gsap from "gsap";
import { CheckCircle2 } from "lucide-react";
import tablets from "../assets/Tablets-1-1.jpg";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
    const navigate = useNavigate();

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
            }
        });

        // We can add scroll triggered animations later if we set up ScrollTrigger
        // For now simple entrance
    }, []);

    return (
        <section className="about-section w-full py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Visuals */}
                <div className="relative">
                    <div className="relative z-5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src={tablets}
                            alt="Pharmaceutical Products"
                            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Decors */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full z-0"></div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full z-0"></div>

                    <div className="absolute z-20 top-1/2 -right-12 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Quality Assured</h4>
                                <p className="text-xs text-gray-500 mt-1">
                                    Products sourced exclusively from verified, compliant manufacturers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4">
                        Who We Are
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1200ad] mb-6 leading-tight c-g">
                        Welcome to{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                            Oikas Pharma
                        </span>
                    </h2>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        Oikas Pharma is a young and focused pharmaceutical supply company, established
                        with a clear mission to simplify access to quality-assured healthcare products.
                        We work as a reliable link between certified manufacturers and healthcare
                        providers, ensuring consistency, transparency, and timely delivery.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2 border-l-4 border-blue-600 pl-3">
                                Grow With Us: Mission & Vision
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                <strong>Mission:</strong> To support better healthcare outcomes by supplying
                                reliable, affordable, and compliant pharmaceutical products through
                                responsible sourcing and strong partnerships.
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                <strong>Vision:</strong> To build a trusted pharmaceutical supply network
                                driven by transparency, ethical practices, and long-term collaboration
                                across the healthcare ecosystem.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2 border-l-4 border-green-600 pl-3">
                                Pharmaceutical Supply & Distribution
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600" />
                                    Verified Manufacturer Network
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600" />
                                    Product Sourcing & Procurement
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600" />
                                    Regulatory & Documentation Support
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600" />
                                    Reliable Supply Chain Coordination
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button className="mt-10 px-8 py-3 bg-white text-[#1200ad] border-2 border-[#1200ad] rounded-full font-bold hover:bg-[#1200ad] hover:text-white transition-all duration-300" onClick={()=>(navigate("/oikasPharma/about-us"))}  >
                        Learn More About Us
                    </button>
                </div>

            </div>
        </section>
    );

}
