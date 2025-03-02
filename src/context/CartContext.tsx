import React, { createContext, useEffect, useState } from "react";
import { Product } from "../components/Products.types";

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  userCart: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAll: () => void;
  shop: Product[];
};

export const CartContext = createContext({} as CartContextType);

function CartProvider({ children }: CartProviderProps) {
  const [userCart, setUserCart] = useState<Product[]>([]);
  const [shop, setShop] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  const addProduct = (id: number) => {};

  const removeProduct = (id: number) => {
    setUserCart((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const removeAll = () => setUserCart([]);

  return (
    <CartContext.Provider
      value={{ userCart, shop, addProduct, removeAll, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
