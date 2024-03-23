type Tag = "new" | "bestseller";

type Specification = {
  speed: number;
  productName: string;
  typeP: string;
  power: number;
  charge: number;
  frontBrake: string;
  cruise: string;
  power1: number;
  power2: number;
  charge1: number;
  frontBrake1: string;
  cruise1: string;
  power3: number;
  charge2: number;
  frontBrake2: string;
  cruise2: string;
  frontBrake3: string;
};

type Description = {
  title: string;
  content: string;
};

type ProductType = {
  waterproof: boolean;
  tags: Tag[];
  image: string[];
  description: Description;
  specification: Specification;
  price: number;
  sale: number;
  name: string;
  overallRates: number;
  ratesCount: number;
};

export { type ProductType, type Tag };
