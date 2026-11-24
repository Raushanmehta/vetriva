"use client";

import React from "react";
import Image from "next/image";
import { Award, Heart, Star } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Expert",
    subtitle: "Veterinary Care",
    icon: Award,
  },
  {
    id: 2,
    title: "Personalized",
    subtitle: "Pet Wellness",
    icon: Heart,
  },
  {
    id: 3,
    title: "Trusted by",
    subtitle: "Pet Parents",
    icon: Star,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white font-poppins py-10 sm:py-16 lg:py-20 select-none overflow-hidden">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Side: Overlapping Images Banner */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px] aspect-[922/811] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.09)]">
              <Image
                src="/about-pets-composite.jpg"
                alt="Dedicated to the Health & Happiness of Your Pets - VETRIVA"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side: Text & Features Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Subtitle with Right Horizontal Dash */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[12px] sm:text-[16px] font-semibold tracking-[0.2em] uppercase text-[#d96739]">
                About Us
              </span>
              <span className="w-12 sm:w-16 h-[2px] bg-[#d96739] rounded-full" />
            </div>

            {/* Headline with 2-Tone Color */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold tracking-tight leading-[1.14] text-[#1c3829] mb-2">
              Dedicated to the <br />
              <span className="text-[#cb653d]">Health &amp; Happiness</span> <br />
              of Your Pets
            </h2>

            {/* Description */}
            <p className="text-[#4e5b53] text-sm sm:text-base md:text-[17px] leading-relaxed mb-4 max-w-xl font-normal">
              At VETRIVA, we are passionate about pets and their well-being. Our
              experienced team provides compassionate, comprehensive, and personalized
              care to keep your furry companions healthy, active, and happy at every
              stage of life.
            </p>

            {/* Bottom 3 Feature Highlights with Vertical Dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 pt-4 border-t border-gray-100 sm:border-t-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    className={`flex items-center gap-3 sm:gap-3.5 ${index > 0 ? "sm:pl-4 sm:border-l sm:border-gray-200" : ""
                      }`}
                  >
                    {/* Outline Green Icon */}
                    <div className="w-11 h-11 shrink-0 flex items-center justify-center text-[#1c3829]">
                      <Icon className="w-8 h-8 stroke-[1.8]" />
                    </div>

                    {/* Feature Label */}
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-[16.5px] font-semibold text-[#1c3829] leading-tight">
                        {feature.title}
                      </span>
                      <span className="text-xs sm:text-[12.5px] font-medium text-[#4e5b53] leading-tight mt-0.5">
                        {feature.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
