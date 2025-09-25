export interface NavLink {
  label: string;
  href: string;
}

export type ButtonVariant = "contained" | "outlined";

export type Service = {
  id: string;
  icon: string;
  name: string;
  description: string;
  className?: string;
};

export type Skill = {
  icon: string;
  name: string;
  percentage: number;
  className?: string;
};

export type Expertise = {
  value: string;
  label: string;
};

export type PortfolioCategory =
  | "all"
  | "website-design"
  | "app-mobile-design"
  | "app-desktop"
  | "branding";

export type CategoryItem = {
  id: PortfolioCategory;
  name: string;
};

export type Project = {
  image: string;
  name: string;
  category: CategoryItem;
};
