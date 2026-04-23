

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import API from "../../API/api";

export default function LoginPage({ darkMode = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        alert("Please enter both email and password");
        return;
      }

      const response = await API.post("/login", {
        email: email,
        password: password,
      });

      console.log("✅ Login successful:", response.data);

      if (response.data.token) {
        localStorage.setItem("accessToken", response.data.token);
      }

     alert("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("❌ Login error:", error.response?.data || error.message);
      alert(error.response?.data?.detail || "Login failed. Check credentials.");
    }
  };

  // 🧭 Handle Register navigation
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Backgrounds */}
      <div
        className="absolute rounded-full -top-[10%] right-[48%] z-0 md:block"
        style={{
          width: "2000px",
          height: "2000px",
          background:"linear-gradient(-45deg, rgb(213,151,71), rgb(213,151,71))",
          transform:"translateY(-50%)",
        }}
      ></div>

      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgb(213,151,71) 30%, white 70%)",
        }}
      ></div>

      <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-end px-6 md:px-0">
        
        {/* LEFT SECTION */}
        <div className="relative z-20 text-left text-white max-w-md mb-8 md:mb-0 md:absolute md:top-1/3 md:left-5 md:text-sm">
          <p className="text-lg leading-relaxed mb-4 font-medium text-center md:text-left md:w-[18rem] lg:w-auto">
            {isAdmin ? (
              <>
                This portal provides secure access to your personal records.{" "}
                Clients should use the Client Login option below to view
                professional details and hospital information.
              </>
            ) : (
              <>
                This portal provides secure access to your account. <br />
                <span className="font-semibold">Administrators and Staff</span>{" "}
                should use the Official Login option below to manage records and
                internal tools.
              </>
            )}
          </p>

          {/* Portal Switch Button */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className="bg-[rgb(250,181,101)] text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-[rgb(190,130,60)] transition"
            >
              {isAdmin ? "Client Portal" : "Admin Portal"}
            </button>

            
          </div>
        </div>

        {/* LOGIN FORM */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white shadow-md rounded-2xl p-8 w-full max-w-md md:mr-16 mb-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            {isAdmin ? "Admin Login" : "Client's Login"}
          </h2>

          {/* Email Input */}
          <input
            type="text"
            placeholder={isAdmin ? "Admin ID" : "Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(213,151,71)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(213,151,71)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white font-semibold py-2 rounded-md transition-colors"
          >
            {isAdmin ? "Login as Admin" : "Login as Client"}
          </button>

          {/* BACK TO LOGIN */}
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <a
                href="/Register"
                className="text-[rgb(213,151,71)] font-semibold hover:underline"
              >
                <span className="text-[rgb(213,151,71)]">sign up</span>
              </a>
            </p>
          </div>


          {/* Social Login */}
          {!isAdmin && (
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-3">
                Or sign in with social platforms
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
