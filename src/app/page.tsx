import CheckoutButton from "@/components/CheckoutButton";
import ProductCard from "@/components/ProductCard";
import { headers } from "next/headers";
import { CartData } from "../types/cart";

async function getCartData(): Promise<CartData> {
  const host = (await headers()).get("host");

  const response = await fetch(`http://${host}/api/cart`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  return response.json();
}

export default async function Cart() {
  const cartData = await getCartData();

  const subtotal = cartData.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  const itemCount = cartData.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const total = subtotal + cartData.shipping_fee - cartData.discount_applied;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="md:col-span-2 space-y-4">
          <div className="border p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Items in your cart</h2>

            <div className="space-y-1">
              {cartData.cartItems.map((item) => (
                <ProductCard key={item.product_id} cartItem={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="border p-6 shadow-sm h-fit space-y-4">
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
            <span>₹{cartData.shipping_fee}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Discount</span>
            <span>₹{cartData.discount_applied}</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <CheckoutButton cart={cartData} />
        </div>
      </div>
    </div>
  );
}
