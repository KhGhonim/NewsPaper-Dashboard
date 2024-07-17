"use client";
import Catagories from "../../../../components/SideBars/Catagories/Catagories";
import EditorChoice from "../../../../components/SideBars/EditorChoice/EditorChoice";
import PopularStories from "../../../../components/SideBars/PopularStories/PopularStories";
import Tags from "../../../../components/SideBars/Tags/Tags";
import Accordion from "../Accordion";
import SearchBar from "../SearchBar";
import Article from "./Article";
import { useEffect, useState } from "react";

export default function page({ params }) {
  const { id: UrlID } = params;
  const [isloading, setisloading] = useState(false);

  const [DataForOneArticle, setDataForOneArticle] = useState([]);
  useEffect(() => {
    if (UrlID) {
      setisloading(true);
      const fetchData = async () => {
        const response = await fetch(`/api/getUsersArticle`);
        const data = await response.json();
        setDataForOneArticle(data);
      };
      fetchData();

      setisloading(false);
    }
  }, [UrlID]);

  const FiltereArticle = DataForOneArticle.find((item) => {
    return item._id === UrlID;
  });

  const {
    source,
    author,
    title,
    catagory,

    postImage,
    createdAt,
    content,
  } = FiltereArticle || {};

  const CatagoriesRelatedArticles = DataForOneArticle.filter((item) => {
    return item.catagory === catagory;
  });

  if (isloading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-red-500"></div>
      </div>
    );
  }
  return (
    <div className="w-screen ">
      <Accordion source={title} />
      <div className="flex">
        <div className="w-2/3 max-md:w-screen p-7 rounded-xl">
          <Article
            source={source}
            content={content}
            author={author}
            title={title}
            catagory={catagory}
            urlToImage={postImage}
            publishedAt={createdAt}
            CatagoriesRelatedArticles={CatagoriesRelatedArticles}
          />
        </div>
        <div className="hidden md:flex w-1/3 flex-col gap-5 border-l-2 p-2  ">
          <SearchBar />
          <EditorChoice />
          <Catagories />
          <Tags />
          <PopularStories />
        </div>
      </div>
    </div>
  );
}
