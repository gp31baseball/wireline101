import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServiceCard from "@/components/ServiceCard";
import TechSection from "@/components/TechSection";
import SafetySection from "@/components/SafetySection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0B0C] text-white">
      <Hero />
      <AboutSection />
      <TechSection />
      <SafetySection />
      <ContactForm />
      <Footer />
    </main>
  );
}
