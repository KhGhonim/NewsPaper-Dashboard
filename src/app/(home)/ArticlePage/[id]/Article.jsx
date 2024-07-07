import SliderAndTitle from "../SliderAndTitle";
import ArticleDescription from "../ArticleDescription";
import ArticleTags from "../ArticleTags";
import ArticleAuthor from "../ArticleAuthor";
import RelatedArticles from "../RelatedArticles";

export default function Article({
  source,
  author,
  title,
  catagory,
  description,
  urlToImage,
  publishedAt,
  CatagoriesRelatedArticles

}) {
  return (
    <div>
      <SliderAndTitle author={author} title={title} urlToImage={urlToImage} />
      <ArticleDescription />
      <ArticleTags tags={catagory} />
      <ArticleAuthor author={author} />
      <RelatedArticles CatagoriesRelatedArticles={CatagoriesRelatedArticles}
      />
    </div>
  );
}
