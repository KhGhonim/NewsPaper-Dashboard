import CommentModel from "../../../Helpers/models/Comments/Comments";
import { connectMongoDB } from "../../../Helpers/MongoDB/MongoDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { comment, title, UrlID } = await request.json();

  await connectMongoDB();

  const createdComment = await CommentModel.create({
    content: comment,
    title: title,
    postId: UrlID,
  });

  return NextResponse.json(createdComment);
}
