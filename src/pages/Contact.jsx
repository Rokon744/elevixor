"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm, FAQSection } from "@/components/ContactComp";
import Schedule from "@/components/Schedule";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Schedule />
      <FAQSection />
      <Footer />
    </div>
  );
}
