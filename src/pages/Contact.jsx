"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm, FAQSection } from "@/components/ContactComp";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
}
