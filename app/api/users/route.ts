import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

//Получение пользователей
export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

//Создание пользователя
export async function POST(request: NextRequest) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: body,
  });

  return NextResponse.json(user);
}
