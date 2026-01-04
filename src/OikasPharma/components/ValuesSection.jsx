import React from "react";
import { ShieldCheck, HeartHandshake, Lightbulb, Scale } from "lucide-react";

const values = [
    {
        icon: <ShieldCheck size={40} />,
        title: "Integrity",
        desc: "We uphold the highest ethical standards in every transaction and partnership.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: <HeartHandshake size={40} />,
        title: "Customer Focus",
        desc: "Your needs drive our solutions. We are dedicated to exceeding expectations.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: <Lightbulb size={40} />,
        title: "Innovation",
        desc: "Constantly seeking better ways to serve the healthcare ecosystem efficiently.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: <Scale size={40} />,
        title: "Quality",
        desc: "Uncompromising commitment to product safety, efficacy, and compliance.",
        color: "bg-orange-100 text-orange-600",
    },
];

export default function ValuesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Core Values</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        The principles that define who we are and how we serve our community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <div key={index} className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
