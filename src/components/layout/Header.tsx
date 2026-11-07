import { useEffect, useState } from 'react';

interface Props {
  base: string;
  current: string;
  links: { href: string; label: string }[];
  waHref: string;
}

const Wa = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21l1.6-4.6A9 9 0 1 1 8 19.6L3 21z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1.5-1.5-2.5-1.5-1 1c-1.2-.5-2.5-1.8-3-3l1-1L10 7z" />
  </svg>
);

/** Navegación horizontal en desktop y menú adaptativo en mobile. */
export default function Header({ base, current, links, waHref }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isCurrent = (href: string) => {
    const path = `${base}${href}`;
    return href === '' ? current === path : current.startsWith(path);
  };

  const items = links.map((l) => (
    <a key={l.href} className="nl" href={`${base}${l.href}`} aria-current={isCurrent(l.href) ? 'page' : undefined} onClick={() => setOpen(false)}>
      {l.label}
    </a>
  ));

  return (
    <>
      <nav className="nav nav--desktop" aria-label="Principal">
        {items}
        <a className="wa" href={waHref} target="_blank" rel="noopener noreferrer"><Wa />WhatsApp</a>
      </nav>
      <a className="wa header__wa" href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Wa /><span className="header__wa-txt">WhatsApp</span></a>
      <button className="burger" type="button" aria-expanded={open} aria-controls="menu-movil" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen((o) => !o)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <nav id="menu-movil" className="nav nav--mobile" aria-label="Menú móvil">
          {items}
        </nav>
      )}
    </>
  );
}
