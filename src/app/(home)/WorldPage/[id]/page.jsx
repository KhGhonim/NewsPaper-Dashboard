"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTag,
  FaTwitter,
} from "react-icons/fa";
import Loading from "../../../../app/loading";
import { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import Comments from "../../../../components/Comments/Comments";

export default function page({ params }) {
  const { id: UrlID } = params;
  const [isloading, setisloading] = useState(false);
  const [DataForOneArticle, setDataForOneArticle] = useState([]);
  const ArticleJsonfile = process.env.NEXT_PUBLIC_JSON_URL;
  useEffect(() => {
    if (UrlID) {
      setisloading(true);
      const fetchData = async () => {
        const response = await fetch(ArticleJsonfile);
        const data = await response.json();
        setDataForOneArticle(data.articles);
      };
      fetchData();

      setisloading(false);
    }
  }, [UrlID]);

  const FiltereArticle = DataForOneArticle.find((item) => {
    return item.id === UrlID;
  });

  const {
    author,
    title,
    catagory,
    description,
    urlToImage,
    content,
  } = FiltereArticle || [];

  if (isloading) {
    return <Loading />;
  }

  const CatagoriesRelatedArticles = DataForOneArticle.filter((item) => {
    return item.catagory === catagory;
  });


  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto p-4">
        <header className="mb-8 text-center  py-8 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-2">{title}</h1>
          <p className="">By {author} | January 1, 2023</p>
        </header>
        <article className=" max-w-none">
          <p className="animate-fade-in">{description}.</p>

          <img
            src={urlToImage}
            alt="Example of a TailwindCSS design"
            className="my-4 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />

          <h2 className="text-white bg-red-500 p-2 mx-auto w-3/12 my-3 rounded-xl text-center">
            {catagory}
          </h2>
          <p>{content}</p>
        </article>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <div className=" mt-10 flex items-center border-t-2 border-b-2 p-7">
          <h2 className="text-xl font-bold mb-2 px-5 flex items-center gap-4">
            {" "}
            <FaTag color="red" size={15} /> Tags{" "}
            <span className="transition-all duration-500 ease-in-out animate-pulse font-extrabold">
              :
            </span>
          </h2>
          <div className="bg-black text-white  text-center px-3 py-1 rounded  ml-3 hover:bg-red-500 transition-all duration-200 ease-out cursor-pointer w-32">
            {catagory}
          </div>
        </div>

        <div className="relative p-6 my-3 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 bg-gray-200">
          <img
            src="https://www.davishighnews.com/wp-content/uploads/2023/11/mat-perry.jpg"
            alt="Author's profile picture"
            className="w-24 h-24 rounded-full shadow-md object-cover"
          />
          <div className="flex-1">
            <p className="">
              Written By{" "}
              <span className="font-bold text-foreground">{author}</span>
            </p>
            <p className=" mt-2">
              In a professional context it often happens that private or
              corporate clients order a publication to be made and presented
              with the actual content still not being ready. Think of a news
              blog that’s filled with content hourly on the day of going live.
              Filled with content hourly on the day of going live.
            </p>
          </div>
          <div className=" flex flex-col md:flex-row  ">
            <div className="flex items-center space-x-4">
              <span className="text-foreground font-bold">Follow:</span>
              <a
                href="#"
                className="text-primary hover:text-primary-foreground"
              >
                <FaFacebook color="#3b5998" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary-foreground"
              >
                <FaInstagram color="#e1306c" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary-foreground"
              >
                <FaTwitter color="#00acee" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary-foreground"
              >
                <FaLinkedin color="#0077b5" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CatagoriesRelatedArticles.map((item, index) => {
              if (item.urlToImage === undefined || item.urlToImage === null) {
                return null;
              }
              const day = moment(item.publishedAt).date();
              const month = moment(item.publishedAt).format("MMMM");
              const year = moment(item.publishedAt).year();
              return (
                <Link
                  href={`/WorldPage/${item.id}`}
                  key={index}
                  className=" rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 text-sm font-semibold rounded"></span>
                    <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                    <p className=" mt-1 flex items-center">
                      <span className="mr-2">🗓️</span> {month} {day}, {year}
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
