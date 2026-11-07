interface Props {
  brands: { slug: string; name: string; logo: string; href: string }[];
}

/** Carrusel horizontal infinito: el set se duplica y la animación recorre -50% (sin saltos). */
export default function BrandCarousel({ brands }: Props) {
  const set = (hidden: boolean) => (
    <ul className="marquee__set" aria-hidden={hidden || undefined}>
      {brands.map((b) => (
        <li key={b.slug}>
          <a className="marquee__item" href={b.href} tabIndex={hidden ? -1 : undefined} title={`Ver productos ${b.name}`}>
            <img src={b.logo} alt={hidden ? '' : b.name} height={34} loading="lazy" />
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee-wrap">
      <div className="marquee" role="group" aria-label="Marcas">
        {set(false)}
        {set(true)}
      </div>
    </div>
  );
}
