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
    <>
      <Navbar />
      <div className="px-6 py-12 text-white container mx-auto">
        <Hero />
        <OurServices />
        <WhyChooseUs />
        {/* <Portfolio /> */}
        <Testimonials />
        <Team />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
