"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import graphics from "@/assets/Home/graphic-design.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function GraphicsDesign() {
  
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#0b0b1a] text-white">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <Image
            src={graphics}
            alt="Graphics Design Banner"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-center text-white drop-shadow-lg"
            >
              Graphics Design Services
            </motion.h1>
          </div>
        </div>

        {/* ✅ Service Description */}
        <div className="container mx-auto px-6 py-16">
          <motion.h2
            className="text-3xl font-bold mb-6 text-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Creative Designs that Speak for Your Brand
          </motion.h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            We believe in the power of design to transform brands. Our{" "}
            <span className="text-indigo-400 font-semibold">
              Graphics Design Services
            </span>{" "}
            focus on creating unique, visually appealing, and professional
            designs that not only look great but also communicate effectively
            with your audience.
          </p>

          {/* ✅ Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Logo & Branding",
                desc: "Custom-designed logos, brand guidelines, and complete identity packages that reflect your brand values.",
              },
              {
                title: "Social Media Graphics",
                desc: "Eye-catching posts, ads, covers, and banners optimized for engagement across all platforms.",
              },
              {
                title: "Print & Marketing Design",
                desc: "Brochures, flyers, posters, and business cards that leave a lasting impression on your audience.",
              },
              {
                title: "UI/UX Design",
                desc: "Intuitive, user-friendly, and visually appealing interfaces for websites and mobile applications.",
              },
              {
                title: "Packaging Design",
                desc: "Product packaging that stands out on shelves and increases customer appeal.",
              },
              {
                title: "Custom Illustrations",
                desc: "Unique illustrations tailored to your business to add a personal and creative touch.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#16163a] p-6 rounded-xl border border-indigo-700 shadow-md hover:shadow-indigo-500/30 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ✅ Why Choose Us */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-bold mb-4 text-indigo-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Our Graphics Design Services?
            </motion.h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Experienced designers with a keen eye for detail</li>
              <li>Customized solutions tailored to your business goals</li>
              <li>Quick turnaround time without compromising quality</li>
              <li>Affordable pricing for startups and enterprises alike</li>
              <li>Unlimited revisions until you’re fully satisfied</li>
            </ul>
          </div>

          {/* ✅ Pricing Section */}
          <div className="text-center">
            <motion.h3
              className="text-2xl font-bold mb-4 text-indigo-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Flexible Packages
            </motion.h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Whether you’re a small business looking for a fresh brand identity
              or a large enterprise needing complete design solutions, we’ve got
              a package that fits your needs.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="bg-[#16163a] p-6 rounded-xl border border-indigo-700 shadow-md hover:shadow-indigo-500/30 transition w-full md:w-1/3">
                <h4 className="text-xl font-semibold text-indigo-300 mb-2">
                  Starter Package
                </h4>
                <p className="text-gray-400 mb-4">Logo + Social Media Kit</p>
                <p className="text-indigo-400 font-bold text-lg mb-4">$199</p>
                <button className="bg-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                  Get Started
                </button>
              </div>
              <div className="bg-[#16163a] p-6 rounded-xl border border-indigo-700 shadow-md hover:shadow-indigo-500/30 transition w-full md:w-1/3">
                <h4 className="text-xl font-semibold text-indigo-300 mb-2">
                  Business Package
                </h4>
                <p className="text-gray-400 mb-4">
                  Complete Branding + Marketing Kit
                </p>
                <p className="text-indigo-400 font-bold text-lg mb-4">$499</p>
                <button className="bg-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                  Get Started
                </button>
              </div>
              <div className="bg-[#16163a] p-6 rounded-xl border border-indigo-700 shadow-md hover:shadow-indigo-500/30 transition w-full md:w-1/3">
                <h4 className="text-xl font-semibold text-indigo-300 mb-2">
                  Premium Package
                </h4>
                <p className="text-gray-400 mb-4">
                  Full Design Suite + Custom Illustrations
                </p>
                <p className="text-indigo-400 font-bold text-lg mb-4">$899</p>
                <button className="bg-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
