import React, { useState, useEffect } from "react";
import { ChevronRight, Star, Minus, Plus } from "lucide-react";

const Pharmacydetailing = ({ darkMode, setDarkMode }) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const product = {
    title: "Dettol Antiseptic Liquid",
    price: "$99.00",
    reviews: 100,
    rating: 4,
    description:
      "Dettol Antiseptic Liquid provides protection against germs that cause infection and illness. It can be used for first aid, personal hygiene, and household disinfection.",
    images: [
      "/Home-assets/product-1.jpg",
      "/Home-assets/product-3.jpg",
      "/Home-assets/product-5.jpg",
    ],
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <>
      {/* 🧭 Breadcrumb Header */}
      <div className="flex justify-between items-center mb-5 px-8">
        <h1 className="text-lg font-semibold">Detail</h1>
        <div className="flex items-center gap-2">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={16} />
          </p>
          <p>Detail</p>
        </div>
      </div>

      {/* 🧴 Product Details Section */}
        <div
            className={`rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-300
              ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700"
              }`}
          >
        {/* 🖼️ Auto Sliding Image Display */}
        <div className="flex items-center justify-center">
          <div className="border-2 border-[rgb(213,151,71)] rounded-2xl p-4 shadow-md bg-white w-[300px] h-[300px] flex items-center justify-center">
            <img
              src={product.images[currentImage]}
              alt="Product"
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
        </div>

        {/* 📋 Product Info */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-[rgb(213,151,71)] font-bold text-xl">
            {product.price}
          </p>

          {/* ⭐ Rating */}
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                fill={i < product.rating ? "rgb(213,151,71)" : "none"}
                stroke="rgb(213,151,71)"
              />
            ))}
            <span className="text-gray-600 text-sm">
              {product.reviews} reviews
            </span>
          </div>

          {/* 🧾 Overview */}
          <div>
            <h3 className="font-semibold mb-1 text-lg">Overview</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* 🔢 Quantity */}
          <div className="flex items-center space-x-3 mt-3">
            <span className="font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={decrease}
                className="px-3 py-1 hover:bg-gray-100 text-gray-700"
              >
                <Minus size={14} />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increase}
                className="px-3 py-1 hover:bg-gray-100 text-gray-700"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* 🛒 Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-[rgb(213,151,71)] text-white px-6 py-2 rounded-lg font-medium hover:bg-[rgb(190,130,60)] transition">
              Shop Now
            </button>
            <button className="border border-[rgb(213,151,71)] text-[rgb(213,151,71)] px-6 py-2 rounded-lg font-medium hover:bg-[rgb(213,151,71)] hover:text-white transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <h3 className="mt-10 font-semibold text-xl">Related Product : </h3>

      {/* 🛍️ Product Listing Grid */}
      <div className="px-8 mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

export default Pharmacydetailing;
