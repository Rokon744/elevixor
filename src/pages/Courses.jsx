"use client";
import CourseHero from "@/components/CourseComp/CourseHero";
import { CourseItems, CTABanner, WhyChoose } from "@/components/CourseComp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Courses() {
  return (
    <div>
      <Navbar />
      <div className="px-5">
        <CourseHero />
        <CourseItems />
        <WhyChoose />
        <CTABanner />
      </div>
      <Footer />
    </div>
  );
}
