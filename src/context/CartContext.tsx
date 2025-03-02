import React, { createContext, useState } from "react";
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

  const addProduct = (id: number) => {};

  const removeProduct = (id: number) => {};

  const removeAll = () => {};

  return (
    <CartContext.Provider
      value={{ userCart, shop, addProduct, removeAll, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
