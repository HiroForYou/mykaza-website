export interface Brand {
  slug: string;
  name: string;
  logo: string; // ruta relativa a /public
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  short: string; // nombre corto para filtros y chips
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string | null; // Brand.slug, o null para productos de varias marcas / genéricos
  category: string; // Category.slug
  model: string;
  description: string;
  highlight: string; // característica principal
  image: string; // ruta relativa a /public (foto real o ilustración SVG)
  gallery: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  featured: boolean;
  price: number | null; // null => "Consultar precio"
}
