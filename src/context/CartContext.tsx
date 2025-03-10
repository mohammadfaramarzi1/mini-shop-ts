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

  const addProduct = (id: number) => {
    setUserCart((prevProducts) => {
      const mainProductInCart = userCart.find((product) => product.id === id);
      if (mainProductInCart) {
        return prevProducts.map((product) => {
          if (product.id === id) {
            return { ...product, count: product.count + 1 };
          } else {
            return product;
          }
        });
      } else {
        const mainProductInShop = shop.find(
          (product) => product.id === id
        ) as Product;
        return [...prevProducts, { ...mainProductInShop, count: 1 }];
      }
    });
  };

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
