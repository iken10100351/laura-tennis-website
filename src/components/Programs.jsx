import React from "react";
import ProgramCard from "./ProgramCard";

export default function Programs() {
  const courses = [
    {
      title: "Junior Starters",
      description: "Fun-based sessions for kids aged 5–9. Focus on agility and basic technique.",
    },
    {
      title: "Teen Training",
      description: "For players aged 10–16 who want to improve skills and start competing.",
    },
    {
      title: "Adult Social & Cardio",
      description: "Get fit, have fun, and learn tennis in a relaxed group setting.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10 font-cinzel">
          Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <ProgramCard
              key={idx}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
