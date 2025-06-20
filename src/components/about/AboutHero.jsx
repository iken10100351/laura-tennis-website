import React from "react";

export default function AboutHero() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-8 py-12 text-center font-tinos text-black"
      data-aos="fade-up"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Hi, I’m Laura.<br />
        Tennis has been part of my life since I was six years old. It’s given me so much over the years — not just skills, but confidence, resilience, friendships, and countless joyful memories.
        <br /><br />
        Coaching feels like a way to give back. I love creating a space where players feel supported, encouraged, and free to enjoy the game in their own way. Whether it's a child picking up a racket for the first time or an adult rediscovering their love for tennis, it means a lot to be part of that journey.
      </p>
    </section>
  );
}
