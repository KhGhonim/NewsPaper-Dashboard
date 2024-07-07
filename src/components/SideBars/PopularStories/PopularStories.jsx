"use client";

import Loading from "../../../app/Loading";
import moment from "moment";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function PopularStories() {
  const [Tab, setTab] = useState("Politics");
  const [PopularNewData, setWorldNewData] = useState([]);
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

  if (!PopularNewData || loading) {
    return <Loading />;
  }

  return (
    <div className="block w-full  p-4 border-b-2">
      <div className=" my-4">
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
