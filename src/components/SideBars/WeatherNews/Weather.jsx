"use client";

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import moment from "moment";

const month = moment().format("MMMM");

export default function Weather() {
  const [Location, setLocation] = useState("Istanbul");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=imperial&appid=c949f569bf1e1840f93ad20f9ced79fd`;

  const getData = async () => {
    setLoading(true);
    const res = await fetch(url, {
      cache: "no-cache",
    });

    if (!res.ok) {
      // Handle error
      setData(null);
      setLoading(false);
      return;
    }

    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [Location]);

  return (
    <div className="max-w-sm mx-auto bg-gray-800 rounded-lg shadow-lg p-6 my-6">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <button
          onClick={getData}
          className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        >
          <FaSearch />
        </button>
      </div>

      {loading ? (
        <div className="text-white">Loading...</div>
      ) : data ? (
        <div className="text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold">
                {data.main.temp.toFixed()}°F
              </div>
              <div className="text-sm">{data.weather[0].main} now! </div>
              <div className="text-lg font-bold">
                {data.name || "Location"} - Today
              </div>
            </div>
            <img
              alt="sun-icon"
              src="/Socail/sunny.png"
              className="w-12 object-cover"
            />
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center py-2 border-t border-zinc-300">
              <div>{month}</div>
              <div className="flex items-center">
                <div>{data.main.feels_like.toFixed()}°c</div>
                <img
                  alt="cloud-icon"
                  src="/Socail/moon.png"
                  className="w-12 object-cover ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white">No data available</div>
      )}
    </div>
  );
}
