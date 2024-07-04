import UserModel from "Helpers/models/userSignup/userSignup";
import { connectMongoDB } from "Helpers/MongoDB/MongoDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email } = await request.json();

  await connectMongoDB();

  const user = await UserModel.findOne({ email });

  return NextResponse.json({ user });

}
