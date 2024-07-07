import { CATEGORIES } from "../../../constant/constant";
import Link from "next/link";

export default function Tags() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2 px-5">Popular Tags</h2>
      <div className="h-1 w-16 bg-red-500 mb-4"></div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="bg-black text-white px-3 py-1 rounded  ml-3 hover:bg-red-500 transition-all duration-200 ease-out cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
