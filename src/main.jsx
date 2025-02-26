import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

import HomePage from "./routes/HomePage";
import ItemPage from "./routes/ItemPage";
import CategoryPage from "./routes/CategoryPage";
import AddItemPage from "./routes/AddItemPage";
import AddCategoryPage from "./routes/AddCategoryPage";
import { CategoryProvider } from "./hooks/useCategory";
import { ItemsProvider } from "./hooks/useItems";
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/*
let uint8
const test = async () => {
  const response = await fetch("http://localhost:3000/items/test", {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  console.log(response);
  const blob = await response.blob();
  uint8 = URL.createObjectURL(blob);
  console.log(blob);
};

test();
*/
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
      },
      {
        path: "/categories/add",
        element: <AddCategoryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <ItemsProvider>
        <RouterProvider router={router} />
      </ItemsProvider>
    </CategoryProvider>
  </StrictMode>,
);