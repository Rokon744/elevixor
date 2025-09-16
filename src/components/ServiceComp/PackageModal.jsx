import React from "react";

const packages = [
  { name: "Basic", price: "$99", features: ["Feature 1", "Feature 2"] },
  { name: "Standard", price: "$199", features: ["Feature 1", "Feature 2", "Feature 3"] },
  { name: "Premium", price: "$299", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] },
];

export default function PackageModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-6 text-center">
          {service.title} Packages
        </h3>

        <div className="grid gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="border border-indigo-600 rounded-lg p-4 transition"
            >
              <h4 className="text-lg font-semibold">{pkg.name}</h4>
              <p className="text-indigo-600 font-bold">{pkg.price}</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Choose
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}