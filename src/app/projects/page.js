import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="py-40">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Project</h1>
        <ComingSoon />
      </div>
      <Footer />
    </div>
  );
};

export default page;
