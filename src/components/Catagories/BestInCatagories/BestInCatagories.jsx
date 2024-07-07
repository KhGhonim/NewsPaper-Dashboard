"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function BestInCatagories() {
  const [BestCatagoriesData, setBestCatagoriesData] = useState([]);

  useEffect(() => {
    const localhost = process.env.NEXT_PUBLIC_JSON_URL;

    const getData = async () => {
      const res = await fetch(localhost, {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }

      const data = await res.json();
      setBestCatagoriesData(data[0]);
    };

    getData();
  }, []);

  return (
    <div className="w-full p-4 border rounded-lg ">
      <Link className=" rounded-lg overflow-hidden shadow-lg " href={""}>
        <div className="relative">
          <img
            // @ts-ignore
            src={BestCatagoriesData.urlToImage}
            alt="People running in a park"
            className="w-full h-auto rounded-2xl"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
            {
              // @ts-ignore
              BestCatagoriesData.catagory
            }
          </span>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-foreground">
            {
              // @ts-ignore
              BestCatagoriesData.title
            }
          </h2>
          <div className="flex items-center text-muted-foreground mt-2">
            <span className="mr-2">
              <img
                className="w-6 h-6"
                alt="calendar"
                src="/Socail/schedule.png"
              />
            </span>
            <span className="text-sm">June 13, 2022</span>
          </div>
          <p className="text-muted-foreground mt-4">
            {
              // @ts-ignore
              BestCatagoriesData.description
            }
          </p>
          <div className="flex items-center mt-4">
            <img
              src="https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w400.jpg"
              alt="Arthur"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm text-foreground font-semibold">
                By{" "}
                {
                  // @ts-ignore
                  BestCatagoriesData.author
                }
              </p>
              <div className="flex items-center text-muted-foreground text-sm">
                <span className="mr-2">
                  <img
                    className="w-4 h-4"
                    alt="comments"
                    src="/Socail/comment.png"
                  />
                </span>
                <span>3</span>
                <span className="ml-4 mr-2">
                  <img
                    className="w-4 h-4"
                    alt="views"
                    src="./Socail/view.png"
                  />
                </span>
                <span>422 views</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
