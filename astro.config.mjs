import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Variables desde .env (local); las del entorno (GitHub Actions) tienen prioridad.
const fileEnv = existsSync('.env')
  ? Object.fromEntries(
      readFileSync('.env', 'utf8')
        .split(/\r?\n/)
        .map((line) => line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/))
        .filter(Boolean)
        .map((m) => [m[1], m[2].replace(/^['"]|['"]$/g, '')])
    )
  : {};
const env = (key) => process.env[key] || fileEnv[key];

// GitHub Pages: https://hiroforyou.github.io/mykaza-website/
const site = env('PUBLIC_SITE_URL') || 'https://hiroforyou.github.io';
const base = env('PUBLIC_BASE_PATH') ?? '/mykaza-website';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
});
