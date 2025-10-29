import Navbar from "@/home/Navbar";
import Hero from "@/home/Hero";
import Features from "@/home/Features";
import Demo from "@/home/Demo";
import Contact from "@/home/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Contact />
    </div>
  );
}
