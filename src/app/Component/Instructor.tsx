"use client";
import { AnimatedTooltip } from "./Ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Pastry Chef",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Marcus Reid",
    designation: "Grill Master",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Gourmet Chef",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Sushi Specialist",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

function Instructors() {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-teal-900 font-bold text-center mb-8">
          Meet Our Culinary Experts
        </h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-teal-100 leading-relaxed mb-8">
          Discover the seasoned chefs who will guide your culinary journey with
          expertise and passion.
        </p>
        <div className="flex flex-wrap justify-center items-center  w-full max-w-5xl mx-auto">
          <AnimatedTooltip items={instructors} />
        </div>
      </div>
    </div>
  );
}

export default Instructors;
