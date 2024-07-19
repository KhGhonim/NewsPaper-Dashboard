import CommentModel from "Helpers/models/Comments/Comments";
import UserModel from "Helpers/models/userSignup/userSignup";
import { connectMongoDB } from "Helpers/MongoDB/MongoDB";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const { UserEmail } = await request.json();
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();

  const admin = await UserModel.find({ isAdmin: true, email: UserEmail });

  if (admin.length === 0) {
    return NextResponse.json({ error: "You're not an Admin, sorry!" }, { status: 400 });
  }
  const deletedComment = await CommentModel.findByIdAndDelete(id);

  return NextResponse.json(deletedComment);
}
