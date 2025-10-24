import React from "react";

import {
  ChevronRight,
} from "lucide-react";


const CartPage = ({ darkMode }) => {
  const products = [
    { img: "/Home-assets/product-1.jpg", name: "Dettol", price: "$40.00" },
    { img: "/Home-assets/product-2.jpg", name: "Nicotex", price: "$10.00" },
    { img: "/Home-assets/product-3.jpg", name: "Pulse Oximeter", price: "$12.00" },
    { img: "/Home-assets/product-4.jpg", name: "Sanitizer", price: "$20.00" },
  ];

  return (
    <>
   
    <div className="flex justify-between items-center mb-5">

        <h1 className="text-lg font-semibold">Cart</h1>

        <div className="flex items-center gap-2">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={16} />
          </p>
          <p>Cart</p>
        </div>
      </div>

    {/* <div
      className={`w-[98%] mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-6 px-3 sm:px-4 md:px-6 py-6 transition-colors duration-300 ${darkMode ? "text-gray-100" : "text-gray-800"
        }`}
    > */}

    <div
  className={`w-[100%] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-2 sm:px-6 md:px-10 py-8 transition-colors duration-300 ${
    darkMode ? "text-gray-100" : "text-gray-800"
  }`}
>


      
      {/* 🛒 Cart Table */}
      <div
        className={`rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-[950px] overflow-hidden transition-colors duration-300 ${darkMode ? "bg-gray-800/80 border border-gray-700" : "bg-white border border-gray-200"
          }`}
      >
        <h2
          className={`text-2xl font-semibold mb-4 text-center md:text-left ${darkMode ? "text-gray-100" : "text-gray-800"
            }`}
        >
          Shopping Cart
        </h2>

        <div className="overflow-x-auto">
          <table
            className={`w-full border-collapse text-sm sm:text-base ${darkMode ? "border-gray-700" : "border-gray-300"
              }`}
          >
            <thead>
              <tr
                className={`${darkMode ? "bg-yellow-500 text-gray-900" : "bg-yellow-400 text-gray-900"
                  }`}
              >
                <th className="py-3 px-2 sm:px-4 border border-gray-300 text-left">Product</th>
                <th className="py-3 px-2 sm:px-4 border border-gray-300 text-left">Price</th>
                <th className="py-3 px-2 sm:px-4 border border-gray-300 text-left">Qty</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className={`transition-colors ${darkMode
                      ? "border border-gray-700 hover:bg-gray-700/50"
                      : "border border-gray-300 hover:bg-gray-100/60"
                    }`}
                >
                  <td className="flex items-center gap-3 sm:gap-4 py-3 px-2 sm:px-4 border-r border-gray-300">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover border border-gray-300"
                    />
                    <span
                      className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                    >
                      {product.name}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-2 sm:px-4 border-r ${darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    {product.price}
                  </td>
                  <td className="py-3 px-2 sm:px-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        className={`border rounded-md px-2 py-1 transition-all duration-200 ${darkMode
                            ? "border-gray-600 text-black hover:bg-gray-700"
                            : "border-gray-300 text-gray-600 hover:bg-gray-100"
                          }`}
                      >
                        -
                      </button>
                      <span className="text-yellow-500 font-semibold text-sm sm:text-base">1</span>
                      <button
                        className={`border rounded-md px-2 py-1 transition-all duration-200 ${darkMode
                            ? "border-gray-600 text-black hover:bg-gray-700"
                            : "border-gray-300 text-gray-600 hover:bg-gray-100"
                          }`}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {/* 🧾 Order Summary */}
      <div
        className={`rounded-2xl shadow-lg p-6 w-full md:w-1/4 h-fit self-start transition-colors duration-300 ${darkMode ? "bg-gray-800/80 border border-gray-700" : "bg-white border border-gray-200"
          }`}
      >
        <h3
          className={`text-xl font-semibold mb-4 ${darkMode ? "text-gray-100" : "text-gray-800"
            }`}
        >
          Order Summary
        </h3>

        <div
          className={`flex justify-between mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          <span>Subtotal</span>
          <span>$82.00</span>
        </div>
        <div
          className={`flex justify-between mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          <span>Taxes</span>
          <span>$4.10</span>
        </div>
        <hr className={`my-2 ${darkMode ? "border-gray-700" : "border-gray-300"}`} />
        <div
          className={`flex justify-between font-semibold text-lg mb-4 ${darkMode ? "text-gray-100" : "text-gray-800"
            }`}
        >
          <span>Total</span>
          <span>$86.10</span>
        </div>

        <button
          className={`font-semibold w-full py-3 rounded-xl shadow-md transition-all duration-200 ${darkMode
              ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
              : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
            }`}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
     </>

  );
};

export default CartPage;
