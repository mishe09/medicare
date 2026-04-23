
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import axios from "axios";

export default function Register({ darkMode = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !firstName || !lastName) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://173.212.193.239:8004/api/register",
        {
          // ✅ include all required backend fields
          first_name: firstName,
          last_name: lastName,
          name: `${firstName} ${lastName}`, // 👈 Fixes SQL "name" error
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("✅ Registration successful:", response.data);
      alert("Registration successful! Please log in.");
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "❌ Registration error:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.error?.message +
          "\n\nDetails: " +
          JSON.stringify(error.response?.data?.error?.details, null, 2)
      );
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* BACKGROUND DESIGN */}
      <div
        className="absolute rounded-full -top-[10%] right-[48%] z-0 md:block"
        style={{
          width: "2000px",
          height: "2000px",
          background: "linear-gradient(-45deg, rgb(213,151,71), rgb(213,151,71))",
          transform: "translateY(-50%)",
        }}
      ></div>

      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          background: "linear-gradient(180deg, rgb(213,151,71) 30%, white 70%)",
        }}
      ></div>

      {/* CONTENT */}
      <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-end px-6 md:px-0">
        {/* LEFT SECTION */}
        <div className="relative z-20 text-left text-white max-w-md mb-8 md:mb-0 md:absolute md:top-1/3 md:left-5 md:text-sm">
          <p className="text-lg leading-relaxed mb-4 font-medium text-center md:text-left md:w-[18rem] lg:w-auto">
            {isAdmin ? (
              <>
                Create a secure account as an <b>Administrator</b> or <b>Staff Member</b>.<br />
                You’ll be able to manage client data, hospital operations, and internal tools.
              </>
            ) : (
              <>
                Welcome to our client registration portal.<br />
                Create your account to access your medical records and manage your appointments securely.
              </>
            )}
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className="mt-3 bg-[rgb(250,181,101)] text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-[rgb(190,130,60)] transition"
            >
              {isAdmin ? "Switch to Client Portal" : "Switch to Admin Portal"}
            </button>
          </div>
        </div>

        {/* REGISTER FORM */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white shadow-md rounded-2xl p-8 w-full max-w-md md:mr-16 mb-10"
        >
          <h2 className="text-xl font-bold mb-5 text-center text-gray-800">
            {isAdmin ? "Admin Registration" : "Client Registration"}
          </h2>

          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(213,151,71)]"
          />

          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(213,151,71)]"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(213,151,71)]"
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(213,151,71)]"
          />

          <button
            type="submit"
            className="w-full bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white font-semibold py-2 rounded-md transition-colors"
          >
            {isAdmin ? "Register as Admin" : "Register as Client"}
          </button>

          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[rgb(213,151,71)] font-semibold hover:underline"
              >
                <span className="text-[rgb(213,151,71)]">Back to Login</span>
              </a>
            </p>
          </div>

          {!isAdmin && (
            <div className="text-center mt-5">
              <p className="text-gray-600 mb-3 text-sm">
                Or sign up using social platforms
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
