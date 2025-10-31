import Navbar from "@/home/Navbar";

export default function Pricing() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Pricing
          </h1>
          <p className="text-xl text-white font-bold">
            Email us at{" "}
            <a
              href="mailto:contact@koelai.com"
              className="underline hover:text-white transition-colors mx-2 text-2xl"
            >
              contact@koelai.com
            </a>{" "}
            to explore our pricing options.
          </p>
        </div>
      </main>
    </div>
  );
}
