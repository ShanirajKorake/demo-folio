import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function TrustSection() {
    const points = [
        "Stringent Quality Checks by dedicated controllers",
        "Tamper-proof Packaging for safety & integrity",
        "Approved Ingredients for high efficacy",
        "Affordable Cost for all healthcare solutions"
    ];

    return (
        <section className="w-full py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-100 flex flex-col lg:flex-row items-center gap-12">

                    <div className="flex-1">
                        <h3 className="text-3xl font-extrabold text-[#1200ad] mb-6 c-g">
                            Why Choose Oikas?
                        </h3>
                        <ul className="space-y-4">
                            {points.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                                    <div className="mt-1 min-w-[20px] text-blue-600">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full h-px bg-blue-200 lg:w-px lg:h-40"></div>

                    <div className="flex-1 w-full text-center lg:text-left">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">
                            Built for Long-Term Partnerships
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-medium mb-4">
                            Oikas is a young and focused pharmaceutical supply company, built with a
                            clear goal — to create dependable, transparent, and scalable supply
                            relationships from day one.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We work closely with verified manufacturing partners and healthcare
                            stakeholders to ensure consistency, clarity, and confidence at every step
                            of the supply chain.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );


}
