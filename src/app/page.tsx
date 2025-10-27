import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}
