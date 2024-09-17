import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "./GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Shows from "./Pages/Shows";

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
      {
        path: "/Shows",
        element: <Shows />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Global />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
