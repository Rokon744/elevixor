// TeamSection.tsx
import React from "react";

const teamMembers = [
  { name: "Emily Smith", role: "CEO", image: "/team/emily.jpg" },
  { name: "Mark Johnson", role: "Project Manager", image: "/team/mark.jpg" },
  { name: "Sarah Williams", role: "UI/UX Designer", image: "/team/sarah.jpg" },
  { name: "David Brown", role: "Software Engineer", image: "/team/david.jpg" },
];

export default function Team() {
  return (
    <section className="py-16 bg-[#0a0a23] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-xl p-6 text-center backdrop-blur-md border border-white/10 hover:border-purple-500 transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500 object-cover"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
