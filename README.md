# SkyMart — Modern E-Commerce Platform

SkyMart is a modern, responsive e-commerce platform designed to deliver a premium storefront experience. The application features complete product discovery, real-time search, category filtering, catalog sorting, URL-based pagination, a persistent cart drawer, a streamlined checkout pipeline, order confirmation, user account management, and client-side authentication. Built with a client-side architecture and browser local persistence, SkyMart combines fast interactive performance with a dark-first visual direction

---

## Product Purpose

SkyMart is designed to provide a clean, responsive, and intuitive shopping experience for users looking to discover and purchase high-quality products across multiple categories within a single unified storefront.

---

## Target Users

- **Shoppers**: Browsing curated product collections with clear pricing, ratings, and detailed specifications.
- **Comparison Shoppers**: Finding specific items quickly using real-time search, multi-category filters, and catalog sorting.
- **Customers**: Managing a shopping cart, proceeding through checkout, and tracking order receipts.
- **Account Holders**: Registering, authenticating, and updating personal account profile information.

---

## Core Features

### Product Discovery
- **Responsive Storefront**: Home page featuring hero spotlight items, trust metrics, category shortcuts, top-rated gear, and new arrivals.
- **Catalog Search & Filtering**: Full product catalog with real-time text search across titles, descriptions, and categories alongside taxonomy filtering.
- **Sorting Options**: Dynamic catalog sorting by featured items, price (ascending/descending), rating, and newest items.
- **URL State Management**: Shareable URL search parameters for categories (`?category=`), search queries (`?q=`), and pagination (`?page=`).
- **Product Details**: Dedicated product views (`/products/:productId`) with breadcrumb trails, item specs, and related product recommendations.

### Shopping Cart
- **Cart Controls**: Add items directly from catalog cards or product detail pages, adjust item quantities, remove items, or clear the cart.
- **Interactive Cart Drawer**: Glassmorphic slide-over cart drawer with backdrop overlay, body scroll locking, and live item count badge.
- **Dynamic Calculations**: Real-time updates for cart item counts, subtotals, and order totals.
- **Cart Persistence**: Cart state persists automatically across browser refreshes and sessions.

### Authentication & Account
- **Client-Side Auth**: Complete user registration, login, logout, and auth-protected route navigation.
- **Profile Management**: Dedicated account profile view (`/profile`) with in-place profile editing.
- **Form Validation**: Password strength indicators, password confirmation matching, whitespace sanitization, and duplicate email checking.

### Checkout & Orders (Demo Flow)
- **Protected Checkout**: Auth-gated checkout page (`/checkout`) with customer shipping details and demo payment fields.
- **Order Generation**: Client-side order creation generating dynamic unique order IDs.
- **Order Confirmation**: Order Success screen (`/order-success/:orderId`) with complete receipt details and order persistence.
- **Ownership Guard**: Client-side security check ensuring users can only access their own order details.

### UI & UX System
- **Dark-First Aesthetic**: Premium dark theme with glassmorphism-inspired surfaces (`backdrop-blur-md`), dark panels, and lime/emerald action accents.
- **Toast Notifications**: Non-blocking toast system providing instant user feedback for cart and account actions.
- **Responsive Layout**: Seamless cross-device experience across mobile (320px+), tablet, and desktop viewports.
- **Accessibility & UX**: Semantic HTML5 markup, ARIA roles, empty states for zero search/cart results, and full keyboard interaction support.

---

## Application Routes

| Page | Route | Access | Description |
|---|---|---|---|
| **Home** | `/` | Public | Storefront landing page, category shortcuts, featured items |
| **Shop** | `/shop` | Public | Full product catalog with search, filtering, sorting, and pagination |
| **Product Details** | `/products/:productId` | Public | Detailed product view with related recommendations |
| **Login** | `/login` | Public | User authentication entry point |
| **Register** | `/register` | Public | New user account creation |
| **About** | `/about` | Public | Mission statement, trust metrics, and service standards |
| **Profile** | `/profile` | **Protected** | User account management and profile edit mode |
| **Checkout** | `/checkout` | **Protected** | Shipping address and demo payment processing |
| **Order Success** | `/order-success/:orderId` | **Protected** | Order confirmation summary and receipt view |
| **404 Not Found** | `*` | Public | Fallback route for invalid or missing URLs |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Core component-based UI framework |
| **Vite** | Local development server and production build bundler |
| **JavaScript (ES6+)** | Core client-side application logic and state processing |
| **Tailwind CSS** | Utility-first CSS styling framework |
| **React Router** | Client-side routing, protected route guards, and URL parameter sync |
| **React Hook Form** | Performance-focused form state, field validation, and error tracking |
| **Lucide React** | Modern UI icon library |
| **localStorage** | Web API for client-side browser persistence |

*Google Stitch was used as a visual design reference during UI development and is not a runtime dependency or API integration in the application.*

---

## Architecture

SkyMart follows a modular client-side application architecture:

- **UI Layer**: Reusable React components organized by domain (`components/cart`, `components/product`, `components/common`, `components/layout`).
- **State Management**: React Context API providers (`AuthContext`, `CartContext`, `ToastContext`) handle global application state.
  - **CartContext** acts as the **SINGLE SOURCE OF TRUTH** for all cart operations, computing totals dynamically without duplicate state storage.
- **Forms & Validation**: React Hook Form manages local form state, input validation, and dirty field tracking across authentication and checkout views.
- **Routing**: React Router manages client-side SPA routes, protected route authentication checks (`ProtectedRoute`), and URL query parameters.
- **Data & Persistence**: Centralized static datasets supply catalog information, while a storage utility (`utils/storage.js`) manages browser `localStorage` operations.

---

## Product Data

SkyMart currently does **not** use an external product API or backend database service.

- **Product Catalog**: Static dataset of 24 items stored in `src/data/products.js`.
- **Category Taxonomy**: Category taxonomy and metadata stored in `src/data/categories.js`.

### Data Flow Overview

```text
src/data/products.js → Home / Shop / ProductDetails → Search / Filter / Sort → Pagination → ProductGrid
```

---

## Browser Persistence

All application state persistence is handled client-side using browser `localStorage` under a unified `skymart_` prefix:

- `skymart_users`: Array of registered user account records.
- `skymart_current_user`: Currently authenticated user session object.
- `skymart_cart`: Active cart item reference array (`productId` and `quantity`).
- `skymart_orders`: Completed user order history records.

---

## Forms & Validation

Form processing across Login, Register, Profile, and Checkout is powered by React Hook Form:

- **Validation Rules**: Required fields, email regex patterns, and minimum length requirements.
- **Real-Time Input Checks**: Password strength calculation (Weak, Medium, Strong) and password confirmation matching.
- **Whitespace Sanitization**: Custom validation rules preventing leading whitespace or space-only input submissions.
- **User Feedback**: Inline error messaging and responsive submit button states (`isSubmitting`, `isDirty`).

---

## Pagination

The Shop catalog (`/shop`) features URL-synchronized catalog pagination:

- **Page Capacity**: Fixed at 8 products per page (`PRODUCTS_PER_PAGE = 8`).
- **Execution Pipeline**: Search query filtering and category sorting execute **before** pagination slicing.
- **URL Synchronization**: Page state stays synchronized with URL search params (`?page=2`). Modifying search keywords or filters automatically resets navigation to Page 1.
- **Responsive Controls**: Displays full numeric page links on desktop and compact page navigation on mobile viewports.

---

## Responsive & Visual System

SkyMart implements a cohesive dark-first visual direction:

- **Visual Theme**: Dark background surfaces paired with glassmorphism-inspired elements (`backdrop-blur-md`, semi-transparent borders) and lime/emerald action accents.
- **Responsive Breakpoints**: Optimized for mobile (320px+), tablet, and desktop displays.
- **Adaptive Components**: Includes a mobile hamburger menu, slide-over cart drawer, and adaptive multi-column product grids.

---

## Getting Started

### Prerequisites

Ensure [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` are installed.

### Installation & Development

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` to view the storefront.
