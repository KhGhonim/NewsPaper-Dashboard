import UserPost from "Helpers/models/UserPost/UserPost";
import { MongoDB } from "Helpers/MongoDB/UserMongoDB/UserMongoDB";
import { NextResponse } from "next/server";

export async function GET(request) {
  await MongoDB();
  const data = await UserPost.find();
  return NextResponse.json(data);
}
