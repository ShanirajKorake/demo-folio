import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="realtive w-full py-24 bg-[#0a0552] text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight c-g">
            Let’s Start a Conversation
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-lg leading-relaxed">
            Whether you’re exploring reliable product sourcing, supply partnerships,
            or distribution support, Oikas Pharma is here to work with you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-blue-300 font-semibold uppercase tracking-wide">
                  Call Us
                </p>
                <p className="text-xl font-bold">+91 8788355664</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-blue-300 font-semibold uppercase tracking-wide">
                  Email Us
                </p>
                <p className="text-xl font-bold">info@oikaspharma.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-800/50 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-blue-300 font-semibold uppercase tracking-wide">
                  Visit Us
                </p>
                <p className="text-lg font-bold leading-tight">
                  g-103, water squere, pimple nilakh, pune - 27
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-white/5 border border-blue-200/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-white/5 border border-blue-200/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-blue-200/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your sourcing or supply requirement"
                className="w-full bg-white/5 border border-blue-200/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              ></textarea>

              <button className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                Send Message <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
