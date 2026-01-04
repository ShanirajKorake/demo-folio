import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const directors = [
    {
        name: "Mrs. Kranti R. Korake",
        title: "Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop", // Placeholder
        bio: "Driving operational excellence and strategic growth with a focus on quality and compliance.",
    },
    {
        name: "Mr. Ramchandra V. Korake",
        title: "Director",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop", // Placeholder
        bio: "Leading with a vision for innovation and building lasting partnerships in the pharmaceutical industry.",
    },
];

export default function DirectorsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Leadership</span>
                    <h2 className="text-4xl font-extrabold text-[#1200ad] mt-2 mb-4">Meet Our Directors</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Guiding Oikas Pharma with experience, integrity, and a shared vision for a healthier future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {directors.map((director, index) => (
                        <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                            <div className="relative overflow-hidden h-80">
                                <div className="absolute inset-0 bg-linear-to-t from-[#1200ad]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
                                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <button className="p-2 bg-white rounded-full text-blue-900 hover:bg-blue-50"><Linkedin size={20} /></button>
                                        <button className="p-2 bg-white rounded-full text-blue-900 hover:bg-blue-50"><Twitter size={20} /></button>
                                        <button className="p-2 bg-white rounded-full text-blue-900 hover:bg-blue-50"><Mail size={20} /></button>
                                    </div>
                                </div>
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{director.name}</h3>
                                <p className="text-blue-600 font-medium mb-4">{director.title}</p>
                                <p className="text-gray-600 leading-relaxed">"{director.bio}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
