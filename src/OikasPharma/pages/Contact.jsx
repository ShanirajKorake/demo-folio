import React, { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import gsap from "gsap";

export default function Contact() {
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(headerRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(infoRef.current?.children,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, stagger: 0.15, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(formRef.current,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
                "-=0.6"
            );
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50/50 pb-20 pt-10 md:pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1800ad] mt-3 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 pb-2">
                        We'd Love to Hear from You
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Have a question about our products, services, or manufacturing capabilities?
                        Our team is here to help you. Reach out to us through any of the channels below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Information */}
                    <div ref={infoRef} className="space-y-6">

                        {/* Contact Card 1: Address */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                                    <MapPin className="text-blue-600 group-hover:text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        g-103, water squere, pimple nilakh,<br />
                                        pune - 27
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card 2: Phone & Email */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-xl group-hover:bg-indigo-600 transition-colors duration-300">
                                    <Phone className="text-indigo-600 group-hover:text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Phone & Direct Line</h3>
                                    <p className="text-gray-600 mb-1 pointer-events-none">+91 8788355664</p>
                                    <p className="text-sm text-gray-500">Mon-Sat 9am to 6pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card 3: Email */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-100 p-3 rounded-xl group-hover:bg-purple-600 transition-colors duration-300">
                                    <Mail className="text-purple-600 group-hover:text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                                    <a href="mailto:info@oikaspharma.com" className="text-blue-600 hover:underline text-lg block">
                                        info@oikaspharma.com
                                    </a>
                                    <p className="text-sm text-gray-500 mt-1">We'll get back to you within 24 hours.</p>
                                </div>
                            </div>
                        </div>

                        {/* Global Export Badge (Optional Premium Touch) */}
                        <div className="bg-gradient-to-r from-[#1800ad] to-blue-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                            <Globe className="absolute -right-6 -bottom-6 w-32 h-32 text-white opacity-10" />
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Global Presence</h4>
                                    <p className="text-blue-100/90 text-sm mt-1">Exporting high-quality pharmaceuticals worldwide.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div ref={formRef} className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Map Section */}
                <div className="mt-20 rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-[400px] relative group">
                    {/* Placeholder for Map - In a real app, use Google Maps Embed API */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8596416910113!2d73.78200661064322!3d18.58036556727239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9124e59c5d9%3A0x3071675c61e6c12b!2sWater&#39;s%20Square!5e0!3m2!1sen!2sin!4v1767529705173!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(20%) contrast(1.2) opacity(1)" }}
                        allowFullScreen=""
                        loading="lazy"
                        className="group-hover:filter-none transition-all duration-700"
                        title="Office Location"
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-blue-900/10"></div>
                </div>

            </div>
        </div>
    );
}
