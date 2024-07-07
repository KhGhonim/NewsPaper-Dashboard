"use client";

import Loading from "../../../Loading";
import moment from "moment";
import { useSession } from "next-auth/react";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function News({ id }) {
  const [WorldNewData, setWorldNewData] = useState([]);
  const [loading, setloading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();
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
        return String(item.catagory).toLowerCase() == id;
      });

      setWorldNewData(fillteredData);
    };

    getData();

    setloading(false);
  }, [id]);

  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/signin");
    }
  }, [status]);

  if (!WorldNewData || loading || status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    return (
      <div id="left-tab-content border border-b-4 ">
        <div className="tab-content  ">
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
}
