import OrderSummary from "@/components/OrderSummary";
import PaymentMethodSelector from "@/components/PaymentMethodSelector";
import ShippingForm from "@/components/ShippingForm";

function Checkout() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>

      <div className="grid md:grid-cols-3 space-y-2 md:space-x-2">
        <div className="md:col-span-2 space-y-2">
          <div className="border p-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <ShippingForm />
          </div>

          <div className="border p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <PaymentMethodSelector />
          </div>
        </div>

        <div className="border p-6">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
