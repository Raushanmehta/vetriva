import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type VetrivaSchema = typeof siteData.Vetriva;
export type VetrivaSections = VetrivaSchema["sections"];
export type VetrivaTemplateComponents = VetrivaSchema["templateComponents"];

// SectionProps interface
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// Data models
export type VetrivaNavbarData = VetrivaSections["navbar"]["variants"]["VetrivaNavbar1"];
export type VetrivaNavItemsData = VetrivaNavbarData["navItems"];
export type VetrivaFooterData = VetrivaSections["footer"]["variants"]["VetrivaFooter1"];
export type VetrivaHeroData = VetrivaSections["hero"]["variants"]["VetrivaHero1"];
export type VetrivaAboutData = VetrivaSections["about"]["variants"]["VetrivaAbout1"];
export type VetrivaServicesData = VetrivaSections["services"]["variants"]["VetrivaServices1"];
export type VetrivaWhyChooseUsData = VetrivaSections["whyChooseUs"]["variants"]["VetrivaWhyChooseUs1"];
export type VetrivaTestimonialData = VetrivaSections["testimonials"]["variants"]["VetrivaTestimonials1"];
export type VetrivaTestimonialsData = VetrivaTestimonialData;
export type VetrivaContactData = VetrivaSections["contact"]["variants"]["VetrivaContact1"];

// Optional item types
export type NavItem = VetrivaNavbarData["navItems"][number];
export type ServiceItem = VetrivaServicesData["items"][number];
export type WhyChooseUsItem = VetrivaWhyChooseUsData["features"][number];
export type TestimonialItem = VetrivaTestimonialsData["items"][number];

// Site map
const sec = siteData.Vetriva.sections;

export const siteMap = {
  // Compatibility section shortcuts
  navbar: sec.navbar.variants.VetrivaNavbar1,
  navItems: sec.navbar.variants.VetrivaNavbar1.navItems,
  footer: sec.footer.variants.VetrivaFooter1,
  hero: sec.hero.variants.VetrivaHero1,
  about: sec.about.variants.VetrivaAbout1,
  services: sec.services.variants.VetrivaServices1,
  whyChooseUs: sec.whyChooseUs.variants.VetrivaWhyChooseUs1,
  testimonial: sec.testimonials.variants.VetrivaTestimonials1,
  testimonials: sec.testimonials.variants.VetrivaTestimonials1,
  contact: sec.contact.variants.VetrivaContact1,

  // Full named aliases
  navbarData: sec.navbar.variants.VetrivaNavbar1,
  footerData: sec.footer.variants.VetrivaFooter1,
  heroData: sec.hero.variants.VetrivaHero1,
  aboutData: sec.about.variants.VetrivaAbout1,
  servicesData: sec.services.variants.VetrivaServices1,
  whyChooseUsData: sec.whyChooseUs.variants.VetrivaWhyChooseUs1,
  testimonialData: sec.testimonials.variants.VetrivaTestimonials1,
  testimonialsData: sec.testimonials.variants.VetrivaTestimonials1,
  contactData: sec.contact.variants.VetrivaContact1,

  // Home aggregation
  home: {
    hero: sec.hero.variants.VetrivaHero1,
    about: sec.about.variants.VetrivaAbout1,
    services: sec.services.variants.VetrivaServices1,
    whyChooseUs: sec.whyChooseUs.variants.VetrivaWhyChooseUs1,
    testimonials: sec.testimonials.variants.VetrivaTestimonials1,
    contact: sec.contact.variants.VetrivaContact1,
  },

  // Brand shortcut
  brand: {
    name: "VETRIVA",
    tagline: "Complete Pet Care & Wellness",
    logo: sec.navbar.variants.VetrivaNavbar1.logo.src,
    alt: sec.navbar.variants.VetrivaNavbar1.logo.alt,
  },

  // Root Tree
  Vetriva: siteData.Vetriva,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default site;
