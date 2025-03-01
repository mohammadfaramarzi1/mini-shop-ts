import Cart from "./components/Cart";
import Home from "./pages/Home/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
