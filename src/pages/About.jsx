import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutEducation from "../components/about/AboutEducation";
import AboutQualifications from "../components/about/AboutQualifications";
import CareerHighlights from "../components/about/CareerHighlights";
import MajorEventExperience from "../components/about/MajorEventExperience";
import FancyDivider from "../components/FancyDivider";

export default function About() {
  return (
    <section className="text-gray-800 px-8 py-16 max-w-[1400px] mx-auto space-y-28 font-tinos scroll-smooth">
      <AboutHero />
      <FancyDivider>Coaching Qualifications</FancyDivider>
      <AboutQualifications />
      <FancyDivider >Education</FancyDivider>
      <AboutEducation />
      <FancyDivider>Major Event Experience</FancyDivider>
      <MajorEventExperience />
      <FancyDivider>Career Highlights</FancyDivider> 
      <CareerHighlights />
    </section>
  );
}
