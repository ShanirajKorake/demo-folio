import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import logo from "../assets/logo_icon.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050326] text-white pt-16 pb-8 border-t border-blue-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img
                                src={logo}
                                alt="Oikas Pharma"
                                className="w-16 group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="flex flex-col">
                                <h2 className="text-xl font-bold text-white c-g tracking-wide">
                                    OIKAS PHARMACEUTICAL PVT. LTD
                                </h2>
                                <p className="text-blue-300 text-xs font-medium tracking-wide">
                                    Caring For Human Life...
                                </p>
                            </div>
                        </Link>
                        <p className="text-blue-200/80 text-sm leading-relaxed">
                            Leading the way in pharmaceutical excellence. We are committed to providing high-quality, affordable healthcare solutions globally.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 group">
                                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300 group">
                                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                            </a>

                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", path: "/oikasPharma" },
                                { name: "About Us", path: "/oikasPharma/about-us" },
                                { name: "Services", path: "/oikasPharma/services" },
                                { name: "Products", path: "/oikasPharma/products" },
                                { name: "Contact", path: "/oikasPharma/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-blue-200 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Contract Manufacturing",
                                "Third Party Manufacturing",
                                "Generic Drugs",
                                "Institutional Supply",
                                "Global Export",
                            ].map((service) => (
                                <li key={service} className="text-blue-200 text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <div className="mt-1 min-w-[20px] text-blue-400">
                                    <MapPin size={20} />
                                </div>
                                <p className="text-blue-200 text-sm leading-relaxed">
                                    g-103, water squere, pimple nilakh,<br />pune - 27
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="min-w-[20px] text-blue-400">
                                    <Phone size={20} />
                                </div>
                                <p className="text-blue-200 text-sm font-semibold">
                                    +91 8788355664
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="min-w-[20px] text-blue-400">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:info@oikaspharma.com" className="text-blue-200 text-sm hover:text-white transition-colors">
                                    info@oikaspharma.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blue-400 text-sm text-center md:text-left">
                        © {currentYear} <span className="font-bold text-white">OIKAS PHARMACEUTICAL PVT. LTD</span>. All Rights Reserved.
                    </p>


                    <div className="flex gap-6 text-sm text-blue-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                    <p className="text-[#ffffff3b] text-md text-center py-10 md:py-0">
                        developed with <Heart size={14} className="inline-block self-center" />  by <a href="https://shaniraj.me" target="_blank" className="font-bold text-white e-o-r">SHANI</a>
                    </p>
                </div>

            </div>
        </footer>
    );
}
