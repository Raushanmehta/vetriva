"use client";

import React from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { site } from "@/data";

export default function TestimonialSection() {
  const { subtitle, titlePrefix, titleHighlight, items } = site.testimonials;

  return (
    <section id="testimonials" className="w-full bg-[#fbf8f5] font-poppins py-10 sm:py-16 lg:py-20 select-none overflow-hidden">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header Row: Badge & Headline on Left, Carousel Arrow Buttons on Right */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 sm:mb-10">
            <div>
              {/* Top Subtitle with Right Horizontal Dash */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[12px] sm:text-[16px] font-semibold tracking-[0.2em] uppercase text-[#d96739]">
                  {subtitle}
                </span>
                <span className="w-12 sm:w-16 h-[2px] bg-[#d96739] rounded-full" />
              </div>

              {/* Main Title */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c3829] tracking-tight">
                {titlePrefix} <span className="text-[#cb653d]">{titleHighlight}</span>
              </h2>
            </div>

            {/* Navigation Arrows connected to shadcn Carousel */}
            <div className="flex items-center gap-2.5">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          {/* Carousel Track with Testimonial Cards */}
          <CarouselContent className="-ml-5 sm:-ml-5">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-5 sm:pl-5 basis-full md:basis-1/1 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  );
}
