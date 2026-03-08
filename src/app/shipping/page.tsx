"use client";

import ShippingForm from "@/components/ShippingForm";
import { useCheckout } from "@/context/checkout-context";
import React from "react";

function Shipping() {
  const { cart } = useCheckout();

  console.log(cart);

  return (
    <div>
      <ShippingForm />
    </div>
  );
}

export default Shipping;
