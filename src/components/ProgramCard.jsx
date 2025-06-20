import React from "react";

export default function ProgramCard({ title, description }) {
  return (
    <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
