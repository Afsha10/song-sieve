import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from "./AppRouter";
import { RouterProvider } from 'react-router-dom';

const router = AppRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
