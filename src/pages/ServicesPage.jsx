"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PackageModal from "@/components/ServiceComp/PackageModal";
import ServiceCard from "@/components/ServiceComp/ServiceCard";
import React, { useState } from "react";

const services = [
  {
    title: "Graphics Design",
    desc: "Creative designs to make your brand stand out.",
  },
  {
    title: "Web Development",
    desc: "Modern, responsive, and scalable websites.",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your audience with smart strategies.",
  },
  {
    title: "Business Consulting",
    desc: "Expert advice to scale your business.",
  },
  {
    title: "Ecommerce Store Management",
    desc: "Complete management for your online store.",
  },
  {
    title: "Content Marketing",
    desc: "Engaging content to boost your brand presence.",
  },
  { title: "SEO", desc: "Rank higher and attract organic traffic." },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <Navbar />
      <section className="min-h-screen pb-16 pt-40">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                service={service}
                onPurchase={setSelectedService}
              />
            ))}
          </div>

          {/* Modal */}
          <PackageModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
