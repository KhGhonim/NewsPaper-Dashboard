"use client";

import moment from "moment";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function PopularStories() {
  const [Tab, setTab] = useState("Politics");
  const [PopularNewData, setWorldNewData] = useState([]);

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

  if (!PopularNewData && PopularNewData.length < 0) {
    return (
      <div className="py-4 rounded shadow-md w-screen h-[600px] max-sm:h-[400px] animate-pulse bg-gray-50">
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
    <div className="block w-full  p-4 border-b-2">
      <div className="border-b border-muted my-4">
        <ul className="flex justify-center ">
          <li>
            <button
              onClick={() => {
                HandleTabs("Politics");
              }}
              className={`${
                Tab === "Politics"
                  ? " border bg-red-500 text-white px-9 w-full py-3 rounded-xl"
                  : "tab-link border bg-gray-900 text-white px-9 py-3 rounded-xl"
              }`}
            >
              Popular News
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                HandleTabs("Business");
              }}
              className={`${
                Tab === "Business"
                  ? " border bg-red-500 text-white px-9 py-3 rounded-xl"
                  : "tab-link border bg-gray-900 text-white px-9 py-3 rounded-xl"
              }`}
            >
              Recent News
            </button>
          </li>
        </ul>
      </div>

      <div id="right-tab-content " className="bg-gray-100 p-3 rounded-md">
        {PopularNewData.map((item, index) => {
          const day = moment(item.publishedAt).date();
          const month = moment(item.publishedAt).format("MMMM");
          const year = moment(item.publishedAt).year();
          if (!item.urlToImage) {
            return null;
          }
          return (
            <div key={index} className="tab-content">
              <Link className="flex mb-4" href={`${item.url}`}>
                <img
                  src={item.urlToImage}
                  alt="News Image"
                  className="rounded-lg w-1/4 object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold hover:text-red-500 transition-all duration-200 ease-out cursor-pointer">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {month} {day}, {year}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
