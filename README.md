# Comercial Mykaza – Web

Catálogo web de Comercial Mykaza (My’kaza E.I.R.L.): máquinas de coser, repuestos e insumos. Sin carrito ni pagos: las consultas se hacen por WhatsApp.

- Stack: Astro + React + TypeScript, generación estática.
- Sitio: https://hiroforyou.github.io/mykaza-website/

## Desarrollo

```bash
pnpm install
cp .env.example .env   # ajusta los valores si hace falta
pnpm dev               # http://localhost:4321/mykaza-website/
pnpm check             # TypeScript / astro check
pnpm build             # genera dist/
```

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp principal (formato internacional, sin `+`). |
| `PUBLIC_SITE_URL` | Dominio del sitio, sin la ruta del repositorio. |
| `PUBLIC_BUSINESS_NAME` | Nombre comercial. |

## Contenido

Productos, marcas y categorías están en `src/data/`. Los productos son datos de demostración: edita `src/data/products.ts` para cambiar el catálogo. Las imágenes van en `public/images/products/`.

La carpeta `template/` guarda el diseño original de referencia y no se modifica.

## Despliegue (GitHub Pages)

El workflow `.github/workflows/deploy.yml` se ejecuta en cada push a `main`: instala con pnpm, valida, compila y publica `dist/` en la rama `gh-pages`.

Configuración única en GitHub: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / root**.

Opcional: define `PUBLIC_WHATSAPP_NUMBER` en **Settings → Secrets and variables → Actions → Variables**.
