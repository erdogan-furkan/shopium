import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default router;
