import React from "react";
import Slider from "./Slider";

export default function SliderTrendingNews() {
  return (
    <div className="hidden md:flex w-full bg-black text-white  my-8 h-[500px]">
      <div className="w-1/4 bg-card p-8 flex justify-center flex-col">
      <div className="w-16 h-1 bg-red-500 mb-4"></div>
        <h2 className="text-xl font-bold mb-4">Trending News</h2>
        <p className="mb-4 text-sm">Don't Miss And Stay Up-to-date. Top pic for you.</p>
        <div className="flex space-x-2">
          <button className="  p-2 rounded">
            ◀
          </button>
          <button className="  p-2 rounded">
            ▶
          </button>
        </div>
      </div>

      <div className="w-3/4 flex space-x-4 overflow-hidden">
        <Slider />
      </div>
    </div>
  );
}
