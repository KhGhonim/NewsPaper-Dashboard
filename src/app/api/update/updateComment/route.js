import CommentModel from "Helpers/models/Comments/Comments";
import UserModel from "Helpers/models/userSignup/userSignup";
import { connectMongoDB } from "Helpers/MongoDB/MongoDB";
import { NextResponse } from "next/server";

export async function PUT(request) {
  await connectMongoDB();

  const { comment, UserEmail } = await request.json();
  const id = request.nextUrl.searchParams.get("id");

  if (!comment) {
    return NextResponse.json({ error: "comment is required" }, { status: 400 });
  }
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  if (comment.length > 200) {
    return NextResponse.json({ error: "comment is too long" }, { status: 400 });
  }

  const admin = await UserModel.find({ isAdmin: true, email: UserEmail });

  console.log(admin);

  if (admin.length === 0) {
    return NextResponse.json({ error: "You're not an Admin, sorry!" }, { status: 400 });
  }

  const updatedComment = await CommentModel.findByIdAndUpdate(
    id,
    { content: comment },
    { new: true }
  );

  return NextResponse.json(updatedComment);
}
