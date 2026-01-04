import React from "react";
import { Pill, TestTube2, Stethoscope, Truck, Microscope, Briefcase } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Pharmaceutical Sourcing",
      desc: "We identify and procure quality-assured pharmaceutical products from certified manufacturers to meet diverse healthcare needs.",
      icon: <FactoryIcon />,
    },
    {
      title: "Third-Party Supply Support",
      desc: "We coordinate with trusted manufacturing partners to support private-label and third-party supply requirements.",
      icon: <Briefcase size={32} />,
    },
    {
      title: "Generic Medicines",
      desc: "Cost-effective generic medicines sourced from compliant manufacturers, ensuring safety, consistency, and affordability.",
      icon: <Pill size={32} />,
    },
    {
      title: "Partner Network Coordination",
      desc: "We work closely with experienced manufacturing and research partners to ensure seamless supply and documentation support.",
      icon: <Microscope size={32} />,
    },
    {
      title: "Global Distribution",
      desc: "Supporting domestic and international supply with reliable logistics coordination and export-ready documentation.",
      icon: <Truck size={32} />,
    },
    {
      title: "Therapeutic Portfolio",
      desc: "Antibiotics, Cardiac, Diabetic, Dermatology, Pain Management, Gynecology, and OTC product categories.",
      icon: <TestTube2 size={32} />,
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1200ad] mb-6 c-g">
            Reliable <span className="text-blue-500">Pharmaceutical Supply Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We focus on sourcing, coordination, and distribution—helping healthcare partners access trusted pharmaceutical products with clarity and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-4 group-hover:text-gray-600">
                {service.desc}
              </p>

              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
              >
                Learn more{" "}
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function FactoryIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M17 18h1" />
            <path d="M12 18h1" />
            <path d="M7 18h1" />
        </svg>
    )
}
