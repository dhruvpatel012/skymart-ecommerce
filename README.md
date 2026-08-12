# SkyMart — Modern E-Commerce Platform

SkyMart is a high-performance frontend e-commerce web application built for learning and practical React development. Designed with a dark-first aesthetic, SkyMart features full client-side product catalog browsing, shareable URL-based filtering and pagination, a persistent cart drawer, a demo checkout pipeline, user profile management, and client-side authentication backed by `localStorage` persistence.

---

## Features

### Authentication
- User registration (`/register`)
- User login (`/login`)
- User logout with instant state synchronization
- Protected Profile route (`/profile`) via `<ProtectedRoute>`
- Session persistence across browser reloads using `localStorage`
- Profile view and in-place profile edit mode
- Duplicate email validation across registered users
- React Hook Form client-side validation
- Live password strength indicator (Weak, Medium, Strong)
- Password confirmation matching validation
- Whitespace validation preventing leading spaces and blank-space submissions

### Product Discovery
- Home page (`/`) featuring hero spotlight, stats, category shortcuts, Top Rated gear, and New Arrivals
- Full Product Catalog (`/shop`)
- Product Details page (`/products/:productId`) with breadcrumb trail and image showcase
- Real-time search query filtering across titles, categories, and descriptions
- Category filtering (`electronics`, `clothing`, `furniture`, `home`, `sports`, `accessories`)
- Catalog sorting (`featured`, `price-asc`, `price-desc`, `rating`, `newest`)
- Shareable URL-based category and search query parameters (`/shop?category=electronics`)
- URL-based pagination (`/shop?page=2`)
- Related products recommendations on detail pages
- Responsive product grid with hover animations

### Cart
- Add items to cart from cards or product detail pages
- Increase and decrease item quantities inside the cart drawer
- Remove individual items from cart
- Clear all cart items with one click
- Reactive cart item count badge in Navbar
- Automatic cart subtotal and total calculations
- Persistent cart state using `localStorage`
- Slide-over glassmorphic Cart Drawer with backdrop overlay and body scroll locking

### Checkout & Orders
- Auth-protected Checkout page (`/checkout`)
- Shipping and demo payment form fields
- React Hook Form validation with inline error messaging
- Demo order creation and persistence using `localStorage`
- Confirmation Order Success page (`/order-success/:orderId`)
- Dynamic Order ID routing
- Order persistence using `localStorage`
- Order ownership security check preventing unauthorized order viewing

### UI / UX
- Mobile-first responsive layout (320px to 4K displays)
- Dark premium theme with glassmorphic depth (`glass-panel`, `backdrop-blur-md`) and lime accents
- Non-blocking auto-dismiss Toast notifications system
- Friendly Empty States for empty cart, zero search results, invalid product IDs, and 404 pages
- Accessible controls with semantic HTML5 markup, ARIA roles, and keyboard navigation support
- Mobile hamburger navigation menu

### Other Pages
- About page (`/about`) highlighting mission, service standards, and trust metrics
- 404 Not Found page for invalid or unknown routes (`*`)

---

## Tech Stack & Dependencies

### Core Dependencies (`package.json`)

| Package | Version | Purpose |
|---|---|---|
| **React** | `^19.0.0` | Core UI component framework |
| **React DOM** | `^19.0.0` | DOM rendering engine for React |
| **Vite** | `^6.1.0` | Build tool and fast local development server |
| **JavaScript** | ES6+ | Modern client-side application logic |
| **Tailwind CSS** | `^4.0.7` | Utility-first styling framework |
| **@tailwindcss/vite** | `^4.0.7` | Vite plugin for Tailwind CSS v4 |
| **React Router DOM** | `^7.2.0` | Client-side routing and URL search param state management |
| **React Hook Form** | `^7.54.2` | Performance-focused form management and validation |
| **Lucide React** | `^0.475.0` | Modern UI icon library |
| **localStorage** | Web API | Browser client-side persistence |

*Note: Google Stitch was used solely as a design reference source. It is NOT a runtime dependency, package, or API integration in this application.*

---

## Project Structure

```text
src/
├── assets/         # Static visual assets
├── components/     # Modular UI components grouped by domain
│   ├── cart/       # CartDrawer, CartItem, CartSummary
│   ├── common/     # Button, Input, PasswordInput, FormField, FormError, Select, EmptyState, Loader, Toast, Pagination
│   ├── layout/     # Navbar, Footer
│   └── product/    # ProductCard, ProductGrid, ProductRating, ProductFilters
├── context/        # React Context providers (AuthContext, CartContext, ToastContext)
├── data/           # Static product catalog data and categories
│   ├── categories.js
│   └── products.js
├── hooks/          # Custom React hooks (useAuth, useCart, useToast)
├── pages/          # Application page views (Home, Shop, ProductDetails, Login, Register, Profile, Checkout, OrderSuccess, About, NotFound)
├── routes/         # AppRoutes definition and ProtectedRoute guard
├── utils/          # Helper utilities (storage, formatCurrency, passwordStrength, validators)
├── App.jsx         # Application root wrapper and provider assembly
├── main.jsx        # ReactDOM entry point
└── index.css       # Tailwind CSS directives and custom design tokens
```

### Major Directory Responsibilities
- **`components/`**: Reusable visual UI elements separated into domain modules (`cart`, `common`, `layout`, `product`).
- **`context/`**: Global application state providers (`AuthContext` for user sessions, `CartContext` for cart operations, `ToastContext` for notifications).
- **`data/`**: Centralized static dataset for products and category taxonomy.
- **`pages/`**: Primary route views assembled from reusable components.
- **`routes/`**: Centralized React Router definitions (`AppRoutes.jsx`) and protected route authentication guards (`ProtectedRoute`).
- **`utils/`**: Utility functions for safe `localStorage` operations (`storage.js`), currency formatting (`formatCurrency.js`), password strength scoring (`passwordStrength.js`), and whitespace form validators (`validators.js`).

---

## Application Routes

| Path | Component | Protected | Description |
|---|---|---|---|
| `/` | `Home` | No | Hero, category shortcuts, Top Rated, New Arrivals |
| `/shop` | `Shop` | No | Catalog search, category filter, sort, URL pagination |
| `/products/:productId` | `ProductDetails` | No | Detailed product view, related products |
| `/login` | `Login` | No | User login form |
| `/register` | `Register` | No | Account registration form with password strength |
| `/about` | `About` | No | Mission statement, trust metrics, service value cards |
| `/profile` | `Profile` | **Yes** | User account details, view & in-place edit mode |
| `/checkout` | `Checkout` | **Yes** | Order summary, shipping & demo payment form |
| `/order-success/:orderId` | `OrderSuccess` | **Yes** | Order confirmation screen with order summary |
| `*` | `NotFound` | No | Catch-all 404 page |

---

## Data Architecture

There is **NO external product API**, server backend, or database.

Product data is imported directly from:
```text
src/data/products.js (Static catalog of 24 items)
```

Category data is imported directly from:
```text
src/data/categories.js (6 categories)
```

### Data Pipeline Flow
```text
src/data/products.js (Static Dataset)
         │
         ▼
Home / Shop / Product Details
         │
Filtering / Searching / Sorting  (Array Methods on immutable copy)
         │
Pagination Slicing (PRODUCTS_PER_PAGE = 8)
         │
ProductGrid / ProductCard
```

### Cart Data Storage
`CartContext` stores items using minimal reference objects:
```json
[
  { "productId": 1, "quantity": 2 },
  { "productId": 3, "quantity": 1 }
]
```
Full product details (title, price, image) are dynamically resolved from `src/data/products.js` during render time, preventing data duplication.

---

## State & Persistence

Application state ownership is strictly separated by layer:

- **React Hook Form**: Owns temporary form state, dirty field tracking, and field validation.
- **AuthContext**: Owns current user session (`currentUser`) and authentication methods.
- **CartContext**: Owns global cart state (`cartItems`) and computed values (`cartCount`, `cartTotal`).
- **localStorage**: Provides durable browser persistence managed through `src/utils/storage.js`.

### localStorage Keys
All browser storage keys use the central `skymart_` prefix:
- `skymart_users`: Array of registered user objects
- `skymart_current_user`: Currently authenticated user session object
- `skymart_cart`: Array of active cart items `{ productId, quantity }`
- `skymart_orders`: Array of completed user order objects

---

## Authentication Flow

```text
Register / Login Form
         │
React Hook Form Validation (Rules & Whitespace checks)
         │
AuthContext (register / login method)
         │
utils/storage.js
         │
localStorage (skymart_users & skymart_current_user)
         │
Current User Session Updated
         │
Navbar / Protected Routes Access Granted
```

*Note: Authentication is a client-side frontend demo implementation for learning purposes and is not a replacement for server-side authentication.*

---

## Product Flow

```text
src/data/products.js
         │
       Shop
         │
   Search Input (Title/Category/Description filter)
         │
 Category Filter (All / Electronics / Clothing / etc.)
         │
   Sort Control (Featured / Price / Rating / Newest)
         │
Pagination Slicing (PRODUCTS_PER_PAGE = 8, URL ?page=)
         │
   ProductGrid
         │
   ProductCard
         │
 Product Details (/products/:productId)
         │
    CartContext
```

---

## Cart Flow

```text
ProductCard / ProductDetails ("Add to Cart" button)
         │
     useCart()
         │
    CartContext (addToCart / increaseQuantity / decreaseQuantity / removeFromCart / clearCart)
         │
  cartItems State Updated
         │
utils/storage.js (skymart_cart)
         │
localStorage
         │
Navbar Cart Badge / CartDrawer / Checkout Summary
```

*Note: `CartContext` is the single source of truth for cart operations. There is no duplicate cart state.*

---

## Pagination

Shop catalog pagination is built directly into the page architecture:

- **Items per page**: `const PRODUCTS_PER_PAGE = 8;`
- **URL Parameter**: Synchronized via `useSearchParams()` (e.g. `/shop?page=2`)
- **Execution Order**: Filtering and sorting execute **before** pagination slicing.
- **Reset Behavior**: Changing search keywords, category filters, or sort order automatically resets pagination to Page 1 (`?page=1` / parameter removed).
- **Out-of-Bound Safety**: Non-numeric or out-of-range page numbers are safely clamped to `1` or `totalPages`.
- **Responsive Controls**: Displays numerical page buttons on desktop and a compact `1 / 3` indicator on mobile viewports.

---

## Forms

React Hook Form (RHF) is used for form management and validation across `Login.jsx`, `Register.jsx`, `Profile.jsx`, and `Checkout.jsx`.

### RHF APIs Utilized
- `register()`: Binds inputs to form state with validation rules (required, pattern, minLength, custom validate functions).
- `handleSubmit()`: Validates form fields before passing clean data to submit handlers.
- `formState.errors`: Accesses inline field error messages.
- `watch()`: Watches password input values in real-time for strength calculation and password confirmation matching.
- `reset()`: Resets form values and dirty state when toggling Edit Profile or canceling edits.
- `setError()`: Manually sets server/business errors (e.g. duplicate email errors).
- `isDirty`: Tracks whether form values have been modified to enable/disable Save actions.
- `isSubmitting`: Disables submit buttons during form submission.

---

## Local Development

### Npm Scripts (`package.json`)

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `vite` | Starts local Vite development server |
| `npm run build` | `vite build` | Compiles production assets into `dist/` |
| `npm run preview` | `vite preview` | Previews production build locally |

### Installation & Setup

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## Vercel Deployment

SkyMart is configured for seamless deployment on Vercel as a Vite Single-Page Application (SPA).

### Deployment Settings
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Since SkyMart is a client-side SPA using `localStorage`, no environment variables (`.env`) or server-side API keys are required for deployment.
