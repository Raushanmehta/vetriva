"use client";

import {
  Stethoscope,
  Syringe,
  Scissors,
  Sparkles,
  UtensilsCrossed,
  Smile,
  ClipboardCheck,
  Home,
  LucideIcon,
} from "lucide-react";
import ServiceCard from "@/components/cards/ServiceCard";
import { site } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Syringe,
  Scissors,
  Sparkles,
  UtensilsCrossed,
  Smile,
  ClipboardCheck,
  Home,
};

export default function ServiceSection() {
  const { subtitle, titlePrefix, titleHighlight, description, items } = site.services;

  return (
    <section id="services" className="w-full bg-[#fbf8f5] font-poppins py-10 sm:py-16 lg:py-20 select-none">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Left & Right Orange Accent Dashes */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3.5 mb-2.5">
            <span className="w-10 sm:w-14 h-[2px] bg-[#d96739] rounded-full" />
            <span className="text-[12px] sm:text-[16px] font-semibold tracking-[0.2em] uppercase text-[#d96739]">
              {subtitle}
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#d96739] rounded-full" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c3829] tracking-tight mb-4">
            {titlePrefix}{" "}
            <span className="text-[#cb653d]">{titleHighlight}</span>
          </h2>

          <p className="text-[#4e5b53] text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl font-normal">
            {description}
          </p>
        </div>

        {/* 4x2 Clean White Service Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5">
          {items.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;

            return (
              <ServiceCard
                key={service.id}
                service={{
                  id: service.id,
                  title: service.title,
                  description: service.description,
                  icon: Icon,
                }}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
