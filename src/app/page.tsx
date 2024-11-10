import Image from "next/image";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Courses from "./Component/Courses";
import WhyChooseUs from "./Component/WhyChooseUs"
import MovingCard from "./Component/MovingCard";
import Instructors from "./Component/Instructor";
import Footer from "./Component/Footer";



export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Navbar />
        <HeroSection />
        <Courses />
        <WhyChooseUs />
				<MovingCard />
				<Instructors />
				<Footer />
      </main>
    </>
  );
}
