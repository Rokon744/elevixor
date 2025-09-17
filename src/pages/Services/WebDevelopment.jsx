"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Banner Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-800">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">Web Development Services</h1>
          <p className="mt-4 text-lg text-gray-300">
            Modern, scalable, and user-friendly websites tailored to your needs.
          </p>
        </motion.div>
      </section>

      {/* Service Overview */}
      <section className="max-w-6xl mx-auto px-6 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="text-gray-400 leading-relaxed">
            At <span className="text-indigo-400 font-medium">Elevixor</span>, we
            craft high-performance websites that are not only visually stunning
            but also optimized for speed, SEO, and scalability. From corporate
            sites to eCommerce platforms, our team ensures your digital presence
            is impactful and future-proof.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-6 py-6 mdpy-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              title: "Custom Development",
              desc: "Tailor-made websites built with modern frameworks like React, Next.js, and Node.js.",
            },
            {
              title: "Responsive Design",
              desc: "Seamless experience across all devices – mobile, tablet, and desktop.",
            },
            {
              title: "Performance & SEO",
              desc: "Optimized for speed, search engines, and smooth user experience.",
            },
            {
              title: "Scalable Solutions",
              desc: "Web apps and platforms that grow with your business.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl shadow-lg border border-indigo-700 hover:border-purple-600 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-10 md:py-20">
        <motion.h2
          className="text-3xl font-semibold mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Development Process
        </motion.h2>
        <div className="max-w-6xl mx-auto px-6 py-6 mdpy-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "Understanding your business needs and goals.",
            },
            {
              step: "02",
              title: "Design",
              desc: "Creating UI/UX that is user-friendly and engaging.",
            },
            {
              step: "03",
              title: "Development",
              desc: "Building secure and scalable web solutions.",
            },
            {
              step: "04",
              title: "Launch & Support",
              desc: "Deploying and providing continuous support.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg border border-indigo-700 hover:border-purple-600 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h3 className="text-indigo-400 text-xl font-bold">{item.step}</h3>
              <h4 className="font-semibold mt-2">{item.title}</h4>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 pt-8 md:pt-16 pb-16 md:pb-28 text-center">
        <motion.h2
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Build Your Website
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contact us today to create a powerful and scalable online presence.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="btn-button px-6 py-3 rounded-md text-white font-semibold"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
