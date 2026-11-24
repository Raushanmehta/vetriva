"use client";

import React from "react";
import {
  Stethoscope,
  Syringe,
  Scissors,
  Sparkles,
  UtensilsCrossed,
  Smile,
  ClipboardCheck,
  Home,
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Health Checkups",
    description: "Routine exams to keep your pet in top health.",
    icon: Stethoscope,
  },
  {
    id: 2,
    title: "Vaccinations",
    description: "Essential vaccines for a stronger, healthier life.",
    icon: Syringe,
  },
  {
    id: 3,
    title: "Surgery & Treatment",
    description: "Safe and advanced surgical care when needed.",
    icon: Scissors,
  },
  {
    id: 4,
    title: "Grooming & Hygiene",
    description: "Professional grooming for a clean, healthy, and happy pet.",
    icon: Sparkles,
  },
  {
    id: 5,
    title: "Nutrition & Diet",
    description: "Personalized diet guidance for better wellness.",
    icon: UtensilsCrossed,
  },
  {
    id: 6,
    title: "Dental Care",
    description: "Keep their teeth and gums strong and healthy.",
    icon: Smile,
  },
  {
    id: 7,
    title: "Preventive Care",
    description: "Early care to prevent future health issues.",
    icon: ClipboardCheck,
  },
  {
    id: 8,
    title: "Boarding & Daycare",
    description: "A safe, comfortable, and caring home while you're away.",
    icon: Home,
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="w-full bg-[#fbf8f5] font-poppins py-16 sm:py-20 lg:py-24 select-none">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left & Right Orange Accent Dashes */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3.5 mb-3">
            <span className="w-10 sm:w-14 h-[2px] bg-[#d96739] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#d96739]">
              Our Services
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#d96739] rounded-full" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c3829] tracking-tight mb-4">
            Comprehensive Care for{" "}
            <span className="text-[#cb653d]">Your Pets</span>
          </h2>

          <p className="text-[#4e5b53] text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl font-normal">
            From routine checkups to specialized treatments, we offer a full range
            of pet care services to keep your furry friends healthy and happy.
          </p>
        </div>

        {/* 4x2 Clean White Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col items-center text-center border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Soft Cream Rounded Icon Container with Dark Green Icon */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#f5ede3] text-[#1c3829] flex items-center justify-center mb-5 group-hover:bg-[#e75a24] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8 stroke-[1.7] transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-[19px] font-bold text-[#1c3829] tracking-tight mb-2.5">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-[#5a6860] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
