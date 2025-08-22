"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const BusinessConsulting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white">
      <Navbar />
      {/* Banner Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-800">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">Business Consulting Services</h1>
        </motion.div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Why Business Consulting?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Navigating today’s competitive market can be challenging. Our business
          consulting services help organizations unlock growth opportunities,
          improve efficiency, and make smarter decisions. From strategy planning
          to financial consulting, we provide tailored solutions to accelerate
          your business success.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {[
          {
            title: "Business Strategy",
            desc: "Develop a winning roadmap with proven strategies tailored to your industry and goals.",
          },
          {
            title: "Financial Consulting",
            desc: "Optimize budgets, increase profitability, and make informed financial decisions.",
          },
          {
            title: "Market Research",
            desc: "Understand your market, competitors, and target audience for smarter growth.",
          },
          {
            title: "Operations Management",
            desc: "Streamline processes, improve efficiency, and reduce unnecessary costs.",
          },
          {
            title: "Startup Consulting",
            desc: "Guiding new businesses through planning, funding, and scaling strategies.",
          },
          {
            title: "Risk Management",
            desc: "Identify potential risks and develop mitigation strategies to secure your future.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bg-[#16163a] p-6 rounded-xl shadow-lg hover:shadow-xl border border-indigo-700 hover:border-purple-500 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA */}
      <motion.section
        className="max-w-4xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-gray-300 mb-6">
          Our expert consultants provide the insights and strategies you need to
          grow sustainably and stay competitive.
        </p>
        <Link href={'/contact'} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition">
          Book a Consultation
        </Link>
      </motion.section>
      <Footer />
    </div>
  );
};

export default BusinessConsulting;
