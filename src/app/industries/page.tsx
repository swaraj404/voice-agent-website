import Navbar from "@/home/Navbar";

export default function Industries() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Industries
          </h1>
          <p className="text-xl text-gray-300">
            Industry-specific solutions coming soon...
          </p>
        </div>
      </main>
    </div>
  );
}
