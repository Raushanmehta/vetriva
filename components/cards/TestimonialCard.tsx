"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { FaQuoteRight } from "react-icons/fa";

export interface TestimonialItem {
  id: number;
  rating: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

/**
 * TestimonialCard matches the exact reference image with the signature
 * top-right scoop curve (inverted concave arc) holding an orange circular quote icon.
 */
export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative group transition-all duration-300 ">
      {/* 
        The SVG Card Frame:
        Gives the exact smooth rounded corners (32px radius) and the smooth concave curve 
        scoop at the top-right corner, backed by clean border and drop-shadow.
      */}
      <div className="relative bg-white rounded-[32px] p-7 sm:p-8 flex flex-col justify-between border border-black/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.03)] group-hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden">

        {/* Top-Right Decorative Concave Scoop Cutout Background */}
        <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none z-0">
          {/* Circular cutout background that reveals the section background */}
          <div className="absolute -top-7 -right-7 w-28 h-28 rounded-full bg-[#fbf8f5] border border-black/[0.08] shadow-inner" />
        </div>

        {/* Orange Circular Quote Badge seated cleanly in the top-right notch */}
        <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#e35d26] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(227,93,38,0.35)] transition-transform duration-300 group-hover:scale-105">
            <FaQuoteRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
          </div>
        </div>

        {/* Top Content: Stars & Quote */}
        <div className="relative z-10 pt-1 pr-14">
          {/* Star Rating Row */}
          <div className="flex items-center gap-1.5 mb-5 sm:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < testimonial.rating
                    ? "fill-[#f59e0b] text-[#f59e0b]"
                    : "fill-gray-200 text-gray-200"
                  }`}
              />
            ))}
          </div>

          {/* Testimonial Quote */}
          <p className="text-[#3b4740] text-[15px] sm:text-[16px] leading-[1.65] font-normal mb-8 min-h-[96px]">
            {testimonial.content}
          </p>
        </div>

        {/* Author Footer */}
        <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-gray-100/90">
          {/* Circular Pet Avatar */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-black/[0.06] shrink-0 bg-gray-50 shadow-sm">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              className="object-cover object-center"
              sizes="56px"
            />
          </div>

          {/* Vertical Divider */}
          <div className="h-10 w-[1.5px] bg-gray-200/90 shrink-0" />

          {/* Author Name & Role */}
          <div className="flex flex-col justify-center">
            <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1c3829] leading-snug">
              {testimonial.author}
            </h4>
            <span className="text-[12px] font-bold text-[#5c6861] tracking-[0.12em] uppercase mt-0.5">
              {testimonial.role}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
