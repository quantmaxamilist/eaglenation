// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live WordPress site serves https://eaglenation.co.uk (no www) with trailing
// slashes on every URL (…/sport/). Keep both so no indexed URL changes form.
const SITE = 'https://eaglenation.co.uk';

// Old WordPress URLs that have moved or were never real content. Static builds emit
// an instant-redirect page for each; real 301s live in public/_redirects (Netlify /
// Cloudflare) and REDIRECTS.md has the nginx equivalent. _redirects also covers the
// wildcard patterns that can't be expressed here.
const shopMoves = {
  '/produit/oversized-heavyweight-hoodie': '/shop/oversized-heavyweight-hoodie/',
  '/produit/oversized-heavyweight-t-shirt': '/shop/oversized-heavyweight-t-shirt/',
  '/produit/unisex-hoodie': '/shop/unisex-hoodie/',
  '/produit/unisex-hoodie-2': '/shop/unisex-hoodie-2/',
  '/produit/aluminium-water-bottle-2': '/shop/aluminium-water-bottle/',
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
  redirects: {
    '/contact-2': '/contact/',
    // WordPress / WooCommerce defaults (French install) — never real content.
    '/page-d-exemple': '/',
    '/politique-de-confidentialite': '/privacy-policy/',
    '/panier': '/shop/',
    '/commander': '/shop/',
    '/mon-compte': '/shop/',
    '/author/admin': '/',
    '/home_slider/auto-draft': '/',
    '/home_slider/auto-draft-2': '/',
    '/home_slider/auto-draft-3': '/',
    // Product categories
    '/categorie-produit/men': '/shop/',
    '/categorie-produit/women': '/shop/',
    '/categorie-produit/accessories': '/shop/',
    '/categorie-produit/kids': '/shop/',
    '/categorie-produit/non-classe': '/shop/',
    ...shopMoves,
  },
  server: { port: 4335 },
});
