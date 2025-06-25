import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart-context.jsx';
import { Wishlist } from './pages/WishList/index.jsx';
import { WishlistProvider } from './context/wishlist-context.jsx';
import { LoginProvider } from './context/login-context.jsx';

//reportWebVitals(console.log); // Logs performance metrics in console


ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </WishlistProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
