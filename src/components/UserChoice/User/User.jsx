"use client";

import moment from "moment";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";


export default function User() {
  const [UserData, setUserData] = useState([]);
  const [visibleNews, setVisibleNews] = useState(4);

  const handleReadAllNews = () => {
    setVisibleNews((prev) => prev + 4);
  };

  useEffect(() => {
    const localhost = "http://localhost:4000/articles";

    const getData = async () => {
      const res = await fetch(localhost, {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }
      const data = await res.json();

      setUserData(data);
    };

    getData();
  }, [UserData]);

  if (!UserData && UserData.length > 0) {
    return (
      <div className="py-4 rounded shadow-md w-full h-[600px] max-sm:h-[400px] animate-pulse bg-gray-50">
        <div className="flex p-4 space-x-4 sm:px-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="flex-1 py-2 space-y-4">
            <div className="w-full h-3 rounded bg-gray-300"></div>
            <div className="w-5/6 h-3 rounded bg-gray-300"></div>
          </div>
        </div>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded bg-gray-300"></div>
          <div className="w-full h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
          <div className="w-3/4 h-4 rounded bg-gray-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap w-screen md:w-full ">
      <div className="w-full p-4 mt-4 md:border-r-2">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Latest User's News</h1>
          <p className=" text-base text-[#666666]">
            What users have uploaded from the Dashboard
          </p>
        </div>

        <div className="h-1 w-20 bg-red-500 mb-4"></div>

        <div className="flex flex-wrap -mx-4">
          {UserData.slice(0, visibleNews).map((item, index) => {
            if (item.urlToImage === null) {
              return null;
            }
            const day = moment(item.publishedAt).date();
            const month = moment(item.publishedAt).format("MMMM");
            const year = moment(item.publishedAt).year();
            return (
              <Link
                key={index}
                className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8"
                href={`/articles/${item.title}`}
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="w-full h-48 object-cover"
                    src={item.urlToImage}
                    alt="Sports Image"
                  />
                  <div className="p-4">
                    <span className="bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">
                      {item.catagory}
                    </span>
                    <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      {month} {day}, {year}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {visibleNews < UserData.length && (
          <div onClick={handleReadAllNews} className="text-center mt-4 mb-4 flex justify-center hover:bg-red-500 transition-all duration-200 ease-out cursor-pointer rounded-md max-sm:w-full mx-auto bg-gray-900 h-10 text-white">
            <button >Read All News</button>
          </div>
        )}

        <div className="h-1 w-20 bg-red-500 mb-4"></div>
      </div>
    </div>
  );
}
