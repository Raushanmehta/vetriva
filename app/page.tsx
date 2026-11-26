import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ServiceSection from "@/sections/ServiceSection";
import TestimonialSection from "@/sections/TestimonialSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
