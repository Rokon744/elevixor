"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Elevixor provide?",
    answer:
      "We provide Web Development, Digital Marketing, Graphic Design, Business Consulting, and eCommerce Store Management solutions tailored to your needs.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "Simply visit our Courses page, click on 'Learn More' for your desired course, and then hit 'Enroll Now'. You can also contact us directly for enrollment support.",
  },
  {
    question: "Do you offer customized business solutions?",
    answer:
      "Yes! We analyze your business needs and provide tailor-made strategies, whether it’s for digital marketing, branding, or scaling your eCommerce store.",
  },
  {
    question: "Can I request a demo before purchasing a service?",
    answer:
      "Absolutely! We offer free consultations and demos so you can understand how our services will benefit your business.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Timelines vary depending on the project scope. Websites usually take 2-6 weeks, while marketing campaigns can range from 1-3 months for full effectiveness.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <motion.h2
        className="text-3xl font-bold text-center text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#16163a] to-[#241c44] rounded-lg shadow-md border border-indigo-700 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-medium"
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-5 pb-4 text-gray-400"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;