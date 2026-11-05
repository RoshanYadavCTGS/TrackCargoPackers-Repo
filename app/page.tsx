import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import CostCalculator from "@/components/home/CostCalculator";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import RoutesLocalities from "@/components/home/RoutesLocalities";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqAccordion from "@/components/home/FaqAccordion";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <CostCalculator />
      <WhyChooseUs />
      <ProcessTimeline />
      <RoutesLocalities />
      <TestimonialsSection />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}

