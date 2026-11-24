"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaPaw } from "react-icons/fa";
import TestimonialCard, { TestimonialItem } from "@/components/cards/TestimonialCard";

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    rating: 5,
    content:
      "“The team at VETRIVA is amazing! They truly care about pets and provide exceptional care. My dog always feels comfortable here.”",
    author: "Rohan Mehta",
    role: "DOG PARENT",
    avatar: "/avatar-dog1.jpg",
  },
  {
    id: 2,
    rating: 5,
    content:
      "“Excellent service and a very friendly staff. The clinic is clean, well-equipped, and the doctors are highly professional.”",
    author: "Priya Sharma",
    role: "CAT PARENT",
    avatar: "/avatar-cat.jpg",
  },
  {
    id: 3,
    rating: 4,
    content:
      "“I'm really happy with the care my pet receives at VETRIVA. From checkups to grooming, everything is handled with love.”",
    author: "Amit Verma",
    role: "PET PARENT",
    avatar: "/avatar-beagle.jpg",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="w-full bg-[#fbf8f5] font-poppins py-16 sm:py-20 lg:py-24 select-none overflow-hidden">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row: Badge & Headline on Left, Carousel Arrow Buttons on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ecdccf]/50 text-[#1c3829] px-3.5 py-1.5 rounded-full mb-3">
              <FaPaw className="w-3.5 h-3.5 text-[#1c3829]" />
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#1c3829]">
                Testimonials
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c3829] tracking-tight">
              What Pet Parents <span className="text-[#cb653d]">Say</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-xl border border-black/20 bg-white hover:bg-[#1c3829] hover:text-white hover:border-[#1c3829] text-[#1c3829] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-xl border border-black/20 bg-white hover:bg-[#1c3829] hover:text-white hover:border-[#1c3829] text-[#1c3829] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
