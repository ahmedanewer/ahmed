"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WorkflowSection from "@/components/home/WorkflowSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <FeaturedProjects />
      <WorkflowSection />
      <WhyUsSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
