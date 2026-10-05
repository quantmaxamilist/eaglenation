# Redirects — old WordPress URLs → new site

The live site (https://eaglenation.co.uk) is WordPress + WooCommerce. Every URL it has
exposed (from its `wp-sitemap.xml` and the Wayback Machine CDX index, checked
2026-10-05) is either kept as-is or 301-redirected below.

Two layers are shipped:

1. `public/_redirects` — real **301**s on Netlify / Cloudflare Pages (preferred).
2. `redirects` in `astro.config.mjs` — instant-redirect stub pages for any static host.
   These can't express wildcards, so only the exact URLs below get stubs.

## Kept unchanged (same URL, new page)

| URL | Page |
| --- | --- |
| `/` | About Us (home) |
| `/sport/` | Sport |
| `/music/` | Music |
| `/social-activity/` | Social activities |
| `/shop/` | Shop |
| `/coaching-and-mentoring/` | Coaching and Mentoring |
| `/assistance-and-support/` | Assistance and Support |
| `/leisure-and-youth/` | Leisure and Youth |
| `/education-training-and-empowering/` | Education, Training, and Empowering |
| `/terms-conditions/` | Terms & conditions |
| `/privacy-policy/` | Privacy Policy |

## Moved

| Old URL | New URL | Why |
| --- | --- | --- |
| `/contact-2/` | `/contact/` | Clean slug |
| `/produit/oversized-heavyweight-hoodie/` | `/shop/oversized-heavyweight-hoodie/` | Products now live under /shop/ |
| `/produit/oversized-heavyweight-t-shirt/` | `/shop/oversized-heavyweight-t-shirt/` | 〃 |
| `/produit/unisex-hoodie/` | `/shop/unisex-hoodie/` | 〃 |
| `/produit/unisex-hoodie-2/` | `/shop/unisex-hoodie-2/` | 〃 |
| `/produit/aluminium-water-bottle-2/` | `/shop/aluminium-water-bottle/` | 〃 |
| `/produit/*` (≈60 older products) | `/shop/` | No longer sold |
| `/categorie-produit/*` | `/shop/` | Category pages not rebuilt (5 products) |
| `/shop/page/*` | `/shop/` | Pagination not needed |
| `/panier/`, `/commander/`, `/mon-compte/` | `/shop/` | WooCommerce cart / checkout / account |
| `/page-d-exemple/` | `/` | WordPress French sample page |
| `/politique-de-confidentialite/` | `/privacy-policy/` | WordPress default privacy stub |
| `/author/*`, `/home_slider/*`, `/feed/` | `/` | WordPress internals |
| `/wp-sitemap*.xml` | `/sitemap-index.xml` | New sitemap |

## nginx equivalent

```nginx
location = /contact-2/ { return 301 /contact/; }
location = /page-d-exemple/ { return 301 /; }
location = /politique-de-confidentialite/ { return 301 /privacy-policy/; }
location ~ ^/(panier|commander|mon-compte)(/.*)?$ { return 301 /shop/; }
location ~ ^/(author|home_slider)/ { return 301 /; }
location ~ ^/feed(/.*)?$ { return 301 /; }
location ~ ^/wp-sitemap.*\.xml$ { return 301 /sitemap-index.xml; }
location ~ ^/shop/page/ { return 301 /shop/; }
location ~ ^/categorie-produit/ { return 301 /shop/; }
location = /produit/oversized-heavyweight-hoodie/ { return 301 /shop/oversized-heavyweight-hoodie/; }
location = /produit/oversized-heavyweight-t-shirt/ { return 301 /shop/oversized-heavyweight-t-shirt/; }
location = /produit/unisex-hoodie/ { return 301 /shop/unisex-hoodie/; }
location = /produit/unisex-hoodie-2/ { return 301 /shop/unisex-hoodie-2/; }
location = /produit/aluminium-water-bottle-2/ { return 301 /shop/aluminium-water-bottle/; }
location ~ ^/produit/ { return 301 /shop/; }
```

## Before switching the domain

The shop's "Select options & buy" buttons currently link to the product pages on the
**existing** WooCommerce store (`/produit/...`). Once the domain points at this static
site those URLs redirect back to the new product pages, so a new checkout (e.g. Shopify
Buy Button, Stripe Payment Links, or the print-on-demand supplier's own storefront) must
be wired into `buyUrl` in `src/data/site.ts` first.
