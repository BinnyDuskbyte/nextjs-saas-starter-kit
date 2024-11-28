import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Replace with actual admin check logic
  if (session.user.email !== "admin@example.com") {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  try {
    const users = await prisma.user.findMany({
      include: { subscriptions: true },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}