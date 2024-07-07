"use client";
import moment from "moment";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";


export default function VerticalCatagories() {
  const [VerticalCatagoriesSlider, setVerticalCatagoriesSlider] = useState([]);

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

      setVerticalCatagoriesSlider(data);
    };

    getData();
  }, []);
  return (
    <div className="max-sm:hidden md:block border relative p-4 rounded-lg flex flex-col space-y-4 bg-gray-100 h-full">
      <div className="overflow-y-scroll h-96">
        {VerticalCatagoriesSlider.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden my-10  "
          >
            <div className="flex-1 p-4">
              <span className="bg-red-500 text-white px-2 py-1 rounded hover:bg-black duration-500 transition-all ease-in-out">
                {item.catagory}
              </span>
              <h2 className="text-xl font-bold mt-2 hover:text-red-500 duration-500 transition-all ease-in-out">
                {item.title}
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                {moment(item.publishedAt).format("MMMM D, YYYY")}
              </p>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
              <div className="flex items-center mt-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg"
                  alt="Author's avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-bold">BY {item.source.name}</p>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <span className="mr-2">3</span>
                    <span className="mr-2">3185 VIEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-full md:w-1/3">
              <img
                src={item.urlToImage}
                alt="Living room with modern furniture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
