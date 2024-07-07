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

  const [DataForOneArticle, setDataForOneArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_JSON_URL}`);
      const data = await response.json();
      setDataForOneArticle(data.articles);
    };
    fetchData();
  }, []);

  const FiltereArticle = DataForOneArticle.find((item) => {
    return item.id === UrlID;
  });

  const {
    source,
    id,
    author,
    title,
    catagory,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = FiltereArticle || {};

  const CatagoriesRelatedArticles = DataForOneArticle.filter((item) => {
    return item.catagory === catagory;
  });

  return (
    <div className="w-screen ">
      <Accordion source={title} />
      <div className="flex">
        <div className="w-2/3 max-md:w-screen p-7 rounded-xl">
          <Article
            source={source}
            author={author}
            title={title}
            catagory={catagory}
            urlToImage={urlToImage}
            publishedAt={publishedAt}
            description={description}
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
