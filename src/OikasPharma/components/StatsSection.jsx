import React from "react";
import { Award, Globe, FlaskConical, Users } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      label: "Founded",
      value: "2025",
      icon: <Award size={32} className="text-white" />,
      desc: "Built with a long-term vision",
    },
    {
      id: 2,
      label: "Supply Partners",
      value: "10+",
      icon: <Globe size={32} className="text-white" />,
      desc: "Verified manufacturing partners",
    },
    {
      id: 3,
      label: "Products Supplied",
      value: "25+",
      icon: <FlaskConical size={32} className="text-white" />,
      desc: "Quality-assured pharma products",
    },
    {
      id: 4,
      label: "Early Clients",
      value: "30+",
      icon: <Users size={32} className="text-white" />,
      desc: "Healthcare partners who trust us",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#1200ad] text-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 font-mono tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-blue-100 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-blue-200/80">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

