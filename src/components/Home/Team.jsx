import React from "react";
import rokon from "@/assets/Home/rokon.jpg";
import rion from "@/assets/Home/rion.jpg";
import Image from "next/image";

const teamMembers = [
  { name: "AH Rion", role: "CEO & Graphics Designer", image: rion },
  { name: "Md Rokon", role: "Web Developer", image: rokon },
  { name: "Md Asif", role: "Digital Marketer", image: rion },
  { name: "David Brown", role: "Project Manager", image: rion },
  { name: "Sarah Lee", role: "Graphics Designer", image: rion },
  { name: "James Carter", role: "Business Consultant", image: rion },
  { name: "Emily Clark", role: "Content Marketer", image: rion },
  { name: "Robert Wilson", role: "SEO Specialist", image: rion },
];

export default function Team() {
  return (
    <section className="py-16 bg-[#0a0a23] text-white">
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-6 text-center backdrop-blur-md border border-white/10 hover:border-purple-500 transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
