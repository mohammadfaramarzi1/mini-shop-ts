import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";
import "./App.css";
import CartProvider from "./context/CartContext";

function App() {
  const router = useRoutes(routes);

  return (
    <CartProvider>
      <Header />
      {router}
    </CartProvider>
  );
}

export default App;
