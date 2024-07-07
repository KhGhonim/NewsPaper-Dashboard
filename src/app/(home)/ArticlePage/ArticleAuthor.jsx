import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ArticleAuthor({ author }) {
  return (
    <div className="relative p-6 my-3 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 bg-gray-200">
      <img
        src="https://www.davishighnews.com/wp-content/uploads/2023/11/mat-perry.jpg"
        alt="Author's profile picture"
        className="w-24 h-24 rounded-full shadow-md object-cover"
      />
      <div className="flex-1">
        <p className="">
          Written By <span className="font-bold text-foreground">{author}</span>
        </p>
        <p className=" mt-2">
          In a professional context it often happens that private or corporate
          clients order a publication to be made and presented with the actual
          content still not being ready. Think of a news blog that’s filled with
          content hourly on the day of going live. Filled with content hourly on
          the day of going live.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row  ">
        <div className="flex items-center space-x-4">
          <span className="text-foreground font-bold">Follow:</span>
          <a href="#" className="text-primary hover:text-primary-foreground">
            <FaFacebook color="#3b5998" />
          </a>
          <a href="#" className="text-primary hover:text-primary-foreground">
            <FaInstagram color="#e1306c" />
          </a>
          <a href="#" className="text-primary hover:text-primary-foreground">
            <FaTwitter color="#00acee" />
          </a>
          <a href="#" className="text-primary hover:text-primary-foreground">
            <FaLinkedin color="#0077b5" />
          </a>
        </div>
      </div>
    </div>
  );
}
