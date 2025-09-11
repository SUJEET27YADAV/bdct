import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { players } from "@/db/schema";

export async function GET() {
  try {
    const result = await db.select().from(players);
    if (!result || result.length === 0) {
      return NextResponse.json(
        {
          success: false,
          data: [],
          msg: "Error fetching data!",
          error: "Error fetching data!",
        },
        { status: 401 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        msg: "Data fetched succesfully",
        data: result,
        error: null,
      },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        success: false,
        data: [],
        msg: "Error fetching data!",
        error: `Error fetching data : ${e}`,
      },
      { status: 400 }
    );
  }
}
