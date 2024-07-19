import CommentModel from "Helpers/models/Comments/Comments";
import { connectMongoDB } from "Helpers/MongoDB/MongoDB";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
    console.log(id);

  await connectMongoDB();
  const deletedComment = await CommentModel.findByIdAndDelete(id);

  return NextResponse.json(deletedComment);
}
