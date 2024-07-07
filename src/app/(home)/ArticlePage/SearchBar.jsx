import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="relative w-full flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        className={`w-[20] transition-all ml-10 duration-300 ease-in-out border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500  pl-10 pr-4 }`}
        placeholder="Search..."
      />
      <button
        className="absolute left-1 top-1/2  ml-10  transform -translate-y-1/2 border border-transparent p-1 bg-transparent hover:bg-gray-50 rounded-lg"
        aria-label="Search"
      >
        <FaSearch />
      </button>
    </div>
  );
}
