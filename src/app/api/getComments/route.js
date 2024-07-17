import CommentModel from "Helpers/models/Comments/Comments";
import { MongoDB } from "Helpers/MongoDB/UserMongoDB/UserMongoDB";
import { NextResponse } from "next/server";

export async function GET(request) {
  await MongoDB();
  const data = await CommentModel.find();
  return NextResponse.json(data);
}
