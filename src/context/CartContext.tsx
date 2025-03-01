import React, { createContext } from "react";

export const CartContext = createContext(null);

type CartProviderProps = {
  children: React.ReactNode;
};

function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={null}>{children}</CartContext.Provider>;
}

export default CartProvider;
