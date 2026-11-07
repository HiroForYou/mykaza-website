import { useEffect, useMemo, useState } from 'react';

export interface CatalogProduct {
  id: string;
  slug: string;
  name: string;
  model: string;
  description: string;
  highlight: string;
  brand: string;
  brandName: string;
  category: string;
  categoryName: string;
  image: string;
  illustration: boolean;
  href: string;
  pageUrl: string;
  price: number | null;
}

interface Props {
  products: CatalogProduct[];
  brands: { slug: string; name: string }[];
  categories: { slug: string; short: string }[];
  /** En páginas de categoría el filtro de categoría queda fijo y se oculta */
  lockCategory?: boolean;
}

type Sort = 'name' | 'brand' | 'category';
const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function Catalog({ products, brands, categories, lockCategory = false }: Props) {
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [sort, setSort] = useState<Sort>('name');

  // Estado inicial desde la URL (?q= &categoria= &marca= &orden=)
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    if (sp.get('q')) setQ(sp.get('q')!);
    if (!lockCategory && sp.get('categoria')) setCategory(sp.get('categoria')!);
    if (sp.get('marca')) setBrand(sp.get('marca')!);
    const o = sp.get('orden');
    if (o === 'name' || o === 'brand' || o === 'category') setSort(o);
  }, [lockCategory]);

  useEffect(() => {
    const sp = new URLSearchParams();
    if (q) sp.set('q', q);
    if (category) sp.set('categoria', category);
    if (brand) sp.set('marca', brand);
    if (sort !== 'name') sp.set('orden', sort);
    const qs = sp.toString();
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`);
  }, [q, category, brand, sort]);

  const list = useMemo(() => {
    const nq = norm(q.trim());
    const out = products.filter((p) => {
      if (category && p.category !== category) return false;
      if (brand && p.brand !== brand) return false;
      if (!nq) return true;
      return norm(`${p.name} ${p.brandName} ${p.categoryName} ${p.model}`).includes(nq);
    });
    const key = (p: CatalogProduct) => (sort === 'brand' ? p.brandName : sort === 'category' ? p.categoryName : p.name);
    return [...out].sort((a, b) => key(a).localeCompare(key(b), 'es') || a.name.localeCompare(b.name, 'es'));
  }, [products, q, category, brand, sort]);

  const cats = categories.filter((c) => products.some((p) => p.category === c.slug));
  const brs = brands.filter((b) => products.some((p) => p.brand === b.slug));
  const active = Boolean(q || brand || category);
  const clear = () => { setQ(''); setBrand(''); setCategory(''); };

  return (
    <div className="stack" style={{ gap: 20 }}>
      <div className={`toolbar${lockCategory ? ' toolbar--3' : ''}`} role="search">
        <div className="search-wrap">
          <label className="sr-only" htmlFor="buscar">Buscar productos</label>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          <input id="buscar" className="field" type="search" placeholder="Buscar por nombre, marca o modelo" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        {!lockCategory && (
          <div>
            <label className="sr-only" htmlFor="f-cat">Categoría</label>
            <select id="f-cat" className="field" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Categoría</option>
              {cats.map((c) => <option key={c.slug} value={c.slug}>{c.short}</option>)}
            </select>
          </div>
        )}
        <div>
          <label className="sr-only" htmlFor="f-marca">Marca</label>
          <select id="f-marca" className="field" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">Marca</option>
            {brs.map((b) => <option key={b.slug} value={b.slug}>{b.name}</option>)}
          </select>
        </div>
      </div>

      <div className="status">
        <span aria-live="polite">
          {list.length} {list.length === 1 ? 'producto' : 'productos'}
          {active && <> · <button type="button" className="clear" onClick={clear}>Limpiar filtros</button></>}
        </span>
        <span className="sort">
          <label htmlFor="orden">Ordenar por</label>
          <select id="orden" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="name">Nombre</option>
            <option value="brand">Marca</option>
            <option value="category">Categoría</option>
          </select>
        </span>
      </div>

      {list.length === 0 ? (
        <div className="empty">
          <h3 className="h" style={{ fontSize: 22 }}>No encontramos productos con esos filtros</h3>
          <p>Prueba con otra búsqueda o limpia los filtros.</p>
          <button type="button" className="ol" onClick={clear}>Limpiar filtros</button>
        </div>
      ) : (
        <div className="g">
          {list.map((p) => (
            <article className="c pcard" key={p.id}>
              <img className={`im${p.illustration ? ' im--illus' : ''}`} src={p.image} alt={p.name} width={400} height={220} loading="lazy" decoding="async" />
              <div className="cb">
                <div className="pcard__top"><span className="tag">{p.categoryName}</span><span>{p.brandName}</span></div>
                <h3 className="h pcard__title"><a href={p.href}>{p.name}</a></h3>
                <p className="pcard__desc">{p.description}</p>
                <p className="pcard__meta">{p.highlight} · Modelo: {p.model}</p>
                <div className="pcard__foot">
                  <span className="price">{p.price ? `S/ ${p.price}` : 'Consultar precio'}</span>
                  <span className="pcard__more" aria-hidden="true">Ver detalle →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
