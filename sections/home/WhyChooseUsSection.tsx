"use client";

import React from "react";
import Image from "next/image";
import {
  PawPrint,
  ShieldCheck,
  Heart,
  Award,
  CalendarCheck,
  Users,
} from "lucide-react";
import { FaPaw } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Experienced & Caring Team",
    icon: PawPrint,
  },
  {
    id: 2,
    title: "Advanced Treatment Options",
    icon: Award,
  },
  {
    id: 3,
    title: "Safe & Hygienic Facilities",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Convenient Appointments",
    icon: CalendarCheck,
  },
  {
    id: 5,
    title: "Personalized Pet Care",
    icon: Heart,
  },
  {
    id: 6,
    title: "Trusted by Pet Parents",
    icon: Users,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative w-full bg-white font-poppins py-16 sm:py-20 lg:py-24 select-none overflow-hidden">
      {/* Decorative Bottom Right Paw Watermark */}
      <div className="absolute -bottom-6 right-6 sm:right-16 pointer-events-none opacity-20 z-0">
        <FaPaw className="w-24 h-24 sm:w-28 sm:h-28 text-[#d9c5b2] rotate-12" />
      </div>

      <div className="relative z-10 max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text & Features Grid */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Subtitle with Right Horizontal Dash */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#d96739]">
                Why Choose Us
              </span>
              <span className="w-12 sm:w-16 h-[2px] bg-[#d96739] rounded-full" />
            </div>

            {/* Headline with 2-Tone Color */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold tracking-tight leading-[1.14] text-[#1c3829] mb-5 sm:mb-6">
              Trusted Pet Care <br />
              You Can <span className="text-[#cb653d]">Count On.</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-[#4e5b53] text-sm sm:text-base md:text-[16.5px] leading-relaxed mb-8 max-w-xl font-normal">
              At VETRIVA, we go beyond routine care to build lasting relationships
              with pets and their families. Our experienced team, modern facilities,
              and genuine love for animals ensure the highest standard of care at every visit.
            </p>

            {/* 2-Column Clean Features List with Green Outlined Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center text-[#1c3829]">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-sm sm:text-[14.5px] font-semibold text-[#1c3829] leading-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[15/14] rounded-3xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.08)] bg-gray-50">
              <Image
                src="/why-choose-us-composite.jpg"
                alt="Trusted Pet Care You Can Count On - Vet with Dog and Cat"
                fill
                className="object-contain object-right-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
