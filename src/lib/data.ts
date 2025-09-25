import type { CategoryItem } from "./types";
import type { Expertise } from "./types";

export const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About me",
    href: "#about-me",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Contact me",
    href: "#contact-me",
  },
];

export const serviceOptions = [
  { value: "app-design", label: "App Design" },
  { value: "brand-design", label: "Brand Design" },
  { value: "web-design", label: "Web Design" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "prototyping", label: "Prototyping" },
  { value: "design-systems", label: "Design Systems" },
];

export const skills = [
  {
    icon: "basil:figma-outline",
    name: "Figma",
    percentage: 100,
  },
  {
    icon: "iconoir:adobe-xd",
    name: "Adobe XD",
    percentage: 100,
  },
  {
    icon: "iconoir:adobe-photoshop",
    name: "Adobe Photoshop",
    percentage: 85,
  },
  {
    icon: "iconoir:adobe-illustrator",
    name: "Adobe Illustrator",
    percentage: 60,
  },
  {
    icon: "basil:adobe-premiere-outline",
    name: "Adobe Premiere",
    percentage: 70,
  },
];

export const services = [
  {
    id: "app-design",
    name: "App Design",
    icon: "mdi:cellphone",
    description:
      "Designing modern, intuitive, and optimized mobile applications.",
  },
  {
    id: "brand-design",
    name: "Brand Design",
    icon: "mdi:palette-swatch",
    description: "Creating unique visual identities to strengthen your brand.",
  },
  {
    id: "web-design",
    name: "Web Design",
    icon: "mdi:web",
    description:
      "Development of responsive, attractive, and high-performance websites.",
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    icon: "mdi:design",
    description:
      "Designing fluid user interfaces with an optimized experience.",
  },
  {
    id: "prototyping",
    name: "Prototyping",
    icon: "mdi:shape",
    description:
      "Creation of interactive prototypes to test and validate your ideas.",
  },
  {
    id: "design-systems",
    name: "Design Systems",
    icon: "mdi:view-grid",
    description: "Creating consistent design systems for scalable interfaces.",
  },
];

export const expertise: Expertise[] = [
  {
    value: "5+",
    label: "Experiences",
  },
  {
    value: "20+",
    label: "Projects done",
  },
  {
    value: "80+",
    label: "Happy Clients",
  },
];

export const categories: CategoryItem[] = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "website-design",
    name: "Website Design",
  },
  {
    id: "app-mobile-design",
    name: "App Mobile Design",
  },
  {
    id: "app-desktop",
    name: "App Desktop",
  },
  {
    id: "branding",
    name: "Branding",
  },
];
