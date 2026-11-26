"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import { FaPaw } from "react-icons/fa";
import { site } from "@/data";

export default function ContactSection() {
  const { subtitle, titlePrefix, titleHighlight, description, info, form } = site.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(form.successMessage);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="w-full bg-white font-poppins py-10 sm:py-16 lg:py-20 select-none overflow-hidden">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Left & Right Dashes */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3.5 mb-2.5">
            <span className="w-10 sm:w-14 h-[2px] bg-[#d96739] rounded-full" />
            <span className="text-[12px] sm:text-[16px] font-semibold tracking-[0.2em] uppercase text-[#d96739]">
              {subtitle}
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#d96739] rounded-full" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c3829] tracking-tight mb-4">
            {titlePrefix} <span className="text-[#cb653d]">{titleHighlight}</span>
          </h2>

          <p className="text-[#4e5b53] text-sm sm:text-base md:text-[16.5px] leading-relaxed max-w-2xl font-normal">
            {description}
          </p>
        </div>

        {/* 2-Column Main Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: 4 Clean Info Rows with Green Outlined Icons */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7 justify-center">

            {/* 1. Location */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#faf6f2] border border-[#ecdccf] text-[#1c3829] flex items-center justify-center shrink-0 group-hover:bg-[#1c3829] group-hover:text-white transition-colors duration-200">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1c3829]">
                  {info.location.title}
                </h4>
                {info.location.lines.map((line, i) => (
                  <p key={i} className="text-sm sm:text-[14.5px] text-[#55635a] font-normal leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* 2. Phone Call */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#faf6f2] border border-[#ecdccf] text-[#1c3829] flex items-center justify-center shrink-0 group-hover:bg-[#1c3829] group-hover:text-white transition-colors duration-200">
                <Phone className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1c3829]">
                  {info.call.title}
                </h4>
                <a
                  href={`tel:${info.call.tel}`}
                  className="text-sm sm:text-[14.5px] text-[#55635a] font-medium hover:text-[#e75a24] transition-colors"
                >
                  {info.call.number}
                </a>
              </div>
            </div>

            {/* 3. Email Address */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#faf6f2] border border-[#ecdccf] text-[#1c3829] flex items-center justify-center shrink-0 group-hover:bg-[#1c3829] group-hover:text-white transition-colors duration-200">
                <Mail className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1c3829]">
                  {info.email.title}
                </h4>
                <a
                  href={`mailto:${info.email.mailto}`}
                  className="text-sm sm:text-[14.5px] text-[#55635a] font-medium hover:text-[#e75a24] transition-colors"
                >
                  {info.email.address}
                </a>
              </div>
            </div>

            {/* 4. Working Hours */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#faf6f2] border border-[#ecdccf] text-[#1c3829] flex items-center justify-center shrink-0 group-hover:bg-[#1c3829] group-hover:text-white transition-colors duration-200">
                <Clock className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1c3829]">
                  {info.hours.title}
                </h4>
                {info.hours.schedule.map((item, i) => (
                  <p key={i} className="text-sm sm:text-[14.5px] text-[#55635a] font-normal leading-relaxed">
                    <span className="font-medium text-[#1c3829]">{item.days}:</span> {item.time}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Modern Rounded Soft Card Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#fbf8f5] rounded-3xl p-7 sm:p-9 md:p-11 border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.02)]">

              {/* Form Title with Paw Accent */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <FaPaw className="text-[#e75a24] w-6 h-6 rotate-[-12deg]" />
                <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#1c3829]">
                  {form.heading}
                </h3>
              </div>

              {/* Form Inputs Grid */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder={form.placeholders.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white rounded-xl py-3.5 pl-11 pr-4 text-sm sm:text-[15px] text-[#1c3829] placeholder-gray-400 border border-gray-200/80 focus:outline-none focus:border-[#e75a24] focus:ring-1 focus:ring-[#e75a24] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder={form.placeholders.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white rounded-xl py-3.5 pl-11 pr-4 text-sm sm:text-[15px] text-[#1c3829] placeholder-gray-400 border border-gray-200/80 focus:outline-none focus:border-[#e75a24] focus:ring-1 focus:ring-[#e75a24] transition-all"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    placeholder={form.placeholders.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white rounded-xl py-3.5 pl-11 pr-4 text-sm sm:text-[15px] text-[#1c3829] placeholder-gray-400 border border-gray-200/80 focus:outline-none focus:border-[#e75a24] focus:ring-1 focus:ring-[#e75a24] transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-gray-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    rows={4}
                    required
                    placeholder={form.placeholders.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white rounded-xl py-3.5 pl-11 pr-4 text-sm sm:text-[15px] text-[#1c3829] placeholder-gray-400 border border-gray-200/80 focus:outline-none focus:border-[#e75a24] focus:ring-1 focus:ring-[#e75a24] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-[#e75a24] hover:bg-[#d44d18] active:scale-[0.99] text-white font-semibold text-sm sm:text-base py-3.5 px-8 rounded-xl transition-all duration-200 shadow-[0_4px_16px_rgba(231,90,36,0.25)] cursor-pointer self-start"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
