# SkyMart — Visual Design System & Reusable UI Rules

This document establishes the visual design system, UI guidelines, and Tailwind CSS rules for SkyMart. It serves as the visual source of truth extracted from the Google Stitch project (`SkyMart`) and reference screenshots.

---

## 1. Visual Identity & Aesthetic

* **Theme:** Dark-First / Premium Modern E-Commerce
* **Style:** High-contrast dark surfaces with subtle glassmorphism (`backdrop-blur-md`), razor-sharp borders, and dynamic accent CTAs.
* **Mood:** Professional, sleek, technological, and luminescent. Depth is built via surface layering and subtle outlines rather than heavy drop shadows.

---

## 2. Color Palette & Utility Mappings

### Core Surfaces & Backgrounds
* **Canvas / Deep Background:** `#020617` / `#0b1326` (`bg-slate-950` or `bg-[#0b1326]`)
* **Base Surface / Containers:** `#131b2e` / `#171f33` (`bg-slate-900` or `bg-slate-900/80`)
* **Elevated Surface / Cards:** `#222a3d` / `#2d3449` (`bg-slate-800/60`)
* **Glass Container:** `rgba(30, 41, 59, 0.7)` with `backdrop-blur-md` (`bg-slate-900/70 backdrop-blur-md`)
* **Borders:** `rgba(255, 255, 255, 0.08)` / `#334155` (`border-white/10` or `border-slate-800`)

### Brand Accents & Actions
* **Primary Accent / Main CTA (Lime / Emerald):** `#a3e635` / `#10b981` (`bg-lime-400 text-slate-950 hover:bg-lime-300` or `bg-emerald-500`)
* **Secondary Brand Accent (Cyan / Electric Blue):** `#06b6d4` / `#6366f1` (`text-cyan-400` / `bg-indigo-600`)
* **Interactive Focus / Glow:** `ring-lime-400` or `ring-indigo-500`

### Text & Contrast Hierarchy
* **Primary Text:** High-contrast white `#F8FAFC` (`text-slate-100` / `text-white`)
* **Secondary / Muted Text:** `#94A3B8` (`text-slate-400`)
* **Disabled / Subdued Text:** `#64748B` (`text-slate-500`)

### Status & Feedback
* **Success:** `#10B981` (`emerald-500`)
* **Warning:** `#F59E0B` (`amber-500`)
* **Error / Sale / Danger:** `#F43F5E` / `#EF4444` (`rose-500` / `red-500`)

---

## 3. Typography System

| Style | Font Family | Size | Weight | Line Height | Tailwind Classes |
|---|---|---|---|---|---|
| **Display / Hero** | Hanken Grotesk / Sans | 48px (3rem) | Bold (700) | 1.1 | `text-4xl lg:text-5xl font-bold tracking-tight leading-tight` |
| **Headline LG** | Hanken Grotesk / Sans | 32px (2rem) | SemiBold (600) | 1.2 | `text-2xl lg:text-3xl font-semibold tracking-tight` |
| **Headline MD** | Hanken Grotesk / Sans | 24px (1.5rem) | SemiBold (600) | 1.3 | `text-xl lg:text-2xl font-semibold` |
| **Body LG** | Inter / Sans | 18px (1.125rem) | Regular (400) | 1.6 | `text-lg text-slate-300 leading-relaxed` |
| **Body MD** | Inter / Sans | 16px (1rem) | Regular (400) | 1.5 | `text-base text-slate-300 leading-normal` |
| **Body SM** | Inter / Sans | 14px (0.875rem) | Regular (400) | 1.5 | `text-sm text-slate-400` |
| **Label Caps** | Geist / Sans | 12px (0.75rem) | SemiBold (600) | 1.0 | `text-xs uppercase tracking-wider font-semibold text-slate-400` |
| **Button Text** | Geist / Inter | 14px (0.875rem) | Medium (500) | 1.0 | `text-sm font-medium` |

---

## 4. Layout & Responsive Grid Rules

* **Max Width Container:** 1280px (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
* **Grid Breakpoints & Columns:**
  * Mobile (`< 640px`): 1 column grid (`grid-cols-1`)
  * Tablet (`640px - 1024px`): 2–3 column grid (`sm:grid-cols-2 lg:grid-cols-3`)
  * Wide Desktop (`1024px+`): 4–5 column product grid (`lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5`)
* **Spacing Scale:**
  * Section gap: `py-12 lg:py-20` (80px vertical section breathing room)
  * Grid gap: `gap-6` (24px)
  * Card padding: `p-4` or `p-6`
  * Inline elements gap: `gap-2` to `gap-4`

---

## 5. Reusable Component Visual Specifications

### 5.1 Navbar
* **Position:** `sticky top-0 z-50`
* **Style:** `bg-[#0b1326]/80 backdrop-blur-md border-b border-white/10`
* **Elements:**
  * Logo: `SkyMart` with accent color badge or bold lime/indigo highlight
  * Nav Links: `text-slate-300 hover:text-white transition-colors duration-150`
  * Cart Icon: Relative container with vibrant count badge (`bg-lime-400 text-slate-950 font-bold text-xs rounded-full h-5 w-5 flex items-center justify-center`)
  * User Menu: Avatar circle or text CTA ("Sign In")

### 5.2 Cards & Surfaces
* **Standard Container:** `bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm`
* **Hover Card Effect:** `hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200`

### 5.3 Buttons
* **Primary CTA:**
  ```html
  bg-lime-400 text-slate-950 hover:bg-lime-300 font-semibold px-5 py-2.5 rounded-lg transition-all duration-150 active:scale-[0.98] shadow-md shadow-lime-400/10
  ```
* **Secondary Button:**
  ```html
  bg-slate-800/60 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 font-medium px-4 py-2 rounded-lg transition-all duration-150
  ```
* **Ghost / Icon Button:**
  ```html
  text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 p-2 rounded-lg transition-colors
  ```

### 5.4 Form Inputs & Controls
* **Field Style:** `bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all`
* **Password Strength Meter:** 3-bar indicator
  * Segment 1 (Weak): `bg-rose-500`
  * Segment 2 (Medium): `bg-amber-500`
  * Segment 3 (Strong): `bg-lime-400` or `bg-emerald-500`

### 5.5 Product Card Pattern
* **Structure:**
  * Aspect-ratio image container (`aspect-square` or `aspect-4/3`) with subtle zoom on hover (`group-hover:scale-105 transition-transform duration-300`)
  * Category Chip: `text-xs uppercase tracking-wider text-slate-400`
  * Title: `font-semibold text-slate-100 line-clamp-1`
  * Rating Row: Amber star icon + numerical score `4.8` + muted review count `(124)`
  * Footer Row: Price in bold white (`$99.99`) + compact Add-to-Cart button

### 5.6 Cart Drawer (Slide-Over Panel)
* **Overlay Backdrop:** `fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50`
* **Panel Container:** `fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-[#0b1326] border-l border-slate-800 shadow-2xl flex flex-col`
* **Empty Cart State:** Centered cart icon in slate container, `Cart is empty` title, secondary description, `Browse Products` primary CTA button.
* **Populated State:** Scrollable item list (`flex-1 overflow-y-auto p-4 space-y-4`), summary footer with Subtotal/Total, `Checkout` primary CTA, `Clear Cart` secondary button.

---

## 6. Interaction & Motion Rules

* **Hover States:** Fast smooth transitions (`duration-150 ease-in-out`).
* **Active Press:** Micro scale-down (`active:scale-[0.98]`) for tactile feedback.
* **Focus States:** High contrast focus rings for accessibility (`focus:ring-2 focus:ring-lime-400 focus:outline-none`).
* **Empty / Error States:** Always provide clear recovery action buttons (e.g., "Clear Filters", "Browse Products", "Back to Shop").
