import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Movies",
        element: <Movies />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global />
    <RouterProvider router={router} />
  </StrictMode>
);
