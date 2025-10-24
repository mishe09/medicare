
import React, { useState } from "react";
import {
    ChevronRight,
} from "lucide-react";

const Checkout = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`min-h-screen p-4 sm:p-1 transition-colors duration-300 ${
        darkMode ? "text-gray-200" : "text-gray-800"
      }`}
    >

       <div className="flex justify-between items-center mb-5">

                    <h1 className="text-lg font-semibold">Checkout</h1>

                    <div className="flex items-center gap-2">
                        <p className="flex items-center text-[rgb(213,151,71)] gap-1">
                            TrendX <ChevronRight size={16} />
                        </p>
                        <p>Checkout</p>
                    </div>
                </div>

     <div
  className={`w-[98%] mx-auto rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 transition-colors duration-300 ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
>

        {/* 🧍 Billing Section */}
        <div className="flex-1">
          <h2
            className={`text-2xl font-semibold mb-6 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Billing Address
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "firstName",
              "lastName",
              "email",
              "address",
              "country",
              "city",
              "state",
              "zip",
            ].map((field) => (
              <div
                key={field}
                className={`${
                  ["email", "address"].includes(field) ? "md:col-span-2" : ""
                }`}
              >
                <label className="block text-sm font-medium mb-1 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "zip"
                      ? "number"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-[rgb(213,151,71)] focus:outline-none transition-colors duration-300 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-300"
                      : "bg-white border-gray-300 text-gray-800"
                  }`}
                />
              </div>
            ))}
          </form>

          <div className="mt-4 space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="accent-[rgb(213,151,71)]"
              />
              Shipping address is the same as my billing address
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="accent-[rgb(213,151,71)]"
              />
              Save this information for next time
            </label>
          </div>

          <button className="mt-6 bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white py-3 px-6 rounded-lg transition">
            Continue to Payment
          </button>
        </div>

        {/* 🛍️ Order Summary */}
        <div
          className={`w-full md:w-1/3 rounded-lg p-6 border transition-colors duration-300 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-gray-200"
              : "bg-gray-50 border-gray-200 text-gray-800"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Your Order
          </h3>

          <div className="border-b pb-3 mb-3 border-gray-500/40">
            <div className="flex justify-between text-sm">
              <p>1x Medical Hand Sanitizer (500ml)</p>
              <span className="font-semibold">$99.00</span>
            </div>
            <p className="text-xs opacity-70 mt-1">
              Antibacterial Hand Sanitizer
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <span>$15.00</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2 border-gray-500/40">
              <p>Total</p>
              <span>$114.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
