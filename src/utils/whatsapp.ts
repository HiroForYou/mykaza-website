export const waLink = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export interface WaProduct {
  name: string;
  brandName: string;
  model: string;
  pageUrl: string;
}

export const productMessage = (p: WaProduct) =>
  `Hola, estoy interesado en ${p.name}.\nMarca: ${p.brandName}\nModelo: ${p.model}\n${p.pageUrl}\n¿Podrían brindarme información sobre disponibilidad y precio?`;

export const generalMessages = {
  info: 'Hola Mykaza, quiero información',
  quote: 'Hola Mykaza, quiero solicitar una cotización',
  availability: 'Hola Mykaza, quiero consultar disponibilidad',
  machine: 'Hola Mykaza, quiero cotizar una máquina',
  parts: 'Hola Mykaza, necesito repuestos',
  brand: 'Hola Mykaza, consulta por una marca',
  otherBrand: 'Hola Mykaza, busco otra marca',
  missingModel: 'Hola Mykaza, quiero cotizar un modelo que no veo en el catálogo',
};
