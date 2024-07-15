import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";
import Contact from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Work",
    element: <Work />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <RouterProvider router={router} />

  </React.StrictMode>
);

