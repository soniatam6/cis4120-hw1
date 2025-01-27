"use client";

import { useState } from "react";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-sm p-6 space-y-12 pt-12 pb-12 text-center">
        {/* City Name */}
        <h1 className="text-xl tracking-widest uppercase mb-4">Philadelphia</h1>

        {/* Current Temperature */}
        <div className="text-6xl font-bold mb-4">
          - 5<span className="text-6xl">°</span>
        </div>

        <div>
          {/* Feels Like and Outfit Ideas */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-yellow-50 rounded-lg p-4 shadow-lg">
              <p className="text-4xl font-bold">- 4°</p>
              <div className="mt-2">
                <p className="text-md font-bold mb-1">Feels Like</p>
                <p className="text-sm text-gray-600">Wind is making it colder</p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 shadow-lg">
              <div className="text-4xl">🧣</div>
              <div className="mt-2">
                <p className="text-md font-bold mb-1">Outfit Ideas</p>
                <p className="text-sm text-gray-600">Scarf, hat, and thick jacket</p>
              </div>
            </div>
          </div>

          {/* Today's Forecast */}
          <div className="bg-yellow-50 rounded-lg p-4 shadow-lg mb-6">
            <h2 className="text-lg font-bold mb-2">Today's Forecast</h2>
            <div className="flex justify-between text-sm">
              {[
                { day: "Now", temp: -5, icon: "☀️" },
                { day: "9AM", temp: -5, icon: "☀️" },
                { day: "10AM", temp: -4, icon: "☀️" },
                { day: "11AM", temp: -4, icon: "☀️" },
                { day: "12PM", temp: -4, icon: "🌤️" },
                { day: "1PM", temp: -3, icon: "🌤️" },
              ].map(({ day, temp, icon }, index) => (
                <div key={index} className="text-center">
                  <div className="">{day}</div>
                  <div className="text-yellow-500 text-xl">{icon}</div>
                  <p>{temp}°</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Forecast */}
          <div className="bg-yellow-50 rounded-lg p-4 shadow-lg mb-6">
            <h2 className="text-lg font-bold mb-2">Weekly Forecast</h2>
            <div className="flex justify-between text-sm">
              {[
                { day: "Today", temp: -4, icon: "☁️" },
                { day: "Mon", temp: -7, icon: "⛅" },
                { day: "Tue", temp: -8, icon: "☀️" },
                { day: "Wed", temp: -9, icon: "☀️" },
                { day: "Thu", temp: -3, icon: "❄️" },
                { day: "Fri", temp: -1, icon: "❄️" },
              ].map(({ day, temp, icon }, index) => (
                <div key={index} className="text-center">
                  <div className="">{day}</div>
                  <div className="text-yellow-500 text-xl">{icon}</div>
                  <p>{temp}°</p>
                </div>
              ))}
            </div>
          </div>

          {/* Show More */}
          {isExpanded && (
            <div>
              {/* Air Quality & Humidity */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-50 rounded-lg p-4 shadow-lg">
                  <p className="text-3xl font-bold">55</p>
                  <div className="mt-2">
                    <p className="text-md font-bold mb-1">Air Quality</p>
                    <p className="text-sm text-gray-600">Moderate, similar to yesterday</p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 shadow-lg">
                  <div className="text-3xl font-bold">68%</div>
                  <div className="mt-2">
                    <p className="text-md font-bold mb-1">Humidity</p>
                    <p className="text-sm text-gray-600">The dew point is -8° right now</p>
                  </div>
                </div>
              </div>

              {/* Past Weather */}
              <div className="bg-yellow-50 rounded-lg p-4 shadow-lg mb-6">
                <h2 className="text-lg font-bold mb-2">Past Weather</h2>
                <div className="flex justify-between text-sm">
                  {[
                    { day: "1/23", temp: -2, icon: "☀️" },
                    { day: "1/22", temp: 2, icon: "🌤️" },
                    { day: "1/21", temp: 3, icon: "⛅" },
                    { day: "1/20", temp: 0, icon: "☁️" },
                    { day: "1/19", temp: 4, icon: "☁️" },
                    { day: "1/18", temp: 2, icon: "🌧️" },
                  ].map(({ day, temp, icon }, index) => (
                    <div key={index} className="text-center">
                      <div className="">{day}</div>
                      <div className="text-yellow-500 text-xl">{icon}</div>
                      <p>{temp}°</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          )}

          {/* Show More Button */}
          <button
            className="w-full py-2 mt-4 bg-orange-300 rounded-lg font-semibold hover:bg-orange-400"
            onClick={handleShowMore}
          >
            {isExpanded ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>
      </div>
    </div>
  );
}
