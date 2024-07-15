export default function ArticleDescription({ content }) {
  return <div className="post-content p-3" dangerouslySetInnerHTML={{ __html: content }}></div>;
}
