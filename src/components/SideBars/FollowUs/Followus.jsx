import Link from "next/link";
import React from "react";

export default function Followus() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-2 px-5">Follow Us</h2>
      <div className="h-1 w-16 bg-red-500 mb-4"></div>
      <div className="grid grid-cols-2 gap-4 px-5">
        <Link className="flex items-center p-4 bg-zinc-100 rounded-lg shadow" href={""}>
          <img
            src="/Socail/facebook.png"
            alt="Facebook logo"
            className="mr-4 w-10 object-cover"
          />
          <div>
            <p className="font-bold">Likes</p>
            <p>1456</p>
          </div>
        </Link>
        <Link className="flex items-center p-4 bg-zinc-100 rounded-lg shadow" href={""}>
          <img
            src="/Socail/twitter.png"
            alt="Twitter logo"
            className="mr-4 w-10 object-cover"
          />
          <div>
            <p className="font-bold">Followers</p>
            <p>1456</p>
          </div>
        </Link>
        <Link className="flex items-center p-4 bg-zinc-100 rounded-lg shadow" href={""}>
          <img
            src="/Socail/youtube.png"
            alt="YouTube logo"
            className="mr-4 w-10 object-cover"
          />
          <div>
            <p className="font-bold">Followers</p>
            <p>1456</p>
          </div>
        </Link>
        <Link className="flex items-center p-4 bg-zinc-100 rounded-lg shadow" href={""}>
          <img
            src="/Socail/instagram.png"
            alt="Instagram logo"
            className="mr-4 w-10 object-cover"
          />
          <div>
            <p className="font-bold">Followers</p>
            <p>1456</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
