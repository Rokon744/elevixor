import Footer from "@/components/Footer";
import {
  ContactUs,
  Hero,
  OurServices,
  Portfolio,
  Team,
  Testimonials,
  WhyChooseUs,
} from "@/components/Home";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
        <Hero />
      <div className="px-6 pt-0 md:pt-12 container mx-auto">
        <OurServices />
        <WhyChooseUs />
        <Portfolio />
      </div>
      <Testimonials />
      {/* <div className="px-6 py-12 container mx-auto">
        <Team />
      </div> */}
      <ContactUs />
      <Footer />
    </div>
  );
}