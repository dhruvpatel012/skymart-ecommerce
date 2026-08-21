import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen bg-[#0b1326] text-slate-100 font-sans antialiased">
              <Navbar />
              <main className="flex-grow">
                <AppRoutes />
              </main>
              <CartDrawer />
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
