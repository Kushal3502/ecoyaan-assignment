"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function PaymentMethodSelector() {
  return (
    <RadioGroup defaultValue="card">
      <div className="flex items-center space-x-2 border p-3">
        <RadioGroupItem value="card" id="card" />
        <Label htmlFor="card">Credit / Debit Card</Label>
      </div>

      <div className="flex items-center space-x-2 border p-3">
        <RadioGroupItem value="upi" id="upi" />
        <Label htmlFor="upi">UPI</Label>
      </div>

      <div className="flex items-center space-x-2 border p-3">
        <RadioGroupItem value="cod" id="cod" />
        <Label htmlFor="cod">Cash on Delivery</Label>
      </div>
    </RadioGroup>
  );
}
