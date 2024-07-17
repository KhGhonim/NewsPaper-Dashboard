"use client";

import moment from "moment";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";

export default function Comments() {
  const { data: session, status } = useSession();
  const [comment, setcomment] = useState(null);
  const [ComnentData, setComnentData] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  const CommentHandler = async (eo) => {
    eo.preventDefault();
    setIsloading(true);
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment, title: session.user.name }),
    });
    const data = await res.json();
    if (res.status === 200) {
      setcomment(null);
      setIsloading(false);
    }
  };

  useEffect(() => {
    const GetComments = async () => {
      const res = await fetch("/api/getComments", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setComnentData(data);
    };

    GetComments();
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-4  rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {ComnentData.length > 0 ? (
        <div className="space-y-4">
          {ComnentData.map((comment, index) => {
            return (
              <div
                key={index}
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
                    <FaHeart color="red" />
                  </button>
                  <button className="transition-colors duration-200 hover:scale-110">
                    <FaTrash color="gray" />
                  </button>
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
            onChange={(eo) => setcomment(eo.target.value)}
            defaultValue={comment}
            className="w-full p-2 bg-input text-foreground rounded-lg border border-border  transition-colors duration-200"
            placeholder="Add a comment..."
          ></textarea>
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
    </div>
  );
}
