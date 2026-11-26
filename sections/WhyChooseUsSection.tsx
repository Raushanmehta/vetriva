"use client";

import React from "react";
import Image from "next/image";
import {
  PawPrint,
  Award,
  ShieldCheck,
  CalendarCheck,
  Heart,
  Users,
  LucideIcon,
} from "lucide-react";
import { site } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  PawPrint,
  Award,
  ShieldCheck,
  CalendarCheck,
  Heart,
  Users,
};

export default function WhyChooseUsSection() {
  const {
    subtitle,
    titlePrefix,
    titleMiddle,
    titleHighlight,
    description,
    mainImage,
    mainImageAlt,
    badgeImage,
    badgeImageAlt,
    features,
  } = site.whyChooseUs;

  return (
    <section id="why-choose-us" className="w-full overflow-hidden bg-white py-10 sm:py-16 lg:py-20 font-poppins select-none">
      <div className="mx-auto grid max-w-[1330px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">

        {/* LEFT CONTENT */}
        <div className="order-1 w-full">

          {/* Section Label */}
          <div className="mb-2 flex items-center gap-3">
            <span className="text-[12px] sm:text-[16px] font-semibold uppercase tracking-[0.2em] text-[#d96739]">
              {subtitle}
            </span>
            <span className="h-[2px] w-12 sm:w-16 rounded-full bg-[#d96739]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold leading-[1.14] tracking-tight text-[#1c3829] mb-4">
            {titlePrefix}
            <br />
            {titleMiddle} <span className="text-[#cb653d]">{titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[590px] text-sm sm:text-base md:text-[16.5px] leading-relaxed text-[#4e5b53] font-normal">
            {description}
          </p>

          {/* FEATURES GRID */}
          <div className="mt-8 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6">

            {/* Left Feature Column */}
            <div className="flex flex-col gap-5 border-[#E5DED6] sm:border-r sm:pr-5">
              {features.filter((_, i) => i % 2 === 0).map((item) => {
                const Icon = iconMap[item.icon] || PawPrint;

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >
                    <Icon
                      size={35}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#1c3829]"
                    />
                    <span className="text-sm font-semibold text-[#1c3829] sm:text-[15px]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Feature Column */}
            <div className="flex flex-col gap-5 sm:pl-0">
              {features.filter((_, i) => i % 2 !== 0).map((item) => {
                const Icon = iconMap[item.icon] || PawPrint;

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >
                    <Icon
                      size={35}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#1c3829]"
                    />
                    <span className="text-sm font-semibold text-[#1c3829] sm:text-[15px]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="order-2 relative mx-auto w-full max-w-[550px] pb-3 pr-3 sm:pr-6">

          {/* Main Veterinarian Image */}
          <div className="relative aspect-[1.08/1] w-full overflow-hidden rounded-[35px] shadow-[0_16px_45px_rgba(0,0,0,0.06)] bg-[#faf6f2]">
            <Image
              src={mainImage}
              alt={mainImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Overlapping Cat Badge Image */}
          <div className="absolute -right-0 -top-7 z-10 w-[39%] overflow-hidden rounded-[24px] border-[5px] border-white shadow-lg sm:-right-1 sm:-top-8">
            <div className="relative aspect-[1.15/1]">
              <Image
                src={badgeImage}
                alt={badgeImageAlt}
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
