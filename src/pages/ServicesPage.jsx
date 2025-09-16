"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PackageModal from "@/components/ServiceComp/PackageModal";
import ServiceCard from "@/components/ServiceComp/ServiceCard";
import { servicesData } from "@/db/coursesData";
import React, { useState } from "react";

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
          {servicesData.map((service, idx) => (
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
