import { Address } from "@/types/address";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload: Address = await req.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json({
    success: true,
    data: payload,
    message: "Shipping address added successfully",
  });
}
