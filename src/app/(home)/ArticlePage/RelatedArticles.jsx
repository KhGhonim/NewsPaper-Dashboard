import moment from "moment";
import Link from "next/link";

export default function RelatedArticles({ CatagoriesRelatedArticles }) {
  return (
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
              href={`/ArticlePage/${item.id}`}
              key={index}
              className="bg-card rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="bg-primary text-primary-foreground px-2 py-1 text-sm font-semibold rounded"></span>
                <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                <p className="text-muted-foreground mt-1 flex items-center">
                  <span className="mr-2">🗓️</span> {month} {day}, {year}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
