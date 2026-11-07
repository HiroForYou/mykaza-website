import type { Category } from './types';

export const categories: Category[] = [
  { slug: 'industriales', name: 'Máquinas industriales', short: 'Industriales', description: 'Rectas, remalladoras y recubridoras para producir todos los días.' },
  { slug: 'semiindustriales', name: 'Máquinas semiindustriales', short: 'Semiindustriales', description: 'Para emprender o coser en casa con acabado profesional.' },
  { slug: 'domesticas', name: 'Máquinas domésticas', short: 'Domésticas', description: 'Máquinas para el hogar y proyectos personales.' },
  { slug: 'repuestos', name: 'Repuestos', short: 'Repuestos', description: 'Todo para que tu máquina no pare. Dinos el modelo.' },
  { slug: 'accesorios', name: 'Accesorios', short: 'Accesorios', description: 'Motores, mesas y complementos para tu máquina de coser.' },
  { slug: 'insumos', name: 'Insumos textiles', short: 'Insumos', description: 'Hilos, aceite y materiales para confección.' },
];
