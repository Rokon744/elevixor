// ScheduleSection.jsx
"use client";
import React from "react";

export default function Schedule() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Book a Free Consultation</h2>
        <p className="text-gray-400 mb-8">
          Pick a time that works best for you. Our team will connect with you to
          discuss your project, goals, and how we can help.
        </p>

        {/* Calendly embed */}
        <div className="w-full h-[700px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://calendly.com/rokonujjamanripon-rs/1hour"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
