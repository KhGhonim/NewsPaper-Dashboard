import CommentModel from "Helpers/models/Comments/Comments";
import { MongoDB } from "Helpers/MongoDB/UserMongoDB/UserMongoDB";
import { NextResponse } from "next/server";

export async function GET(request) {
  const postId = request.nextUrl.searchParams.get("postId");

  if (!postId) {
    return NextResponse.json({ error: "postId is required" }, { status: 400 });
  }

  await MongoDB();
  const data = await CommentModel.find({ postId }).sort({
    createdAt: -1,
  });

  return NextResponse.json(data);
}
