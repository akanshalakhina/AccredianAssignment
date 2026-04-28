import HeroSection       from "@/components/sections/HeroSection";
import TrustedBySection  from "@/components/sections/TrustedBySection";
import WhyUsSection      from "@/components/sections/WhyUsSection";
import ProgramsSection   from "@/components/sections/ProgramsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection    from "@/components/sections/ContactSection";

/**
 * Home page — server component (no "use client").
 * Composes all sections in order, each section handles its own
 * client-side interactivity via nested Client Components.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <WhyUsSection />
      <ProgramsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
