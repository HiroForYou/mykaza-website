import { useState } from 'react';

interface Props {
  images: string[];
  alt: string;
  illustration?: boolean;
}

/** Galería del detalle de producto: imagen principal + miniaturas. */
export default function Gallery({ images, alt, illustration = false }: Props) {
  const [i, setI] = useState(0);
  return (
    <div>
      <img className={`pd__main${illustration ? ' pd__main--illus' : ''}`} src={images[i]} alt={alt} width={640} height={440} />
      {images.length > 1 && (
        <div className="pd__thumbs" role="group" aria-label="Galería de imágenes">
          {images.map((src, n) => (
            <button key={src + n} type="button" className="pd__thumb" aria-current={n === i} aria-label={`Ver imagen ${n + 1}`} onClick={() => setI(n)}>
              <img src={src} alt="" width={88} height={88} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
