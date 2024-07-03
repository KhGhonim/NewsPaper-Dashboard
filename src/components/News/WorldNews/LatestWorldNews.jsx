"use client";

import moment from "moment";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function LatestWorldNews({}) {
  const [Tab, setTab] = useState("Politics");
  const [WorldNewData, setWorldNewData] = useState([]);

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

      const fillteredData = data.filter((item) => {
        return item.catagory === Tab;
      });

      setWorldNewData(fillteredData);
    };

    getData();
  }, [Tab]);
  const HandleTabs = (value) => {
    setTab(value);
  };

  if (!WorldNewData && WorldNewData.length < 0) {
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
          <h1 className="text-2xl font-bold">Latest World News</h1>
          <p className=" text-base text-[#666666]">Don't miss daily news</p>
        </div>
        <div className=" my-4">
          <ul className="flex justify-center  ">
            <li>
              <button
                onClick={() => {
                  HandleTabs("Politics");
                }}
                className={`${
                  Tab === "Politics"
                    ? " border bg-red-500 text-white px-4 py-2"
                    : "tab-link border bg-gray-300 px-4 py-2"
                }`}
              >
                Politics
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  HandleTabs("Technology");
                }}
                className={`${
                  Tab === "Technology"
                    ? " border bg-red-500 text-white px-4 py-2"
                    : "tab-link border bg-gray-300 px-4 py-2"
                }`}
              >
                Technology
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  HandleTabs("Business");
                }}
                className={`${
                  Tab === "Business"
                    ? " border bg-red-500 text-white px-4 py-2"
                    : "tab-link border bg-gray-300 px-4 py-2"
                }`}
              >
                Business
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  HandleTabs("Health");
                }}
                className={`${
                  Tab === "Health"
                    ? " border bg-red-500 text-white px-4 py-2"
                    : "tab-link border bg-gray-300 px-4 py-2"
                }`}
              >
                Health
              </button>
            </li>
          </ul>
        </div>
        <div className="h-1 w-20 bg-red-500 mb-4"></div>

        <div id="left-tab-content border ">
          <div className="tab-content ">
            {WorldNewData.map((item, index) => {
              const day = moment(item.publishedAt).date();
              const month = moment(item.publishedAt).format("MMMM");
              const year = moment(item.publishedAt).year();
              if (!item.urlToImage) {
                return null;
              }
              return (
                <div
                  key={index}
                  className="flex mb-4 md:items-center border-t border-b"
                >
                  <img
                    src={item.urlToImage}
                    alt="News Image"
                    className="w-2/5 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <span className="bg-red-500 text-white font-bold px-2 py-1 rounded hover:bg-gray-900 hover:text-white transition-all duration-200 ease-out cursor-pointer">
                      {item.source.name}
                    </span>
                    <h2 className="text-xl font-bold hover:text-red-500 transition-all duration-200 ease-out cursor-pointer">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {month} {day}, {year}
                    </p>

                    <p className="text-muted-foreground">By {item.author}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
