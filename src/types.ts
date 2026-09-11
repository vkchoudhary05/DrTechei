export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  iconName: string;
  deliverables: string[];
  highlight: string;
}

export type TechCategory = 'all' | 'frontend' | 'backend' | 'cms' | 'database' | 'tools';

export interface TechnologyItem {
  name: string;
  category: TechCategory;
  description: string;
  iconType: string;
  popularFor: string;
  badgeColor?: string;
}

export type PortfolioCategory = 'all' | 'websites' | 'ecommerce' | 'cms' | 'webapps';

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  industry: string;
  technologies: string[];
  description: string;
  longDescription: string;
  results: {
    metric: string;
    label: string;
  }[];
  challenge: string;
  solution: string;
  image: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
  verified: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  websiteUrl: string;
  serviceRequired: string;
  budgetRange: string;
  projectDetails: string;
}

export interface ProjectEstimateConfig {
  projectType: string;
  scope: string;
  features: string[];
  timeline: string;
  targetBudget: string;
}

export interface EstimatedScopeAttachment {
  serviceTitle: string;
  billingModel: 'fixed' | 'hourly';
  totalEstimate: number;
  timeline: string;
  budgetCategory: string;
  selectedFeatures?: string[];
  hourlyRate?: number;
  weeklyHours?: number;
  milestones?: string;
  detailsSummary: string;
}
