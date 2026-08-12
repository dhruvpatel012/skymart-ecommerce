# SkyMart — E-Commerce Web Application

SkyMart is a full-featured frontend e-commerce web application developed as a college portfolio project. It provides a complete online shopping experience with product discovery, category filtering, search, sorting, cart management, user authentication, and a demo checkout workflow.

---

## 🚀 Key Features

- **Product Discovery**: Browse products with real-time search, category filters, sorting (price, rating, newest), and URL pagination.
- **Product Details**: Individual product views with specs and related item recommendations.
- **Shopping Cart**: Slide-over cart drawer, quantity updates, item removal, and persistent cart state.
- **Authentication**: User registration, login, logout, and profile edit functionality using `localStorage`.
- **Demo Checkout & Orders**: Auth-protected checkout form, dynamic order creation, and order confirmation receipt.
- **Modern UI/UX**: Dark-mode design system with glassmorphism styling, responsive layout, and toast notifications.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Lucide React Icons
- **Routing**: React Router v7
- **Form Handling**: React Hook Form
- **State Management**: React Context API (`AuthContext`, `CartContext`, `ToastContext`)
- **Data & Persistence**: Local static data (`src/data/products.js`) and Browser `localStorage`

---

## 📂 Project Structure

```text
src/
├── components/   # Reusable UI components (cart, layout, product, common)
├── context/      # Context providers for Auth, Cart, and Toast notifications
├── data/         # Static product catalog and category datasets
├── hooks/        # Custom React hooks (useAuth, useCart, useToast)
├── pages/        # Route page components (Home, Shop, Details, Checkout, etc.)
├── routes/       # React Router setup & ProtectedRoute guard
└── utils/        # Utility helpers (localStorage wrapper, validators, formatters)
```

---

## 🗺️ Application Routes

| Route | Page | Access | Description |
|---|---|---|---|
| `/` | Home | Public | Hero banner, categories & featured items |
| `/shop` | Shop | Public | Catalog with search, filter, sort & pagination |
| `/products/:productId` | Product Details | Public | Product overview & recommendations |
| `/login` | Login | Public | User login form |
| `/register` | Register | Public | New account registration |
| `/about` | About | Public | Project info & service details |
| `/profile` | Profile | Protected | User profile details & edit mode |
| `/checkout` | Checkout | Protected | Order shipping & payment form |
| `/order-success/:orderId` | Order Success | Protected | Order receipt confirmation |

---

## 💻 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18+) installed.

### Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in Browser:**
   Navigate to `http://localhost:5173` to run the project.

