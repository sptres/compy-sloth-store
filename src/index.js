import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-p0f7h8iolhyfe0sj.us.auth0.com
// hpjwHQVrEJTPe7GMBOhZSBfWzK0sZyJm

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-p0f7h8iolhyfe0sj.us.auth0.com"
    clientId="hpjwHQVrEJTPe7GMBOhZSBfWzK0sZyJm"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
