import React from "react";
import { categories } from "./data.js";

const Catagory = () => {
  return (
    <div className="mx-w-[1640px] px-4 py-2">
      <h1 className="text-orange-600 text-4xl font-bold text-center font-mono">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold items-center sm:text-xl">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
