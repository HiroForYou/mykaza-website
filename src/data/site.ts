// Datos comerciales tomados del template de diseño. No agregar información sin confirmar.
export const site = {
  name: import.meta.env.PUBLIC_BUSINESS_NAME || 'Comercial Mykaza',
  legalName: 'My’kaza E.I.R.L.',
  ruc: '10763626186',
  tagline: 'Es tu casa…',
  description:
    'Comercial Mykaza es una empresa peruana dedicada a la comercialización de máquinas de coser, repuestos e insumos para la industria textil y el hogar.',
  // Número principal configurable por variable de entorno (PUBLIC_WHATSAPP_NUMBER)
  whatsapp: (import.meta.env.PUBLIC_WHATSAPP_NUMBER || '51965844993').replace(/\D/g, ''),
  whatsappSecondary: '51965889144',
  phones: ['965 844 993', '965 889 144'],
  stores: [
    { label: 'Tienda principal', address: 'Jr. Libertad N° 416', city: 'Ayacucho' },
    { label: 'Sucursal', address: 'Av. Cusco N° 475', city: 'San Juan Bautista, Ayacucho' },
  ],
};

export const nav = [
  { href: '', label: 'Inicio' },
  { href: 'productos/', label: 'Productos' },
  { href: 'marcas/', label: 'Marcas' },
  { href: 'nosotros/', label: 'Nosotros' },
  { href: 'contacto/', label: 'Contacto' },
];
