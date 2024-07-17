import CommentModel from "../../../Helpers/models/Comments/Comments";
import { connectMongoDB } from "../../../Helpers/MongoDB/MongoDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { comment, title } = await request.json();

  await connectMongoDB();

  const addedComment = await CommentModel.create({
    content: comment,
    title: title,
  });

  return NextResponse.json({ addedComment });
}
