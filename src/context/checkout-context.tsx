"use client";

import { createContext, useContext, useState } from "react";
import { CartData } from "@/types/cart";
import { Address } from "@/types/address";

interface CheckoutContextType {
  cart: CartData | null;
  setCart: (cart: CartData) => void;
  address: Address | null;
  setAddress: (address: Address) => void;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartData | null>(null);
  const [address, setAddress] = useState<Address | null>(null);

  return (
    <CheckoutContext.Provider value={{ cart, setCart, address, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckout must be used within CheckoutProvider");
  }

  return context;
}
