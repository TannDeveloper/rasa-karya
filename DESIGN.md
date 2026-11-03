# DESIGN.md -- RasaKarya

<!-- extraction-meta
source: Figma file "RasaKarya"
scope: 1 page(s)
date: 2026-11-03
nodes-scanned: 3949
generator: figma-cli extract
-->

> **Structure trees auto-split** (~64k tokens — too large for one AI context): per-page trees are in `DESIGN-structure/`. Use `--no-split` to force a single file.

## 1. Identity

**In one line:** A design system using Plus Jakarta Sans, Playfair Display, Manrope with 36 unique colors extracted directly from Figma.

**Signature Techniques:**
- Consistent auto-layout spacing system
- Component library with 5 variants across 1 component sets

## 2. Color

### Palette

| Token | Hex | Usage count |
|---|---|---|
| text-secondary | `#50453c` | 294 |
| background | `#ffffff` | 215 |
| accent | `#603d1a` | 182 |
| accent-alt | `#28180a` | 174 |
| accent-3 | `#8f4e00` | 88 |
| background-alt | `#fff8f5` | 78 |
| surface | `#fff1e9` | 65 |
| accent-4 | `#fea047` | 49 |
| accent-5 | `#ffeadc` | 45 |
| text-tertiary | `#82756a` | 29 |
| accent-6 | `#d4c3b7` | 24 |
| accent-7 | `#7b542f` | 22 |
| accent-8 | `#6d3a00` | 19 |
| accent-9 | `#6e2d0a` | 18 |
| text-secondary-alt | `#54433c` | 18 |
| accent-10 | `#ffe3cf` | 14 |
| text-tertiary-alt | `#9a8e80` | 14 |
| accent-11 | `#ffdcc2` | 9 |
| text-primary | `#000000` | 9 |
| accent-12 | `#ffcb9f` | 8 |
| accent-13 | `#e5a853` | 8 |
| surface-alt | `#fff1eb` | 8 |
| text-primary-alt | `#1e1e1e` | 6 |
| accent-14 | `#7d562f` | 6 |
| border | `#9ca3af` | 5 |
| border-alt | `#d0c3b2` | 4 |
| surface-3 | `#d9d9d9` | 3 |
| accent-15 | `#613e00` | 2 |
| accent-16 | `#3f2c1d` | 1 |
| accent-17 | `#ffede2` | 1 |
| accent-18 | `#ffdcc0` | 1 |
| background-3 | `#fdf6f3` | 1 |
| background-4 | `#fff8f4` | 1 |
| text-tertiary-3 | `#858585` | 1 |
| border-3 | `#ababab` | 1 |
| accent-19 | `#8a38f5` | 1 |

## 3. Variables

_no local variables found — this file has no variable collections, the palette above is sampled from raw fills_

## 4. Typography

### Fonts

- Plus Jakarta Sans
- Playfair Display
- Manrope

### Scale

| Token | Family | Size | Weight | Line height |
|---|---|---|---|---|
| display | Playfair Display | 64px | 700 | 64px |
| display-2 | Plus Jakarta Sans | 56px | 700 | 64px |
| display-3 | Playfair Display | 46px | 700 | auto |
| display-4 | Plus Jakarta Sans | 46px | 700 | auto |
| display-5 | Plus Jakarta Sans | 40px | 700 | 48px |
| display-6 | Plus Jakarta Sans | 40px | 700 | 48px |
| display-7 | Plus Jakarta Sans | 40px | 700 | 50px |
| display-8 | Playfair Display | 40px | 700 | 48px |
| display-9 | Playfair Display | 40px | 700 | 50px |
| display-10 | Playfair Display | 40px | 700 | 48px |
| display-11 | Plus Jakarta Sans | 36px | 700 | 44px |
| h1 | Plus Jakarta Sans | 28px | 600 | 36px |
| h1-2 | Playfair Display | 28px | 600 | 36px |
| h1-3 | Plus Jakarta Sans | 28px | 700 | 36px |
| h2 | Plus Jakarta Sans | 24px | 800 | auto |
| h2-2 | Plus Jakarta Sans | 24px | 600 | 26px |
| h2-3 | Plus Jakarta Sans | 24px | 600 | 14px |
| h3 | Plus Jakarta Sans | 22px | 300 | auto |
| h3-2 | Plus Jakarta Sans | 22px | 700 | 30px |
| h4 | Plus Jakarta Sans | 20px | 400 | 29.25px |
| h4-2 | Plus Jakarta Sans | 20px | 600 | 14px |
| h5 | Plus Jakarta Sans | 19px | 600 | 26px |
| h6 | Plus Jakarta Sans | 18px | 700 | 26px |
| h6-2 | Plus Jakarta Sans | 18px | 600 | 26px |
| h6-3 | Plus Jakarta Sans | 18px | 600 | 26px |
| h6-4 | Plus Jakarta Sans | 18px | 400 | 28px |
| h6-5 | Plus Jakarta Sans | 18px | 400 | 29.25px |
| h6-6 | Plus Jakarta Sans | 18px | 600 | 26px |
| body-lg | Plus Jakarta Sans | 17px | 600 | 24px |
| body-lg-2 | Plus Jakarta Sans | 16px | 600 | 24px |
| body-lg-3 | Plus Jakarta Sans | 16px | 400 | 22px |
| body-lg-4 | Plus Jakarta Sans | 16px | 600 | 14px |
| body-lg-5 | Plus Jakarta Sans | 16px | 600 | 20px |
| body-lg-6 | Plus Jakarta Sans | 16px | 600 | 20px |
| body | Plus Jakarta Sans | 15px | 400 | 24px |
| body-2 | Plus Jakarta Sans | 15px | 400 | 24.3799991607666px |
| body-3 | Plus Jakarta Sans | 15px | 700 | 14px |
| body-4 | Plus Jakarta Sans | 15px | 400 | 14px |
| body-5 | Plus Jakarta Sans | 15px | 400 | auto |
| body-6 | Plus Jakarta Sans | 15px | 400 | 24px |
| body-7 | Plus Jakarta Sans | 15px | 600 | 24px |
| body-8 | Plus Jakarta Sans | 14px | 400 | 20px |
| body-9 | Plus Jakarta Sans | 14px | 600 | 20px |
| body-10 | Plus Jakarta Sans | 14px | 600 | 20px |
| body-11 | Plus Jakarta Sans | 14px | 600 | 16px |
| body-12 | Plus Jakarta Sans | 14px | 600 | auto |
| body-13 | Plus Jakarta Sans | 14px | 400 | 21.1299991607666px |
| body-14 | Plus Jakarta Sans | 14px | 600 | 24px |
| body-15 | Plus Jakarta Sans | 14px | 700 | 20px |
| body-16 | Manrope | 14px | 600 | auto |
| body-17 | Plus Jakarta Sans | 14px | 400 | 24px |
| body-18 | Plus Jakarta Sans | 13px | 400 | 20px |
| body-19 | Plus Jakarta Sans | 13px | 600 | 20px |
| body-20 | Plus Jakarta Sans | 13px | 400 | 21.1299991607666px |
| body-21 | Plus Jakarta Sans | 13px | 400 | 16.25px |
| body-22 | Plus Jakarta Sans | 13px | 300 | auto |
| caption | Plus Jakarta Sans | 12px | 600 | 16px |
| caption-2 | Plus Jakarta Sans | 12px | 700 | 16px |
| caption-3 | Plus Jakarta Sans | 12px | 600 | 16px |
| caption-4 | Plus Jakarta Sans | 12px | 400 | 16px |
| caption-5 | Plus Jakarta Sans | 12px | 700 | 16px |
| caption-6 | Plus Jakarta Sans | 12px | 600 | 14px |
| caption-7 | Plus Jakarta Sans | 11px | 600 | 14px |
| caption-8 | Plus Jakarta Sans | 11px | 600 | 14px |
| caption-9 | Plus Jakarta Sans | 11px | 700 | 14px |
| caption-10 | Plus Jakarta Sans | 11px | 600 | 14px |
| caption-11 | Plus Jakarta Sans | 11px | 700 | 14px |
| caption-12 | Plus Jakarta Sans | 11px | 600 | 14px |

## 5. Spacing & Layout

### Base Unit

2px

### Border Radius

| Token | Value |
|---|---|
| radius-sm | 4px |
| radius-md | 5px |
| radius-lg | 6px |
| radius-lg-2 | 8px |
| radius-lg-3 | 12px |
| radius-lg-4 | 15px |
| radius-lg-5 | 16px |
| radius-lg-6 | 18px |
| radius-lg-7 | 20px |
| radius-lg-8 | 24px |
| radius-lg-9 | 30px |
| radius-lg-10 | 50px |
| radius-lg-11 | 52px |
| radius-lg-12 | 100px |
| radius-full | 9999px |

## 6. Depth & Motion

### Elevation

- 0px 1px 2px 0px #000000 @ 5% (used 62×)
- 0px 2px 4px -2px #000000 @ 10% (used 43×)
- 0px 4px 6px -1px #000000 @ 10% (used 43×)
- 0px 4px 14px 0px #d9822b @ 28% (used 17×)
- BACKGROUND_BLUR blur 12px (used 15×)
- BACKGROUND_BLUR blur 4px (used 14×)
- 0px 4px 4px 0px #000000 @ 25% (used 8×)
- inset 0px 2px 4px 0px #000000 @ 5% (used 7×)
- LAYER_BLUR blur 64px (used 6×)
- LAYER_BLUR blur 10.899999618530273px (used 6×)
- 0px -1px 12px 0px #2c1a0e @ 3% (used 5×)
- 0px 1px 8px 0px #2c1a0e @ 4% (used 5×)
- BACKGROUND_BLUR blur 24px (used 5×)
- 0px 0px 0px 2px #7b542f @ 20% (used 5×)
- 0px 4px 14px 0px #d9822b @ 35% (used 5×)
- 0px 4px 6px -4px #000000 @ 10% (used 4×)
- 0px 10px 15px -3px #000000 @ 10% (used 4×)
- 0px 4px 16px -2px #2c1a0e @ 5% (used 3×)
- LAYER_BLUR blur 1px (used 3×)
- 0px 8px 10px -6px #000000 @ 10% (used 2×)
- 0px 20px 25px -5px #000000 @ 10% (used 2×)
- 0px 4px 4px 0px #999999 @ 25% (used 2×)
- LAYER_BLUR blur 4px (used 2×)
- LAYER_BLUR blur 40px (used 1×)
- 0px 4px 16px 0px #d9822b @ 35% (used 1×)
- 0px 16px 40px 0px #2c1a0e @ 9% (used 1×)
- 0px 12px 32px 0px #2c1a0e @ 8% (used 1×)
- 0px 25px 50px -12px #000000 @ 25% (used 1×)
- inset 0px 4px 60px 0px #fff0e7 @ 100% (used 1×)
- LAYER_BLUR blur 2px (used 1×)

## 7. Components

### navigation bar

Page: Page 1 · 5 variants

Reuse: import existing — key `ff63b429406264c2ded65673f0909d13c02b243a` · node `205:107`

_no variant properties_

Sample variant structure:

- **Property 1=Default** · `COMPONENT` · 1347×48 · 3 children
  - **Group 1** · `GROUP` · 560×48 · 5 children
    - **Rectangle 3** · `RECTANGLE` · 560×48
    - **Beranda** · `GROUP` · 106×40 · 2 children
      - **Rectangle 4** · `RECTANGLE` · 106×40
      - **Tentang Kami** · `TEXT` · 95×24 · “Tentang Kami”
    - **Beranda** · `TEXT` · 64×24 · “Beranda”
    - **Produk & Pemesanan** · `TEXT` · 150×24 · “Produk & Pemesanan”
    - **Kerja Sama Mitra** · `TEXT` · 119×24 · “Kerja Sama Mitra”
  - **Rasakarya title** · `GROUP` · 154×40 · 3 children
    - **ARTISANAL BAKERY** · `TEXT` · 114×14 · “ARTISANAL BAKERY”
    - **Rasa Karya** · `TEXT` · 91×26 · “Rasa Karya”
    - **Logo Rasa Karya** · `FRAME` · 32×32
  - **Group 5** · `GROUP` · 204×44 · 5 children
    - **Fikri 2025** · `TEXT` · 59×16 · “Fikri 2025”
    - **Selamat Datang,** · `TEXT` · 95×14 · “Selamat Datang,”
    - **Group 4** · `GROUP` · 46×44 · 2 children
      - **Group 3** · `GROUP` · 40×40 · 2 children
        - **Rectangle 5** · `RECTANGLE` · 40×40
        - **Icon** · `VECTOR` · 13×17
      - **Group 2** · `GROUP` · 20×20 · 2 children
        - **Rectangle 6** · `RECTANGLE` · 20×20
        - **3** · `TEXT` · 7×14 · “3”
    - **Rectangle 7** · `RECTANGLE` · 1×30
    - **nukukmizhuwd 1** · `RECTANGLE` · 32×32

## 8. States

State tokens should be derived from the base palette above. Recommended mappings:

| State | Treatment |
|-------|-----------|
| Hover | Lighten/darken accent by 10% |
| Focus | 2px ring using accent color with 30% opacity |
| Disabled | 40% opacity, no pointer events |
| Error | Use danger color for border and text |

## 9. Rules

### Do

- Use the 2px base unit for all spacing decisions
- Use `#603d1a` (accent) as the primary accent color
- Bind colors to the tokens below instead of hardcoding hex values

### Don't

- Introduce new colors without adding them to the palette
- Mix corner radii outside the radius scale

## 10. Extending this system

### How to reuse this DESIGN.md

Import into Figma with `figma-cli import <this file>` — colors, radii and typography become variables.

### When to add a new token vs reuse

Reuse the closest existing token; add a new one only when a new semantic role appears.

## 11. Machine-readable tokens

The block below is the canonical token map. It mirrors the tables above but is unambiguous and parseable.

```json design-tokens
{
  "$schema": "design-tokens.v1",
  "meta": {
    "source": "RasaKarya",
    "generated": "2026-11-03"
  },
  "color": {
    "text-secondary": "#50453c",
    "background": "#ffffff",
    "accent": "#603d1a",
    "accent-alt": "#28180a",
    "accent-3": "#8f4e00",
    "background-alt": "#fff8f5",
    "surface": "#fff1e9",
    "accent-4": "#fea047",
    "accent-5": "#ffeadc",
    "text-tertiary": "#82756a",
    "accent-6": "#d4c3b7",
    "accent-7": "#7b542f",
    "accent-8": "#6d3a00",
    "accent-9": "#6e2d0a",
    "text-secondary-alt": "#54433c",
    "accent-10": "#ffe3cf",
    "text-tertiary-alt": "#9a8e80",
    "accent-11": "#ffdcc2",
    "text-primary": "#000000",
    "accent-12": "#ffcb9f",
    "accent-13": "#e5a853",
    "surface-alt": "#fff1eb",
    "text-primary-alt": "#1e1e1e",
    "accent-14": "#7d562f",
    "border": "#9ca3af",
    "border-alt": "#d0c3b2",
    "surface-3": "#d9d9d9",
    "accent-15": "#613e00",
    "accent-16": "#3f2c1d",
    "accent-17": "#ffede2",
    "accent-18": "#ffdcc0",
    "background-3": "#fdf6f3",
    "background-4": "#fff8f4",
    "text-tertiary-3": "#858585",
    "border-3": "#ababab",
    "accent-19": "#8a38f5"
  },
  "typography": {
    "display": {
      "fontFamily": "Playfair Display",
      "fontSize": 64,
      "fontWeight": 700,
      "lineHeight": 64,
      "letterSpacing": -1.6799999475479126
    },
    "display-2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 56,
      "fontWeight": 700,
      "lineHeight": 64,
      "letterSpacing": -1.6799999475479126
    },
    "display-3": {
      "fontFamily": "Playfair Display",
      "fontSize": 46,
      "fontWeight": 700,
      "letterSpacing": -2
    },
    "display-4": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 46,
      "fontWeight": 700,
      "letterSpacing": -2
    },
    "display-5": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 40,
      "fontWeight": 700,
      "lineHeight": 48,
      "letterSpacing": -0.800000011920929
    },
    "display-6": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 40,
      "fontWeight": 700,
      "lineHeight": 48,
      "letterSpacing": -1
    },
    "display-7": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 40,
      "fontWeight": 700,
      "lineHeight": 50,
      "letterSpacing": -0.800000011920929
    },
    "display-8": {
      "fontFamily": "Playfair Display",
      "fontSize": 40,
      "fontWeight": 700,
      "lineHeight": 48,
      "letterSpacing": -0.800000011920929
    },
    "display-9": {
      "fontFamily": "Playfair Display",
      "fontSize": 40,
      "fontWeight": 700,
      "lineHeight": 50,
      "letterSpacing": -0.800000011920929
    },
    "display-10": {
      "fontFamily": "Playfair Display",
      "fontSize": 40,
      "fontWeight": 700,
      "lineHeight": 48,
      "letterSpacing": -1
    },
    "display-11": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 36,
      "fontWeight": 700,
      "lineHeight": 44,
      "letterSpacing": -0.7200000286102295
    },
    "h1": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 28,
      "fontWeight": 600,
      "lineHeight": 36,
      "letterSpacing": -0.41999998688697815
    },
    "h1-2": {
      "fontFamily": "Playfair Display",
      "fontSize": 28,
      "fontWeight": 600,
      "lineHeight": 36,
      "letterSpacing": -0.41999998688697815
    },
    "h1-3": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 28,
      "fontWeight": 700,
      "lineHeight": 36,
      "letterSpacing": -0.41999998688697815
    },
    "h2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 24,
      "fontWeight": 800
    },
    "h2-2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 24,
      "fontWeight": 600,
      "lineHeight": 26,
      "letterSpacing": -0.44999998807907104
    },
    "h2-3": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 24,
      "fontWeight": 600,
      "lineHeight": 14
    },
    "h3": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 22,
      "fontWeight": 300,
      "letterSpacing": -2
    },
    "h3-2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 22,
      "fontWeight": 700,
      "lineHeight": 30,
      "letterSpacing": -0.2199999988079071
    },
    "h4": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 20,
      "fontWeight": 400,
      "lineHeight": 29.25
    },
    "h4-2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 20,
      "fontWeight": 600,
      "lineHeight": 14
    },
    "h5": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 19,
      "fontWeight": 600,
      "lineHeight": 26
    },
    "h6": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 18,
      "fontWeight": 700,
      "lineHeight": 26
    },
    "h6-2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 18,
      "fontWeight": 600,
      "lineHeight": 26
    },
    "h6-3": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 18,
      "fontWeight": 600,
      "lineHeight": 26,
      "letterSpacing": -0.44999998807907104
    },
    "h6-4": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 18,
      "fontWeight": 400,
      "lineHeight": 28
    },
    "h6-5": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 18,
      "fontWeight": 400,
      "lineHeight": 29.25
    },
    "h6-6": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 18,
      "fontWeight": 600,
      "lineHeight": 26,
      "letterSpacing": -0.7200000286102295
    },
    "body-lg": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 17,
      "fontWeight": 600,
      "lineHeight": 24
    },
    "body-lg-2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 16,
      "fontWeight": 600,
      "lineHeight": 24
    },
    "body-lg-3": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 16,
      "fontWeight": 400,
      "lineHeight": 22
    },
    "body-lg-4": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 16,
      "fontWeight": 600,
      "lineHeight": 14
    },
    "body-lg-5": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 16,
      "fontWeight": 600,
      "lineHeight": 20
    },
    "body-lg-6": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 16,
      "fontWeight": 600,
      "lineHeight": 20,
      "letterSpacing": 0.14000000059604645
    },
    "body": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 15,
      "fontWeight": 400,
      "lineHeight": 24
    },
    "body-2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 15,
      "fontWeight": 400,
      "lineHeight": 24.3799991607666
    },
    "body-3": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 15,
      "fontWeight": 700,
      "lineHeight": 14
    },
    "body-4": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 15,
      "fontWeight": 400,
      "lineHeight": 14
    },
    "body-5": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 15,
      "fontWeight": 400
    },
    "body-6": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 15,
      "fontWeight": 400,
      "lineHeight": 24
    },
    "body-7": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 15,
      "fontWeight": 600,
      "lineHeight": 24
    },
    "body-8": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 20
    },
    "body-9": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 600,
      "lineHeight": 20,
      "letterSpacing": 0.14000000059604645
    },
    "body-10": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 600,
      "lineHeight": 20
    },
    "body-11": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 600,
      "lineHeight": 16,
      "letterSpacing": 0.23999999463558197
    },
    "body-12": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 600,
      "letterSpacing": -2
    },
    "body-13": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 21.1299991607666
    },
    "body-14": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 600,
      "lineHeight": 24
    },
    "body-15": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 700,
      "lineHeight": 20,
      "letterSpacing": 0.14000000059604645
    },
    "body-16": {
      "fontFamily": "Manrope",
      "fontSize": 14,
      "fontWeight": 600,
      "letterSpacing": -2
    },
    "body-17": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 24
    },
    "body-18": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 13,
      "fontWeight": 400,
      "lineHeight": 20
    },
    "body-19": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 13,
      "fontWeight": 600,
      "lineHeight": 20
    },
    "body-20": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 13,
      "fontWeight": 400,
      "lineHeight": 21.1299991607666
    },
    "body-21": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 13,
      "fontWeight": 400,
      "lineHeight": 16.25
    },
    "body-22": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 13,
      "fontWeight": 300,
      "letterSpacing": -2
    },
    "caption": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 12,
      "fontWeight": 600,
      "lineHeight": 16,
      "letterSpacing": 0.23999999463558197
    },
    "caption-2": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 12,
      "fontWeight": 700,
      "lineHeight": 16,
      "letterSpacing": 0.6000000238418579
    },
    "caption-3": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 12,
      "fontWeight": 600,
      "lineHeight": 16,
      "letterSpacing": 0.6000000238418579
    },
    "caption-4": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 12,
      "fontWeight": 400,
      "lineHeight": 16,
      "letterSpacing": 0.23999999463558197
    },
    "caption-5": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 12,
      "fontWeight": 700,
      "lineHeight": 16,
      "letterSpacing": 0.23999999463558197
    },
    "caption-6": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 12,
      "fontWeight": 600,
      "lineHeight": 14,
      "letterSpacing": 0.550000011920929
    },
    "caption-7": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 11,
      "fontWeight": 600,
      "lineHeight": 14,
      "letterSpacing": 0.4399999976158142
    },
    "caption-8": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 11,
      "fontWeight": 600,
      "lineHeight": 14,
      "letterSpacing": 0.550000011920929
    },
    "caption-9": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 11,
      "fontWeight": 700,
      "lineHeight": 14,
      "letterSpacing": 0.4399999976158142
    },
    "caption-10": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 11,
      "fontWeight": 600,
      "lineHeight": 14,
      "letterSpacing": 0.6600000262260437
    },
    "caption-11": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 11,
      "fontWeight": 700,
      "lineHeight": 14,
      "letterSpacing": 0.550000011920929
    },
    "caption-12": {
      "fontFamily": "Plus Jakarta Sans",
      "fontSize": 11,
      "fontWeight": 600,
      "lineHeight": 14,
      "letterSpacing": 0.2750000059604645
    }
  },
  "spacing": {
    "base-unit": 2
  },
  "radius": {
    "radius-sm": "4px",
    "radius-md": "5px",
    "radius-lg": "6px",
    "radius-lg-2": "8px",
    "radius-lg-3": "12px",
    "radius-lg-4": "15px",
    "radius-lg-5": "16px",
    "radius-lg-6": "18px",
    "radius-lg-7": "20px",
    "radius-lg-8": "24px",
    "radius-lg-9": "30px",
    "radius-lg-10": "50px",
    "radius-lg-11": "52px",
    "radius-lg-12": "100px",
    "radius-full": "9999px"
  },
  "shadow": {
    "shadow-1": "0px 1px 2px 0px #0000000d",
    "shadow-2": "0px 2px 4px -2px #0000001a",
    "shadow-3": "0px 4px 6px -1px #0000001a",
    "shadow-4": "0px 4px 14px 0px #d9822b47",
    "shadow-5": "0px 4px 4px 0px #00000040",
    "shadow-6": "inset 0px 2px 4px 0px #0000000d",
    "shadow-7": "0px -1px 12px 0px #2c1a0e08",
    "shadow-8": "0px 1px 8px 0px #2c1a0e0a",
    "shadow-9": "0px 0px 0px 2px #7b542f33",
    "shadow-10": "0px 4px 14px 0px #d9822b59",
    "shadow-11": "0px 4px 6px -4px #0000001a",
    "shadow-12": "0px 10px 15px -3px #0000001a",
    "shadow-13": "0px 4px 16px -2px #2c1a0e0d",
    "shadow-14": "0px 8px 10px -6px #0000001a",
    "shadow-15": "0px 20px 25px -5px #0000001a",
    "shadow-16": "0px 4px 4px 0px #99999940",
    "shadow-17": "0px 4px 16px 0px #d9822b59",
    "shadow-18": "0px 16px 40px 0px #2c1a0e17",
    "shadow-19": "0px 12px 32px 0px #2c1a0e14",
    "shadow-20": "0px 25px 50px -12px #00000040",
    "shadow-21": "inset 0px 4px 60px 0px #fff0e7"
  },
  "fonts": [
    "Plus Jakarta Sans",
    "Playfair Display",
    "Manrope"
  ]
}
```
