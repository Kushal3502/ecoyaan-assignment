"use client";

import { useCheckout } from "@/context/checkout-context";
import { Button } from "@/components/ui/button";
import OrderDetailsDialog from "@/components/OrderDetailsDialog";
import { useState } from "react";

export default function OrderSummary() {
  const { cart } = useCheckout();

  const [isProcessing, setIsProcessing] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  if (!cart) {
    return (
      <div className="border rounded-xl p-6 text-sm text-muted-foreground">
        Cart is empty
      </div>
    );
  }

  const subtotal = cart.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  const itemCount = cart.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const total = subtotal + cart.shipping_fee - cart.discount_applied;

  async function handlePay() {
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsProcessing(false);
    setOpenDialog(true);
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Order Summary</h2>

      <div className="flex justify-between text-sm">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Shipping</span>
        <span>₹{cart.shipping_fee}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Discount</span>
        <span>₹{cart.discount_applied}</span>
      </div>

      <div className="border-t pt-3 flex justify-between font-semibold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <Button
        onClick={handlePay}
        disabled={isProcessing}
        className="w-full h-11 text-base"
      >
        {isProcessing ? "Processing Payment..." : "Pay Securely"}
      </Button>

      <OrderDetailsDialog open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
}
