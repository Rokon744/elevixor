// ContactSection.tsx
import React from "react";

export default function ContactUs() {
  return (
    <section className="py-16 bg-[#0a0a23] text-white relative">
      <div className="absolute inset-0">
        <img
          src="/map-bg.png"
          alt="Map Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
