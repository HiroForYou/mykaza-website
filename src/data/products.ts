import type { Product } from './types';

// Productos de DEMOSTRACIÓN. Edita este archivo para actualizar el catálogo.
// - price: null muestra "Consultar precio".
// - specifications: incluir solo datos confirmados (no inventar especificaciones técnicas).
// - image: usa una foto en /public/images/products o, si aún no hay foto, una ilustración (ILL).
const IMG = {
  recta: 'images/products/recta-industrial.png',
  mesa: 'images/products/industrial-con-mesa.png',
  brother: 'images/products/brother-js2135.png',
};
const ILL = {
  maquina: 'images/products/illus-maquina.svg',
  overlock: 'images/products/illus-overlock.svg',
  hilos: 'images/products/illus-hilos.svg',
  repuestos: 'images/products/illus-repuestos.svg',
  motor: 'images/products/illus-motor.svg',
  mesa: 'images/products/illus-mesa.svg',
  tijeras: 'images/products/illus-tijeras.svg',
  aceite: 'images/products/illus-aceite.svg',
};

type Input = Omit<Product, 'gallery' | 'featured' | 'price' | 'model'> &
  Partial<Pick<Product, 'gallery' | 'featured' | 'price' | 'model'>>;

const make = (p: Input): Product => ({
  model: 'Consultar modelo',
  featured: false,
  price: null,
  gallery: [p.image],
  ...p,
});

export const products: Product[] = [
  // ── Máquinas industriales
  make({
    id: 'p-001', slug: 'maquina-industrial-con-mesa', name: 'Máquina industrial con mesa', brand: 'juki', category: 'industriales',
    description: 'Equipo completo con mesa, pedal y porta conos.', highlight: 'Incluye mesa, pedal y porta conos',
    image: IMG.mesa, features: ['Mesa incluida', 'Pedal incluido', 'Porta conos'],
    specifications: [{ label: 'Incluye', value: 'Mesa, pedal y porta conos' }], featured: true,
  }),
  make({
    id: 'p-002', slug: 'recta-industrial-singer', name: 'Recta industrial Singer', brand: 'singer', category: 'industriales',
    description: 'Costura recta de alta velocidad para confección.', highlight: 'Resistente para producción diaria',
    image: IMG.recta, features: ['Costura recta', 'Alta velocidad', 'Para producción diaria'],
    specifications: [{ label: 'Tipo de costura', value: 'Recta' }], featured: true,
  }),
  make({
    id: 'p-003', slug: 'recta-industrial-juki', name: 'Recta industrial Juki', brand: 'juki', category: 'industriales',
    description: 'Costura recta de alta velocidad para prendas.', highlight: 'Costura recta de alta velocidad',
    image: IMG.recta, features: ['Costura recta', 'Alta velocidad', 'Para prendas'],
    specifications: [{ label: 'Tipo de costura', value: 'Recta' }],
  }),
  make({
    id: 'p-004', slug: 'recta-industrial-jack', name: 'Recta industrial Jack', brand: 'jack', category: 'industriales',
    description: 'Máquina recta para talleres de confección.', highlight: 'Costura recta para producción',
    image: ILL.maquina, features: ['Costura recta', 'Uso industrial'],
    specifications: [{ label: 'Tipo de costura', value: 'Recta' }],
  }),
  make({
    id: 'p-005', slug: 'remalladora-siruba-con-mesa', name: 'Remalladora Siruba con mesa', brand: 'siruba', category: 'industriales',
    description: 'Remate de bordes en tejidos y prendas de punto.', highlight: 'Remate de bordes en tejidos de punto',
    image: IMG.mesa, features: ['Overlock / remalladora', 'Mesa incluida'],
    specifications: [{ label: 'Tipo de costura', value: 'Remalladora (overlock)' }], featured: true,
  }),
  make({
    id: 'p-006', slug: 'overlock-industrial-juki', name: 'Overlock industrial Juki', brand: 'juki', category: 'industriales',
    description: 'Remallado y acabado de bordes para producción textil.', highlight: 'Acabado limpio de bordes',
    image: ILL.overlock, features: ['Overlock / remalladora', 'Uso industrial'],
    specifications: [{ label: 'Tipo de costura', value: 'Remalladora (overlock)' }],
  }),
  make({
    id: 'p-007', slug: 'overlock-industrial-jack', name: 'Overlock industrial Jack', brand: 'jack', category: 'industriales',
    description: 'Remalladora para prendas de punto y tejido plano.', highlight: 'Para punto y tejido plano',
    image: ILL.overlock, features: ['Overlock / remalladora', 'Uso industrial'],
    specifications: [{ label: 'Tipo de costura', value: 'Remalladora (overlock)' }],
  }),
  make({
    id: 'p-008', slug: 'recubridora-jack', name: 'Recubridora Jack', brand: 'jack', category: 'industriales',
    description: 'Dobladillos elásticos en polos y ropa deportiva.', highlight: 'Dobladillos elásticos',
    image: ILL.overlock, features: ['Recubridora', 'Para polos y ropa deportiva'],
    specifications: [{ label: 'Tipo de costura', value: 'Recubridora' }],
  }),
  make({
    id: 'p-009', slug: 'recubridora-siruba', name: 'Recubridora Siruba', brand: 'siruba', category: 'industriales',
    description: 'Recubrimiento y dobladillo para prendas de punto.', highlight: 'Recubrimiento para prendas de punto',
    image: ILL.overlock, features: ['Recubridora', 'Uso industrial'],
    specifications: [{ label: 'Tipo de costura', value: 'Recubridora' }],
  }),

  // ── Semiindustriales y domésticas
  make({
    id: 'p-010', slug: 'brother-js2135', name: 'Brother JS2135', brand: 'brother', category: 'semiindustriales', model: 'JS2135',
    description: 'Máquina semiindustrial pensada para emprendedores y hogares que quieren costura con acabado profesional.',
    highlight: 'Puntadas decorativas, de terminado y de acolchado',
    image: IMG.brother, features: ['Puntadas decorativas', 'Puntadas de terminado', 'Puntadas de acolchado'],
    specifications: [{ label: 'Tipos de puntadas', value: 'Decorativas, de terminado y de acolchado' }], featured: true,
  }),
  make({
    id: 'p-011', slug: 'semiindustrial-singer', name: 'Máquina semiindustrial Singer', brand: 'singer', category: 'semiindustriales',
    description: 'Para emprender o coser en casa con acabado profesional.', highlight: 'Ideal para emprendimientos',
    image: ILL.maquina, features: ['Uso semiindustrial', 'Para emprendedores'],
    specifications: [{ label: 'Uso', value: 'Semiindustrial' }],
  }),
  make({
    id: 'p-012', slug: 'maquina-domestica-brother', name: 'Máquina doméstica Brother', brand: 'brother', category: 'domesticas',
    description: 'Máquina para el hogar, arreglos y proyectos personales.', highlight: 'Para arreglos y proyectos en casa',
    image: ILL.maquina, features: ['Uso doméstico'],
    specifications: [{ label: 'Uso', value: 'Doméstico' }],
  }),
  make({
    id: 'p-013', slug: 'maquina-domestica-singer', name: 'Máquina doméstica Singer', brand: 'singer', category: 'domesticas',
    description: 'Máquina para el hogar, fácil de usar para empezar a coser.', highlight: 'Para empezar a coser',
    image: ILL.maquina, features: ['Uso doméstico'],
    specifications: [{ label: 'Uso', value: 'Doméstico' }],
  }),

  // ── Accesorios
  make({
    id: 'p-014', slug: 'motor-servo', name: 'Motor servo para máquina industrial', brand: null, category: 'accesorios', model: 'Según máquina',
    description: 'Motor para máquinas de coser industriales. Consulta compatibilidad con tu equipo.', highlight: 'Consulta compatibilidad con tu máquina',
    image: ILL.motor, features: ['Para máquinas industriales'],
    specifications: [{ label: 'Compatibilidad', value: 'Consultar según máquina' }],
  }),
  make({
    id: 'p-015', slug: 'mesa-para-maquina-industrial', name: 'Mesa para máquina industrial', brand: null, category: 'accesorios', model: 'Según máquina',
    description: 'Mesa con estructura metálica para montar tu máquina de coser.', highlight: 'Estructura para montar tu máquina',
    image: ILL.mesa, features: ['Para máquinas industriales'],
    specifications: [{ label: 'Compatibilidad', value: 'Consultar según máquina' }],
  }),
  make({
    id: 'p-016', slug: 'tijeras-de-sastre', name: 'Tijeras de sastre', brand: null, category: 'accesorios', model: 'Varios tamaños',
    description: 'Tijeras para corte de telas en taller o casa.', highlight: 'Para corte de telas',
    image: ILL.tijeras, features: ['Corte de telas'],
    specifications: [{ label: 'Tamaño', value: 'Consultar disponibilidad' }],
  }),

  // ── Repuestos
  make({
    id: 'p-017', slug: 'agujas-y-bobinas', name: 'Agujas y bobinas', brand: null, category: 'repuestos', model: 'Según modelo',
    description: 'Para todas las marcas. Dinos el modelo.', highlight: 'Compatibles según el modelo de tu máquina',
    image: ILL.repuestos, features: ['Para todas las marcas', 'Indícanos el modelo de tu máquina'],
    specifications: [{ label: 'Compatibilidad', value: 'Consultar según modelo' }],
  }),
  make({
    id: 'p-018', slug: 'prensatelas', name: 'Prensatelas', brand: null, category: 'repuestos', model: 'Según modelo',
    description: 'Prensatelas para máquinas rectas, overlock y domésticas.', highlight: 'Para distintos tipos de máquina',
    image: ILL.repuestos, features: ['Para distintas máquinas'],
    specifications: [{ label: 'Compatibilidad', value: 'Consultar según modelo' }],
  }),
  make({
    id: 'p-019', slug: 'repuestos-juki', name: 'Repuestos Juki', brand: 'juki', category: 'repuestos', model: 'Según modelo',
    description: 'Piezas para máquinas Juki. Envíanos el modelo de tu máquina.', highlight: 'Piezas según modelo',
    image: ILL.repuestos, features: ['Para máquinas Juki'],
    specifications: [{ label: 'Compatibilidad', value: 'Consultar según modelo' }],
  }),

  // ── Insumos
  make({
    id: 'p-020', slug: 'hilos-en-cono', name: 'Hilos en cono', brand: null, category: 'insumos', model: 'Varios colores',
    description: 'Hilos para confección en distintos colores.', highlight: 'Varios colores disponibles',
    image: ILL.hilos, features: ['Para confección'],
    specifications: [{ label: 'Colores', value: 'Consultar disponibilidad' }],
  }),
  make({
    id: 'p-021', slug: 'aceite-para-maquina-de-coser', name: 'Aceite para máquina de coser', brand: null, category: 'insumos', model: 'Presentaciones varias',
    description: 'Aceite para el mantenimiento de tu máquina de coser.', highlight: 'Para mantenimiento',
    image: ILL.aceite, features: ['Mantenimiento de máquinas'],
    specifications: [{ label: 'Presentación', value: 'Consultar disponibilidad' }],
  }),
  make({
    id: 'p-022', slug: 'agujas-industriales', name: 'Agujas industriales', brand: null, category: 'insumos', model: 'Según máquina',
    description: 'Agujas para máquinas rectas, overlock y recubridoras.', highlight: 'Según tipo de máquina y tela',
    image: ILL.repuestos, features: ['Para máquinas industriales'],
    specifications: [{ label: 'Compatibilidad', value: 'Consultar según máquina' }],
  }),
];
