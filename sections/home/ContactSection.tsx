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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="w-full bg-white font-poppins py-16 sm:py-20 lg:py-24 select-none overflow-hidden">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left & Right Dashes */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3.5 mb-3">
            <span className="w-10 sm:w-14 h-[2px] bg-[#d96739] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#d96739]">
              Contact Us
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#d96739] rounded-full" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c3829] tracking-tight mb-4">
            Get in Touch <span className="text-[#cb653d]">with Us</span>
          </h2>

          <p className="text-[#4e5b53] text-sm sm:text-base md:text-[16.5px] leading-relaxed max-w-2xl font-normal">
            Have a question, need an appointment, or want to know more about our services?
            We&apos;re here to help you and your pet.
          </p>
        </div>

        {/* 2-Column Main Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Side: 4 Contact Info Blocks with Orange Divider Bars */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7 justify-center pt-2">
            
            {/* 1. Our Location */}
            <div className="flex items-start gap-4">
              <div className="w-13 h-13 rounded-2xl bg-[#f5ede3] text-[#1c3829] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="pl-2 border-l-2 border-[#d96739] flex flex-col justify-center min-h-[52px]">
                <h4 className="text-base sm:text-[17px] font-bold text-[#1c3829] leading-tight">
                  Our Location
                </h4>
                <p className="text-xs sm:text-sm text-[#4e5b53] leading-relaxed mt-1">
                  123, Pet Care Avenue, <br />
                  Green Valley, New Delhi &ndash; 110016
                </p>
              </div>
            </div>

            {/* 2. Call Us */}
            <div className="flex items-start gap-4">
              <div className="w-13 h-13 rounded-2xl bg-[#f5ede3] text-[#1c3829] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="pl-2 border-l-2 border-[#d96739] flex flex-col justify-center min-h-[52px]">
                <h4 className="text-base sm:text-[17px] font-bold text-[#1c3829] leading-tight">
                  Call Us
                </h4>
                <a
                  href="tel:+919876543210"
                  className="text-xs sm:text-sm font-semibold text-[#4e5b53] hover:text-[#d96739] transition-colors mt-1"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* 3. Email Us */}
            <div className="flex items-start gap-4">
              <div className="w-13 h-13 rounded-2xl bg-[#f5ede3] text-[#1c3829] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="pl-2 border-l-2 border-[#d96739] flex flex-col justify-center min-h-[52px]">
                <h4 className="text-base sm:text-[17px] font-bold text-[#1c3829] leading-tight">
                  Email Us
                </h4>
                <a
                  href="mailto:info@vetriva.com"
                  className="text-xs sm:text-sm font-semibold text-[#4e5b53] hover:text-[#d96739] transition-colors mt-1"
                >
                  info@vetriva.com
                </a>
              </div>
            </div>

            {/* 4. Working Hours */}
            <div className="flex items-start gap-4">
              <div className="w-13 h-13 rounded-2xl bg-[#f5ede3] text-[#1c3829] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="pl-2 border-l-2 border-[#d96739] flex flex-col justify-center min-h-[52px]">
                <h4 className="text-base sm:text-[17px] font-bold text-[#1c3829] leading-tight">
                  Working Hours
                </h4>
                <p className="text-xs sm:text-sm text-[#4e5b53] leading-relaxed mt-1">
                  <span className="font-semibold text-[#1c3829]">Mon &ndash; Sat :</span> 9:00 AM &ndash; 7:00 PM <br />
                  <span className="font-semibold text-[#1c3829]">Sunday :</span> 10:00 AM &ndash; 5:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: "Send Us a Message" Rounded Form Card */}
          <div className="lg:col-span-7 bg-[#fbf8f5] rounded-[36px] p-6 sm:p-9 md:p-11 border border-black/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            {/* Form Title with Orange Paw Icon */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <FaPaw className="w-6 h-6 sm:w-7 sm:h-7 text-[#d96739]" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c3829] tracking-tight">
                Send Us a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              {/* Row 1: Your Name & Your Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Your Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4e5b53]" />
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white text-[#1c3829] placeholder-[#4e5b53] text-sm sm:text-base font-medium rounded-full pl-11 pr-5 py-3 sm:py-3.5 border border-black/15 focus:border-[#d96739] focus:outline-none transition-colors"
                  />
                </div>

                {/* Your Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4e5b53]" />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white text-[#1c3829] placeholder-[#4e5b53] text-sm sm:text-base font-medium rounded-full pl-11 pr-5 py-3 sm:py-3.5 border border-black/15 focus:border-[#d96739] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4e5b53]" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white text-[#1c3829] placeholder-[#4e5b53] text-sm sm:text-base font-medium rounded-full pl-11 pr-5 py-3 sm:py-3.5 border border-black/15 focus:border-[#d96739] focus:outline-none transition-colors"
                />
              </div>

              {/* Row 3: Your Message Textarea */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#4e5b53]" />
                <textarea
                  rows={4}
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white text-[#1c3829] placeholder-[#4e5b53] text-sm sm:text-base font-medium rounded-3xl pl-11 pr-5 py-3.5 border border-black/15 focus:border-[#d96739] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-start">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#d96739] hover:bg-[#c2562c] active:scale-95 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(217,103,57,0.35)] cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
