"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

import { site } from "@/data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navLinks = site.navbar.navItems;
  const cta = site.navbar.ctaButton;
  const logo = site.navbar.logo.src;
  const alt = site.navbar.logo.alt;

  useEffect(() => {
    // List of section IDs to observe
    const sectionIds = ["home", "about", "services", "why-choose-us", "testimonials", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for sticky navbar

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full py-3 px-4 sm:px-6 lg:px-8 select-none transition-all duration-300">
      {/* Pill-shaped Floating Navbar Container */}
      <nav className="max-w-[1330px] mx-auto bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 sm:px-6 lg:px-8 py-2 md:py-2.5 flex items-center justify-between border border-black/[0.04]">
        {/* Brand Logo */}
        <Link href="#home" onClick={() => setActiveSection("home")} className="flex items-center shrink-0">
          <Image
            src={logo}
            alt={alt}
            width={170}
            height={50}
            className="h-12 sm:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative font-poppins text-[15px] font-semibold transition-colors duration-200 py-1 ${isActive
                  ? "text-[#e75a24]"
                  : "text-[#1c3829] hover:text-[#e75a24]"
                  }`}
              >
                {link.name}
                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-[#e75a24] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button & Divider */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Subtle Vertical Divider */}
          <div className="h-7 w-[1.5px] bg-gray-200" />

          {/* Contact Us CTA Pill Button */}
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="inline-flex items-center gap-2 bg-[#e75a24] hover:bg-[#d44d18] active:scale-95 text-white font-poppins font-medium text-[15px] px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(231,90,36,0.3)]"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="sm:inline-flex hidden items-center gap-1.5 bg-[#e75a24] text-white text-xs font-semibold px-4 py-3 rounded-full"
          >
            <span>Contact</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-full text-[#1c3829] hover:bg-black/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-[1330px] mx-auto bg-white rounded-3xl shadow-xl border border-black/[0.05] p-5 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3 font-poppins">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 px-3 rounded-xl font-semibold text-base transition-colors ${isActive
                    ? "bg-[#e75a24]/10 text-[#e75a24]"
                    : "text-[#1c3829] hover:bg-black/5 hover:text-[#e75a24]"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-2 border-t border-gray-100">
              <a
                href="#contact"
                onClick={() => {
                  setActiveSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#e75a24] text-white font-medium py-3 rounded-full shadow-md"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
