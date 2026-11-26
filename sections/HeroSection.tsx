"use client";

import React from "react";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import { site } from "@/data";

export default function HeroSection() {
  const { subtitle, titleLine1, titleLine2, description, backgroundImage, alt } = site.hero;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#fbf8f5] font-poppins -mt-[76px] sm:-mt-[80px] pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24 select-none min-h-[620px] lg:min-h-[720px] flex items-center"
    >
      {/* Background Hero Banner Image (positioned to the right) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt={alt}
          fill
          priority
          className="object-cover object-right lg:object-[82%_center]"
          sizes="100vw"
        />

        {/* Soft Gradient Overlay for Crystal Clear Left Content Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f5] via-[#fbf8f5]/90 to-transparent sm:via-[#fbf8f5]/80 sm:w-[65%] lg:w-[58%]" />
        {/* Soft Top overlay under floating navbar */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#fbf8f5]/90 to-transparent" />
      </div>

      {/* Decorative Bottom Left Abstract Shapes */}
      <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-40 z-1 overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#cbd9cf]/60" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full border-[28px] border-[#ecdccf]/70" />
      </div>

      {/* Foreground Content: Left Side Text (perfectly aligned with Navbar logo container) */}
      <div className="relative z-10 max-w-[1330px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl flex flex-col justify-center">

            {/* Top Subtitle with Right Horizontal Dash */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[16px] font-semibold tracking-[0.2em] uppercase text-[#475b50]">
                {subtitle}
              </span>
              <span className="w-12 sm:w-20 h-[2.5px] bg-[#d96739] rounded-full" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-bold tracking-tight leading-[1.08] text-[#556b55] mb-6">
              {titleLine1} <br />
              <span className="text-[#cb653d]">{titleLine2}</span>
            </h1>

            {/* Sub-description Paragraph */}
            <p className="text-[#4e5b53] text-base sm:text-lg md:text-[19px] leading-relaxed max-w-lg mb-8 font-normal">
              {description}
            </p>

            {/* Decorative Sage Green Paw Print with subtle accent line */}
            <div className="relative mt-2 flex items-center gap-2">
              <div className="relative">
                <FaPaw className="w-12 h-12 text-[#b8cbbd]/70 rotate-[-15deg]" />
                <div className="absolute -bottom-1 -left-4 w-16 h-[2px] bg-[#b8cbbd]/50 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
