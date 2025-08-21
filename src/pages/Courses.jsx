"use client";
import CourseHero from "@/components/CourseComp/CourseHero";
import { CourseItems, CTABanner, WhyChoose } from "@/components/CourseComp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Courses() {
  return (
    <div>
      <Navbar />
      <CourseHero />
      <CourseItems />
      <WhyChoose />
      <CTABanner />
      <Footer />
    </div>
  );
}
