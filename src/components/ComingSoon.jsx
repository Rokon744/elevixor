import React from "react";
import { IoRocketOutline } from "react-icons/io5";

const ComingSoon = () => {
  return (
    <div className={`py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Coming Soon Box (Main Content) --- */}
        <div className="max-w-3xl mx-auto p-12 md:p-24 rounded-xl text-center border-2 border-dashed border-gray-400/70">
          {/* Icon */}
          <IoRocketOutline className="animate-bounce text-[50px] mx-auto" />

          {/* Main Text */}
          <h3 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4">
            Coming Soon
          </h3>

          {/* Subtext */}
          <p className="text-lg max-w-lg mx-auto">
            We are working on this page. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
