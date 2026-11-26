"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaPaw } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { site } from "@/data";

export default function Footer() {
  const { brand, navbar, contact, footer } = site;
  const navLinks = navbar.navItems;

  return (
    <footer className="w-full bg-[#fbf8f5] font-poppins pt-12 sm:pt-16 select-none overflow-hidden">
      <div className="max-w-[1330px] mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Top Header: Logo on left, Social Media on right */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 sm:pb-10">
            {/* Brand Logo */}
            <Link href="/" className="inline-block shrink-0">
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={220}
                height={60}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {footer.socialLinks.map((social) => {
                const isIg = social.platform.toLowerCase() === "instagram";
                const Icon = isIg ? FaInstagram : FaFacebookF;

                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#1c3829] hover:text-[#e75a24] hover:bg-orange-50 transition-all duration-200"
                  >
                    <Icon className={isIg ? "w-6 h-6" : "w-5 h-5"} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Divider with Center Paw Badge */}
          <div className="relative flex items-center justify-center my-2">
            {/* Continuous dark green line */}
            <div className="w-full h-[2px] bg-[#1c3829]" />
            {/* Centered circular paw badge */}
            <div className="absolute bg-[#1c3829] text-white p-2.5 rounded-full shadow-sm flex items-center justify-center">
              <FaPaw className="w-4 h-4" />
            </div>
          </div>

          {/* Middle Row: Tagline/Location on left, Navigation Links with orange pipes on right */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-6 pb-12 sm:pb-16 text-center lg:text-left">
            {/* Address & Tagline */}
            <div className="text-[#1c3829] text-sm sm:text-[15px] font-medium leading-relaxed">
              <p>{footer.tagline}</p>
              <p className="text-gray-600 mt-0.5">{footer.location}</p>
            </div>

            {/* Nav Links with Orange Separators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3 sm:gap-x-4 gap-y-2 text-sm sm:text-[15px] font-semibold text-[#1c3829]">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#e75a24] transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="text-[#e75a24] font-normal select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Center CTA Section: "Are you ready to get started?" + Contact badges */}
          <div className="flex flex-col items-center justify-center text-center pb-14 sm:pb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1c3829] tracking-tight mb-8">
              {footer.cta.heading} <span className="text-[#e75a24]">{footer.cta.headingHighlight}</span>
            </h2>

            {/* Email & Phone Contact Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-transparent">
              {/* Email Contact */}
              <a
                href={`mailto:${contact.info.email.mailto}`}
                className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
              >
                <div className="w-11 h-11 rounded-lg bg-[#e3efe7] text-[#1c3829] flex items-center justify-center shrink-0">
                  <HiOutlineMail className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-[#1c3829] group-hover:text-[#e75a24] transition-colors">
                  {contact.info.email.address}
                </span>
              </a>

              {/* Subtle Divider (Desktop only) */}
              <div className="hidden sm:block h-8 w-[1.5px] bg-gray-300" />

              {/* Phone Contact */}
              <a
                href={`tel:${contact.info.call.tel}`}
                className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
              >
                <div className="w-11 h-11 rounded-lg bg-[#e3efe7] text-[#1c3829] flex items-center justify-center shrink-0">
                  <FiPhoneCall className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-[#1c3829] group-hover:text-[#e75a24] transition-colors">
                  {contact.info.call.number}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar with Split Green Accent Lines */}
      <div className="w-full bg-[#1c3829] py-5 px-4 text-white text-xs sm:text-sm font-medium">
        <div className="max-w-[1330px] mx-auto flex items-center justify-center gap-4 sm:gap-8">
          <div className="hidden md:block flex-1 h-[1px] bg-white/20" />
          <p className="text-center tracking-wide text-white/90" suppressHydrationWarning>
            {footer.copyright}
          </p>
          <div className="hidden md:block flex-1 h-[1px] bg-white/20" />
        </div>
      </div>
    </footer>
  );
}
