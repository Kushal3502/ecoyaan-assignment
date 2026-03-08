import { CartItem } from "@/types/cart";
import Image from "next/image";

function ProductCard({ cartItem }: { cartItem: CartItem }) {
  return (
    <div className="flex items-center gap-4 border rounded-xl p-4 w-full">
      {/* Product Image */}
      <div className="relative h-16 w-16 overflow-hidden rounded-md border">
        <Image
          src={
            "https://i0.wp.com/vorsap.com/wp-content/uploads/2025/03/placeholder-52.png?ssl=1"
          }
          alt={cartItem.product_name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1">
        <p className="font-medium text-sm">{cartItem.product_name}</p>

        <div className="flex gap-3 mt-2 text-sm text-muted-foreground">
          <span className="">₹{cartItem.product_price}</span>

          <span className="">Qty: {cartItem.quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
