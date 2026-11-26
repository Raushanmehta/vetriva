"use client";

import React from "react";
import Image from "next/image";
import {
  Stethoscope,
  Heart,
  Star,
  Award,
  LucideIcon,
} from "lucide-react";
import { site } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Heart,
  Star,
  Award,
};

export default function AboutSection() {
  const {
    subtitle,
    titleLine1,
    titleHighlight,
    titleLine2,
    description,
    mainPetImage,
    mainPetAlt,
    vetImage,
    vetAlt,
    features,
  } = site.about;

  return (
    <section id="about" className="w-full bg-white py-10 sm:py-16 lg:py-20 select-none overflow-hidden font-poppins">
      <div className="mx-auto grid max-w-[1330px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">

        {/* LEFT SIDE - IMAGES */}
        <div className="relative mx-auto w-full max-w-[650px] pb-12 pr-3 sm:pb-14 sm:pr-5 lg:mx-0">

          {/* Main Pet Image */}
          <div className="relative aspect-[1.28/1] w-full overflow-hidden rounded-[22px]">
            <Image
              src={mainPetImage}
              alt={mainPetAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Overlapping Veterinarian Image */}
          <div className="absolute bottom-0 right-0 z-10 w-[48%] overflow-hidden rounded-[20px] border-[7px] border-white shadow-sm">
            <div className="relative aspect-[1.25/1]">
              <Image
                src={vetImage}
                alt={vetAlt}
                fill
                sizes="(max-width: 1024px) 48vw, 24vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex flex-col justify-center">

          {/* Section Label */}
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[12px] sm:text-[16px] font-semibold uppercase tracking-[0.2em] text-[#d96739]">
              {subtitle}
            </span>
            <span className="h-[2px] w-12 sm:w-16 rounded-full bg-[#d96739]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold leading-[1.14] tracking-tight text-[#1c3829] mb-2">
            {titleLine1}
            <span className="block text-[#cb653d]">
              {titleHighlight}
            </span>
            <span className="block">
              {titleLine2}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base md:text-[17px] leading-relaxed text-[#4e5b53] font-normal max-w-xl">
            {description}
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid grid-cols-1 divide-y divide-[#E8E2DC] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon] || Star;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 py-4 sm:px-4 sm:py-2 first:sm:pl-0 last:sm:pr-0"
                >
                  <Icon
                    size={43}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#1c3829]"
                  />

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#1c3829] sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#55635a] sm:text-sm font-medium">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
