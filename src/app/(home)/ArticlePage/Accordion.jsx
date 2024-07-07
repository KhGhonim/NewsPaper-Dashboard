import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

export default function Accordion({source}) {
  return (
    <div className="hidden md:block w-full h-16 p-7">
      <div className="flex  items-center">
        <nav aria-label="breadcrumb" className="w-full p-4 text-gray-800">
          <ol className="flex h-8 space-x-2">
            <li className="flex items-center">
              <Link
                rel="noopener noreferrer"
                href="/"
                title="Back to homepage"
                className="hover:underline"
              >
                <FaHome />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <IoMdArrowDropright size={20} />
              <span
                rel="noopener noreferrer"
                className="flex items-center px-1 capitalize max-sm:text-xs"
              >
                Article
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <IoMdArrowDropright size={20} />
              <span
                rel="noopener noreferrer"
                className="flex items-center px-1 text-xs capitalize "
              >
                {source}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
