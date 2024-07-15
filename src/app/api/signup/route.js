import { connectMongoDB } from "../../../Helpers/MongoDB/MongoDB";
import UserModel from "../../../Helpers/models/userSignup/userSignup";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const objFromFrontEnd = await request.json();
  await connectMongoDB();

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(objFromFrontEnd.password, salt);

  await UserModel.create({
    email: objFromFrontEnd.email,
    password: hashedPassword,
    confirmPassword: hashedPassword,
    name: objFromFrontEnd.name,
  });

  return NextResponse.json({});
}
