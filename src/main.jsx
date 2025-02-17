import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

import HomePage from "./routes/HomePage";
import ItemPage from "./routes/ItemPage";
import CategoryPage from "./routes/CategoryPage";
import AddItemPage from "./routes/AddItemPage";
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/items",
        element: <ItemPage />,
      },
      {
        path: "/categories",
        element: <CategoryPage />
      },
      {
        path: "/items/add",
        element: <AddItemPage />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);