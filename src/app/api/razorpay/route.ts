import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { z } from "zod";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const orderSchema = z.object({
  amount: z.number().positive(),
  currency: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = orderSchema.parse(json);
    
    const options = {
      amount: body.amount,
      currency: body.currency,
      receipt: `receipt_order_${new Date().getTime()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}