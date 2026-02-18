
export interface Product {
  id: string; 
  name: string;
  brand: string;
  category: string; 
  price: number;
  rating: number;
  reviewCount: number;
  skinType: string[];
  formulation: string;
  color: string[];
  countryOfOrigin: string;
  images: string[];
  coverage?: string | null; 
}

export type CategoryResponse = Product[];

export type ProductDetailResponse = Product;