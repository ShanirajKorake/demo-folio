import React from "react";
import { Search, CheckSquare, Truck, PackageCheck, ArrowRight } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Requirement Analysis",
        desc: "We understand your specific pharmaceutical needs, therapeutic categories, and volume requirements.",
        icon: <Search size={32} className="text-white" />,
        color: "bg-blue-600",
    },
    {
        id: 2,
        title: "Sourcing & Verification",
        desc: "We identify certified manufacturers and verify compliance, quality certifications, and production capacity.",
        icon: <CheckSquare size={32} className="text-white" />,
        color: "bg-indigo-600",
    },
    {
        id: 3,
        title: "Quality Assurance",
        desc: "Rigorous checks are conducted to ensure product integrity, proper packaging, and documentation.",
        icon: <PackageCheck size={32} className="text-white" />,
        color: "bg-purple-600",
    },
    {
        id: 4,
        title: "Logistics & Delivery",
        desc: "Seamless coordination of logistics to ensure timely, safe, and compliant delivery to your location.",
        icon: <Truck size={32} className="text-white" />,
        color: "bg-green-600",
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">How We Work</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6">Streamlined Supply Chain Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From initial request to final delivery, our process is designed for transparency, efficiency, and reliability.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-md mx-auto relative z-10`}>
                                    {step.icon}
                                </div>

                                {/* Connecting Arrow for mobile/tablet */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-gray-300">
                                        <ArrowRight size={24} className="rotate-90" />
                                    </div>
                                )}

                                <div className="text-center">
                                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-3">
                                        Step 0{step.id}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
