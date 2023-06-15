import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

import { router } from './Routers';
import './index.css';
import { AppThemeProvider } from './components/AppThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          <RouterProvider router={router} />
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
