import { products } from '../data/products';
import { brands } from '../data/brands';
import { categories } from '../data/categories';
import type { Product } from '../data/types';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Ruta interna respetando el `base` de GitHub Pages. */
export const url = (path = '') => `${base}${path.replace(/^\//, '')}`;

/** URL absoluta (para mensajes de WhatsApp y SEO). */
export const absUrl = (path = '') =>
  new URL(url(path), import.meta.env.SITE || 'https://usuario.github.io').href;

export const getBrand = (slug: string | null) => brands.find((b) => b.slug === slug);
export const brandName = (slug: string | null) => getBrand(slug)?.name ?? 'Varias marcas';
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)!;
export const isIllustration = (src: string) => src.endsWith('.svg');

export const related = (p: Product, n = 3) => {
  const same = products.filter((x) => x.id !== p.id && x.category === p.category);
  const brand = products.filter((x) => x.id !== p.id && p.brand && x.brand === p.brand && !same.includes(x));
  const rest = products.filter((x) => x.id !== p.id && !same.includes(x) && !brand.includes(x));
  return [...same, ...brand, ...rest].slice(0, n);
};

/** Producto serializable para componentes React (resuelve marca, categoría y URLs). */
export const toCard = (p: Product) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  model: p.model,
  description: p.description,
  highlight: p.highlight,
  brand: p.brand ?? '',
  brandName: brandName(p.brand),
  category: p.category,
  categoryName: getCategory(p.category).short,
  image: url(p.image),
  illustration: isIllustration(p.image),
  href: url(`productos/${p.slug}/`),
  pageUrl: absUrl(`productos/${p.slug}/`),
  price: p.price,
});
export type ProductCardData = ReturnType<typeof toCard>;
