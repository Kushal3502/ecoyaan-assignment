"use client";

import { Button } from "@/components/ui/button";
import { useCheckout } from "@/context/checkout-context";
import { CartData } from "@/types/cart";
import { useRouter } from "next/navigation";

function CheckoutButton({ cart }: { cart: CartData }) {
  const router = useRouter();

  const { setCart } = useCheckout();

  function handleClick() {
    setCart(cart);
    router.push("/checkout");
  }

  return (
    <Button onClick={handleClick} className="w-full mt-4">
      Proceed to Checkout
    </Button>
  );
}

export default CheckoutButton;
