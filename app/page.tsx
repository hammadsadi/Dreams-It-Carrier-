import Hero from "@/components/Custom_Components/Hero/Hero";
import Navbar from "@/components/Custom_Components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header>
        <Navbar />
      </header>
      {/* Hero */}
      <Hero />
    </div>
  );
}
