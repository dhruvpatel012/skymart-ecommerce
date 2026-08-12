# SkyMart - Modern E-Commerce Web Application

SkyMart is a responsive, single-page e-commerce web application developed as a college portfolio project. It demonstrates modern frontend development practices using **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router v7**. The application offers a complete storefront experience including product discovery, real-time search and filtering, catalog pagination, cart drawer management, client-side user authentication, and a demo checkout flow.

---

## Project Goals

- **Modern React Architecture**: Implement reusable, component-driven UI with state managed via the React Context API.
- **Client-Side Persistence**: Store user accounts, active cart items, and completed orders using browser `localStorage`.
- **Form Management & Validation**: Build secure, validated forms for login, registration, and checkout using React Hook Form.
- **Polished UI/UX**: Design a dark-first, glassmorphism-inspired aesthetic with full responsive support across desktop and mobile devices.

---

## Key Features

### Product Catalog & Discovery
- **Storefront Home Page**: Featured hero banner, category shortcuts, top-rated products, and new arrivals.
- **Search & Filtering**: Real-time keyword search across titles and descriptions with multi-category filters.
- **Sorting & Pagination**: Sort catalog items by price, rating, or recency with URL-synchronized pagination (`?page=2`).
- **Product Detail Views**: Dedicated page (`/products/:productId`) with item specs, breadcrumbs, and related recommendations.

### Cart & Checkout System
- **Interactive Cart Drawer**: Slide-over panel with live item count badge, subtotal calculations, and quantity controls.
- **Persistent State**: Cart items stay saved in browser memory across page reloads.
- **Demo Checkout Pipeline**: Protected checkout route (`/checkout`) collecting shipping details with client-side order ID generation and confirmation receipts.

### User Authentication & Accounts
- **Account Registration & Login**: Client-side authentication with session persistence using `localStorage`.
- **Protected Routes**: Navigation guard (`ProtectedRoute`) restricting access to Profile, Checkout, and Order Success pages.
- **Profile Management**: Profile page (`/profile`) supporting in-place updates for user details.
- **Validation**: Includes duplicate email checking, live password strength meters, and whitespace input sanitization.

---

## Tech Stack & Dependencies

| Category | Technology | Purpose |
|---|---|---|
| **Core Framework** | React 19 + Vite | UI rendering engine and fast development bundler |
| **Styling** | Tailwind CSS v4 | Utility-first responsive styling and dark mode design |
| **Routing** | React Router v7 | Client-side SPA routing and URL param management |
| **Form Handling** | React Hook Form | Input state management, field validation, and error feedback |
| **Icons** | Lucide React | Modern visual icon set |
| **Persistence** | Web `localStorage` | Client-side browser data storage |

---

## Architecture & State Management

### Context API (Global State)
- `AuthContext`: Manages user authentication state (`currentUser`), login, registration, and session persistence.
- `CartContext`: Acts as the **single source of truth** for cart items, computing totals and subtotals dynamically.
- `ToastContext`: Provides non-blocking notification alerts for cart and account actions.

### Local Storage Schema
Data persistence is handled through a utility wrapper (`src/utils/storage.js`) using the `skymart_` prefix:
- `skymart_users`: Registered user account records.
- `skymart_current_user`: Active login session data.
- `skymart_cart`: Saved cart reference array (`productId` & `quantity`).
- `skymart_orders`: History of completed user orders.

---

## Application Routes

| Route | Page | Access | Description |
|---|---|---|---|
| `/` | Home | Public | Landing page with category shortcuts & spotlight items |
| `/shop` | Shop | Public | Full product catalog with search, filter, sort & pagination |
| `/products/:productId` | Product Details | Public | Product specs & related items recommendations |
| `/login` | Login | Public | User authentication login view |
| `/register` | Register | Public | New user registration form |
| `/about` | About | Public | Project overview and service info |
| `/profile` | Profile | **Protected** | User account management & profile edit mode |
| `/checkout` | Checkout | **Protected** | Shipping address and demo payment processing |
| `/order-success/:orderId` | Order Success | **Protected** | Order confirmation receipt |
| `*` | Not Found | Public | 404 fallback page |

---

## Project Structure

```text
src/
├── assets/       # Static assets and icons
├── components/   # Modular UI components (cart, layout, product, common)
├── context/      # React Context providers (AuthContext, CartContext, ToastContext)
├── data/         # Static catalog data (products.js, categories.js)
├── hooks/        # Custom React hooks (useAuth, useCart, useToast)
├── pages/        # Application route views (Home, Shop, Profile, Checkout, etc.)
├── routes/       # AppRoutes definition and ProtectedRoute guard
├── utils/        # Helpers (storage API, currency formatter, validators)
├── App.jsx       # Root provider wrapper
└── index.css     # Tailwind directives and custom CSS rules
```

---

## Local Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` package manager

### Steps to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:5173` in your browser.
