"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCheckout } from "@/context/checkout-context";
import { AddressFormData, addressSchema } from "@/schema/addressSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";

function ShippingForm() {
  const { setAddress } = useCheckout();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      pincode: "",
      city: "",
      state: "",
    },
    mode: "onSubmit",
  });

  // const [submit]

  async function onSubmit(data: AddressFormData) {
    try {
      const response = await axios.post("/api/shipping", data);

      console.log(response.data);

      if (response.data.success) {
        setAddress(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <Label>Full Name</Label>
        <Input {...register("fullName")} placeholder="Ex. John Doe" />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>
      <div>
        <Label>Email</Label>
        <Input {...register("email")} placeholder="Ex. john.doe@example.com" />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label>Phone</Label>
        <Input {...register("phone")} placeholder="Ex. 9876543210" />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <Label>PIN Code</Label>
        <Input {...register("pincode")} placeholder="Ex. 753142" />
        {errors.pincode && (
          <p className="text-red-500 text-sm">{errors.pincode.message}</p>
        )}
      </div>
      <div>
        <Label>City</Label>
        <Input {...register("city")} placeholder="Ex. Bengaluru" />
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>
      <div className="col-span-2">
        <Label>State</Label>
        <Input {...register("state")} placeholder="Ex. Karnataka" />
        {errors.state && (
          <p className="text-red-500 text-sm">{errors.state.message}</p>
        )}
      </div>
      <div className="col-span-2">
        <Button
          type="submit"
          disabled={isSubmitSuccessful || isSubmitting}
          className="w-full"
        >
          {isSubmitting
            ? "Saving Address..."
            : isSubmitSuccessful
              ? "Saved"
              : "Save Address"}
        </Button>
      </div>
    </form>
  );
}

export default ShippingForm;
