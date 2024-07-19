"use client";
import { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import moment from "moment";
export default function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [SearchData, setSearchData] = useState([]);
  useEffect(() => {
    const localhost = process.env.NEXT_PUBLIC_JSON_URL;

    const getData = async () => {
      try {
        const res = await fetch(localhost, {
          cache: "no-cache",
          next: { revalidate: 0 },
        });

        if (!res.ok) {
          notFound();
        }

        const data = await res.json();

        const filteredData = data.articles.filter((item) => {
          return (
            String(item.catagory)
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            String(item.title).toLowerCase().includes(search.toLowerCase()) ||
            String(item.description)
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        });

        setSearchData(filteredData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (search) {
      getData();
    }
  }, [search]);

  return (
    <div id="w-full  ">
      <div className="tab-content   p-7 mx-auto">
        {SearchData.map((item, index) => {
          const day = moment(item.publishedAt).date();
          const month = moment(item.publishedAt).format("MMMM");
          const year = moment(item.publishedAt).year();
          if (!item.urlToImage) {
            return null;
          }
          return (
            <div
              key={index}
              className="flex  md:items-center border-t border-b my-2"
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

                <p className="text-base max-md:text-xs ">By {item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
