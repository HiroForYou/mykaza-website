import type { Brand } from './types';

// Marcas del template. Datos de demostración: no implica representación oficial ni distribución autorizada.
// Logos: Juki, Brother y Singer desde Wikimedia Commons; Siruba y Jack desde sus sitios oficiales.
export const brands: Brand[] = [
  { slug: 'juki', name: 'Juki', logo: 'images/brands/juki.svg', description: 'Máquinas y repuestos Juki disponibles en tienda. Consulta modelos y disponibilidad.' },
  { slug: 'siruba', name: 'Siruba', logo: 'images/brands/siruba.svg', description: 'Máquinas y repuestos Siruba disponibles en tienda. Consulta modelos y disponibilidad.' },
  { slug: 'jack', name: 'Jack', logo: 'images/brands/jack.png', description: 'Máquinas y repuestos Jack disponibles en tienda. Consulta modelos y disponibilidad.' },
  { slug: 'singer', name: 'Singer', logo: 'images/brands/singer.png', description: 'Máquinas y repuestos Singer disponibles en tienda. Consulta modelos y disponibilidad.' },
  { slug: 'brother', name: 'Brother', logo: 'images/brands/brother.svg', description: 'Máquinas y repuestos Brother disponibles en tienda. Consulta modelos y disponibilidad.' },
];
