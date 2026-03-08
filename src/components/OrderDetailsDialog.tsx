"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useCheckout } from "@/context/checkout-context";

export default function OrderDetailsDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const { cart, address } = useCheckout();

  if (!cart) return null;

  const subtotal = cart.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  const total = subtotal + cart.shipping_fee - cart.discount_applied;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Order Successful 🎉</DialogTitle>
        </DialogHeader>

        {/* Cart Items */}
        <div className="space-y-3">
          {cart.cartItems.map((item) => (
            <div key={item.product_id} className="flex justify-between text-sm">
              <span>
                {item.product_name} × {item.quantity}
              </span>

              <span>₹{item.product_price * item.quantity}</span>
            </div>
          ))}
        </div>

        {/* Price Summary */}
        <div className="border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{cart.shipping_fee}</span>
          </div>

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        {/* Address */}
        {address && (
          <div className="border-t pt-4 text-sm">
            <p className="font-medium mb-1">Shipping Address</p>

            <p>{address.fullName}</p>
            <p>{address.phone}</p>
            <p>
              {address.city}, {address.state}, {address.pincode}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
