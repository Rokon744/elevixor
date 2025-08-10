import {
  Hero,
  OurServices,
  Portfolio,
  Testimonials,
  WhyChooseUs,
} from "@/components/Home";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-6 py-12 text-white container mx-auto">
        <Hero />
        <OurServices />
        <WhyChooseUs />
        {/* <Portfolio /> */}
        <Testimonials />
        <h1 className="mt-20 text-[40px]">Work In Progress...</h1>
      </div>
    </>
  );
}
