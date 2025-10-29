import Navbar from "@/home/Navbar";
import Hero from "@/home/Hero";
import Features from "@/home/Features";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      <div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}
