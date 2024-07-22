"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";

const url = typeof window !== "undefined" ? window.location.href : "";

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
      setBestCatagoriesData(data.articles[0]);
    };

    getData();
  }, []);

  return (
    <div className="w-full p-4 border rounded-lg shadow-2xl h-dvh ">
      <Link className=" rounded-lg overflow-hidden " href={""}>
        <div className="group relative overflow-hidden">
          <img
            // @ts-ignore
            src={BestCatagoriesData.urlToImage}
            alt="People running in a park"
            className="w-full h-full rounded-2xl group-hover:scale-110 overflow-hidden transform transition-all duration-700"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
            {
              // @ts-ignore
              BestCatagoriesData.catagory
            }
          </span>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-foreground">
            {
              // @ts-ignore
              BestCatagoriesData.title
            }
          </h2>
          <div className="flex items-center  mt-2">
            <span className="mr-2">
              <img
                className="w-6 h-6"
                alt="calendar"
                src="/Socail/schedule.png"
              />
            </span>
            <span className="text-sm">June 13, 2022</span>
          </div>
          <p className=" text-sm md:text-lg mt-4">
            {
              // @ts-ignore
              BestCatagoriesData.description
            }
          </p>
          <div className="flex items-end mt-4">
            <img
              src="https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w400.jpg"
              alt="Arthur"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-semibold">
                By{" "}
                {
                  // @ts-ignore
                  BestCatagoriesData.author
                }
              </p>
              <div className="flex items-center text-sm">
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
          <div className="mt-2">
            <h3 className="font-semibold text-gray-700 text-base max-sm:text-xs">
              Share this:
            </h3>
            <div className="flex space-x-3 mt-2">
              <FacebookShareButton
                url={url}
                // @ts-ignore
                quote={BestCatagoriesData.title}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={url}
                title={
                  // @ts-ignore
                  BestCatagoriesData.title
                }
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <RedditShareButton
                url={url}
                title={
                  // @ts-ignore
                  BestCatagoriesData.title
                }
              >
                <RedditIcon size={32} round />
              </RedditShareButton>
              <EmailShareButton
                url={url}
                // @ts-ignore
                subject={BestCatagoriesData.title}
                // @ts-ignore
                body={BestCatagoriesData.description}
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
