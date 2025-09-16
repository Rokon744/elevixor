import React from "react";

export default function ServiceCard({ service, onPurchase }) {
  return (
    <div className="shadow-lg rounded-xl p-6 text-center border hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-6">{service.desc}</p>
      <button
        onClick={() => onPurchase(service)}
        className="px-4 py-2 btn-button text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Purchase
      </button>
    </div>
  );
}
