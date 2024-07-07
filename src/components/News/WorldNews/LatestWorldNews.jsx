"use client";

 
import Loading from "../../../app/Loading.jsx";
import moment from "moment";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function LatestWorldNews({}) {
  const [Tab, setTab] = useState("Politics");
  const [WorldNewData, setWorldNewData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const localhost = process.env.NEXT_PUBLIC_JSON_URL;

    const getData = async () => {
      setloading(true);
      const res = await fetch(localhost, {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }

      const data = await res.json();

      const fillteredData = data.articles.filter((item) => {
        return item.catagory === Tab;
      });

      setWorldNewData(fillteredData);
    };

    getData();

    setloading(false);
  }, [Tab]);
  const HandleTabs = (value) => {
    setTab(value);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap w-screen md:w-full ">
      <div className="w-full p-4 mt-4 md:border-r-2">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Latest World News</h1>
          <p className=" text-base text-[#666666]">Don't miss daily news</p>
        </div>
        <div className=" my-4">
          <ul className="flex justify-center max-md:text-xs ">
            <li>
              <button
                onClick={() => {
                  HandleTabs("Politics");
                }}
                className={`${
                  Tab === "Politics"
                    ? " border bg-red-500 text-white px-4 max-md:px-2 rounded py-2"
                    : "tab-link border bg-gray-300 px-4 max-md:px-2 rounded py-2"
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
                    ? " border bg-red-500 text-white px-4 max-md:px-2 rounded py-2"
                    : "tab-link border bg-gray-300 px-4 max-md:px-2 rounded py-2"
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
                    ? " border bg-red-500 text-white px-4 max-md:px-2 rounded py-2"
                    : "tab-link border bg-gray-300 px-4 max-md:px-2 rounded py-2"
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

        <div id="left-tab-content border border-b-4">
          <div className="tab-content ">
            {WorldNewData.map((item, index) => {
              const day = moment(item.publishedAt).date();
              const month = moment(item.publishedAt).format("MMMM");
              const year = moment(item.publishedAt).year();
              if (!item.urlToImage) {
                return null;
              }
              return (
                <Link
                  href={`/ArticlePage/${item.id}`}
                  key={index}
                  className="flex mb-4 md:items-center border-t border-b"
                >
                  <img
                    src={item.urlToImage}
                    alt="News Image"
                    className="w-2/5 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <span className="bg-red-500 text-white font-bold px-2 py-1 rounded hover:bg-gray-900 hover:text-white transition-all duration-200 ease-out max-md:text-sm cursor-pointer">
                      {item.source.name}
                    </span>
                    <h2 className="text-xl max-md:text-sm mt-2 font-bold hover:text-red-500 transition-all duration-200 ease-out cursor-pointer">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground max-md:text-xs ">
                      {month} {day}, {year}
                    </p>

                    <p className="text-base max-md:text-xs ">
                      By {item.author}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
