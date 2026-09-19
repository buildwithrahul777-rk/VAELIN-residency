export interface Residence {
  id: string;
  name: string;
  tagline: string;
  location: string;
  type: string;
  area: string;
  suites: number;
  baths: number;
  image: string;
  description: string;
  highlights: string[];
  specs: {
    ceilingHeight: string;
    materials: string;
    exposure: string;
    pool: string;
  };
}

export interface InteriorSpace {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface LifestyleItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  caption: string;
}
