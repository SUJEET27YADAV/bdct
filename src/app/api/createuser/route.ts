import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { players } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const { category, role, name, age, email, phone, trialdate, trialslot } =
      await req.json();
    if (
      !category ||
      !role ||
      !name ||
      !age ||
      !email ||
      !phone ||
      !trialdate ||
      !trialslot
    ) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }
    const result = await db
      .insert(players)
      .values({ category, role, name, age, email, phone, trialdate, trialslot })
      .returning();
    return NextResponse.json({ player: result[0] });
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        data: [],
        msg: "Error registering user!",
        error: `Error registering user : ${e}`,
      },
      { status: 400 }
    );
  }
}
