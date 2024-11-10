"use client";
import React from "react";
import { StickyScroll } from "./Ui/sticky-scroll-reveal";

const chefContent = [
  {
    title: "Unleash Your Culinary Potential with Our Expert Guidance",
    description:
      "Begin a culinary adventure tailored just for you. Our personalized classes adapt to your individual skills and aspirations, ensuring a growth path that’s both enjoyable and challenging. At our cooking school, your dreams of becoming a chef meet expert support, guiding you every step of the way.",
  },
  {
    title: "Hands-On Learning: Real Kitchen Experience",
    description:
      "Get ready to roll up your sleeves and dive into practical cooking sessions. Experience the real dynamics of a professional kitchen with hands-on guidance from experienced chefs. This approach boosts your confidence and prepares you for a culinary career or home cooking mastery.",
  },
  {
    title: "Learn from Seasoned Chefs with Years of Experience",
    description:
      "Our instructors bring a wealth of knowledge from top kitchens worldwide. Learn techniques, secrets, and tips that only come from years in the industry, providing you with an edge and unique insights into the culinary world.",
  },
  {
    title: "Interactive Feedback & Personalized Progress Tracking",
    description:
      "Benefit from real-time feedback during cooking sessions, just like you would in a fast-paced kitchen. This interactive learning style enhances your skills quickly, ensuring you understand every technique and recipe perfectly.",
  },
  {
    title: "Modern and Relevant Curriculum",
    description:
      "Our curriculum evolves to include the latest culinary trends and techniques, from global cuisines to cutting-edge cooking technology. Forget outdated methods; we ensure you learn with tools and recipes that are relevant to today’s culinary standards.",
  },
  {
    title: "Endless Culinary Exploration",
    description:
      "With access to a wide range of resources and a dynamic course selection, there’s always something new to discover. Our school supports continuous learning and exploration, so your culinary skills keep growing along with your creativity.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={chefContent} />
    </div>
  );
}

export default WhyChooseUs;
