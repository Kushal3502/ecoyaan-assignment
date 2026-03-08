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

  const subTotal = cartData.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  const total = subTotal + cartData.shipping_fee - cartData.discount_applied;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-8">Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT SIDE → PRODUCTS */}
        <div className="md:col-span-2 space-y-4">
          {cartData.cartItems.map((item) => (
            <ProductCard key={item.product_id} cartItem={item} />
          ))}
        </div>

        {/* RIGHT SIDE → ORDER SUMMARY */}
        <div className="border rounded-xl p-6 h-fit space-y-4 shadow-sm">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          <div className="flex justify-between text-sm">
            <span>Total Items</span>
            <span>{cartData.cartItems.length}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{subTotal}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Discount</span>
            <span>₹{cartData.discount_applied}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Delivery Fee</span>
            <span>₹{cartData.shipping_fee}</span>
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
