"use client";

import moment from "moment";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEdit, FaHeart, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Comments() {
  const { data: session, status } = useSession();
  const [comment, setcomment] = useState("");
  const [ComnentData, setComnentData] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  const [Editor, setEditor] = useState(false);
  const [NewEditedComment, setNewEditedComment] = useState("");
  const [EditId, setEditId] = useState(null);
  const UrlID = useParams().id;

  const HandleEdit = (content) => {
    setEditor(true);
    setNewEditedComment(content);
  };

  // add new comments to the database
  const CommentHandler = async (eo) => {
    eo.preventDefault();
    if (comment.length > 200) {
      return;
    }
    setIsloading(true);
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment, title: session.user.name, UrlID }),
    });
    const data = await res.json();

    if (res.ok) {
      setcomment("");
      setComnentData([data, ...ComnentData]);
    } else {
      console.error("Failed to add comment:", data); // Log error if any
    }
    setIsloading(false);
  };

  //Get all the comments
  useEffect(() => {
    const GetComments = async () => {
      const res = await fetch(`/api/getComments?postId=${UrlID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        next: { revalidate: 0 },
      });
      const data = await res.json();
      setComnentData(data);
    };

    GetComments();
  }, []);

  // Delete a comment
  const DeleteComment = async (id) => {
    const res = await fetch(`/api/deleteComment?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      next: { revalidate: 0 },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      toast.success("Comment deleted successfully");
      setComnentData(ComnentData.filter((comment) => comment._id !== id));
    } else {
      console.error("Failed to delete comment:", data); // Log error if any
    }
  };
  const UserEmail = session?.user?.email;
  const UpdateComment = async (eo) => {
    eo.preventDefault();
    const res = await fetch(`/api/update/updateComment?id=${EditId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: NewEditedComment, UserEmail }),
      cache: "no-cache",
      next: { revalidate: 0 },
    });
    const data = await res.json();

    if (res.ok) {
      toast.success("Comment updated successfully");
      setComnentData(
        ComnentData.map((comment) =>
          comment._id === EditId
            ? { ...comment, content: NewEditedComment }
            : comment
        )
      );
      setEditor(false);
    } else {
      toast.error("Only Admin allow to update comments"); // Log error if any
      setEditor(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4  rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {ComnentData.length > 0 ? (
        <div className="space-y-4">
          {ComnentData?.map((comment) => {
            return (
              <div
                key={comment._id}
                className="p-4  rounded-lg shadow-sm flex justify-between items-start"
              >
                <div className="flex items-center space-x-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={comment.postImage}
                    alt="User avatar"
                  />
                  <div>
                    <p className="font-semibold">{comment.title}</p>
                    <p className="">{comment.content}</p>
                    <p className="text-xs font-light">
                      {moment(comment.createdAt).fromNow()}{" "}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-5">
                  <button className=" transition-colors duration-200 hover:scale-110">
                    <FaHeart color="black" />
                  </button>
                  {status === "authenticated" ? (
                    <div className="flex space-x-5">
                      <button className=" transition-colors duration-200 hover:scale-110 ">
                        <FaTrash
                          onClick={() => DeleteComment(comment._id)}
                          color="gray"
                          className=" hover:text-red-500"
                        />
                      </button>

                      <button className=" transition-colors duration-200 hover:scale-110 ">
                        <FaEdit
                          onClick={() => {
                            HandleEdit(comment.content);
                            setEditId(comment._id);
                          }}
                          color="gray"
                          className=" hover:text-red-500"
                        />
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-black font-semibold text-lg text-center my-2">
          No comments yet!
        </p>
      )}

      {status === "authenticated" ? (
        <form onSubmit={CommentHandler} className="mt-6 flex flex-col ">
          <textarea
            maxLength={200}
            onChange={(eo) => setcomment(eo.target.value)}
            value={comment}
            className="w-full p-2 bg-input text-foreground rounded-lg border border-border  transition-colors duration-200"
            placeholder="Add a comment..."
          ></textarea>
          <p className="text-gray-500 text-xs">
            {200 - comment.length} characters remaining
          </p>
          <button
            disabled={Isloading}
            type="submit"
            className="mt-2 bg-black text-white hover:bg-black/80 p-2 rounded-lg transition-colors duration-300 ease-in-out "
          >
            {Isloading ? "Adding Your Comment..." : "Comment"}
          </button>
        </form>
      ) : (
        <div>
          <p className="text-black font-semibold text-lg text-center my-2">
            Login to add your comments from
            <Link
              className="text-blue-500 hover:underline"
              href="/api/auth/signin"
            >
              {" "}
              here
            </Link>
          </p>
        </div>
      )}
      <ToastContainer />

      <div
        className={`fixed inset-0 flex items-center justify-center transition-all duration-500 ease-in-out bg-black bg-opacity-50 z-50 ${
          Editor ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Update Comment</h2>
          <form
            onSubmit={UpdateComment}
            id="comment-form"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-muted-foreground"
              >
                Your New Comment
              </label>
              <textarea
                value={NewEditedComment}
                onChange={(eo) => setNewEditedComment(eo.target.value)}
                id="comment"
                name="comment"
                className="mt-1 block w-full p-2.5 border border-input rounded-md bg-background text-foreground focus:ring-primary focus:border-primary"
                placeholder="Write your comment here..."
              ></textarea>
              <p className="text-gray-500 text-xs">
                {200 - NewEditedComment.length} characters remaining
              </p>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditor(false)}
                type="button"
                className="bg-gray-400 text-black hover:bg-gray-500 transition-all duration-200 ease-in-out  px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white hover:bg-red-700 transition-all duration-200 ease-in-out  px-4 py-2 rounded-md"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
