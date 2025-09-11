import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { players } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const { name, age, team, contact } = await req.json();
    if (!name || !age || !team || !contact) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }
    const result = await db
      .insert(players)
      .values({ name, age: Number(age), team, contact })
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
