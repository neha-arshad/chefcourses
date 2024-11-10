"use client";

import { InfiniteMovingCards } from "./Ui/infinite-moving-card";

const chefSchoolTestimonials = [
  {
    quote:
      "Joining this culinary school transformed my skills in the kitchen. I now have the confidence to cook professionally, thanks to the hands-on training!",
    name: "Sarah Collins",
    title: "Professional Chef Student",
  },
  {
    quote:
      "The supportive environment here is unmatched. I've grown not just as a cook, but as a culinary artist. This school has truly elevated my career.",
    name: "David Thompson",
    title: "Pastry Student",
  },
  {
    quote:
      "I never thought I could master complex dishes, but the personalized coaching here has been incredible. I’m grateful for the guidance and expertise.",
    name: "Lisa Perez",
    title: "Advanced Culinary Student",
  },
  {
    quote:
      "As someone passionate about global cuisine, finding a school that embraces diversity in food has been amazing. My mentor truly understands my vision.",
    name: "James Kim",
    title: "International Cuisine Student",
  },
  {
    quote:
      "The curriculum here introduced me to modern culinary techniques and tools. Highly recommended for anyone serious about a career in food!",
    name: "Nina Patel",
    title: "Culinary Arts Student",
  },
];

function MovingCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Taste the Success: Stories from Our Culinary Students
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={chefSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MovingCard;
