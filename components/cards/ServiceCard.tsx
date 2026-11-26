"use client";

import React from "react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col items-center text-center border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group">
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
}
