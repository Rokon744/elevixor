// PackageModal.jsx
"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function PackageModal({ service, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow || "";
    };
  }, [onClose]);

  if (!service) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm transition-opacity" />

      {/* modal */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto rounded-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]
                   bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
        >
          ✕
        </button>

        {/* title */}
        <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6">
          {service.title} Packages
        </h3>

        {/* packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.packages.map((pkg, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-indigo-500 p-5 
                         bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                         shadow-sm flex flex-col"
            >
              <div>
                <h4 className="text-lg font-semibold">{pkg.name}</h4>
                <p className="text-indigo-500 font-bold text-xl mt-1">
                  {pkg.price}
                </p>
                <ul className="mt-3 text-sm space-y-2 text-gray-700 dark:text-gray-300">
                  {pkg.features.map((f, i2) => (
                    <li key={i2} className="flex items-start">
                      <span className="text-green-500 mr-2">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}