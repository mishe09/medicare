import React, { useState } from "react";
import {
    ChevronRight,
} from "lucide-react";

const Pharmacylisting = ({ darkMode, setDarkMode }) => {

  return (
    <>

      <div className="flex justify-between items-center mb-5">

        <h1 className="text-lg font-semibold">Pharmacy List</h1>

        <div className="flex items-center gap-2">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={16} />
          </p>
          <p>Pharmacy List</p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { img: "/Home-assets/product-1.jpg", name: "Dettol", price: "$40.00" },
          { img: "/Home-assets/product-2.jpg", name: "Nicotex", price: "$10.00" },
          { img: "/Home-assets/product-3.jpg", name: "Pulse Oximeter", price: "$12.00" },
          { img: "/Home-assets/product-4.jpg", name: "Sanitizer", price: "$20.00" },
          { img: "/Home-assets/product-5.jpg", name: "Stethoscope", price: "$50.00" },
          { img: "/Home-assets/product-6.jpg", name: "Thermometer", price: "$40.00" },
        ].map((product, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md p-4 flex flex-col transition-all duration-300
              ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-[rgb(213,151,71)] hover:text-white"
                  : "bg-white text-gray-700 hover:bg-[rgb(213,151,71)] hover:text-white"
              }`}
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-60 object-contain rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-[rgb(213,151,71)] font-bold text-sm">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pharmacylisting;
