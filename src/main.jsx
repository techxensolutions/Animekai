import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './layouts/App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { FiltersProvider } from './context/FiltersContext.jsx'
import ToastProvider from './providers/ToastProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <FiltersProvider>
        <>
          <ToastProvider />
          <RouterProvider router={router} />
        </>
      </FiltersProvider>
    </Provider>
  </StrictMode>
);
