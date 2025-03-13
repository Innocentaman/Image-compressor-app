import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import image from "./image.webp"; // Import the image from components folder

function LandingLogin() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full bg-gray-900 text-white p-8 relative">
      {/* Top Right Login Button */}
      <div className="absolute top-5 right-5">
        <button
          onClick={loginWithRedirect}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105"
        >
          Login
        </button>
      </div>

      {/* Left Section - Branding & Tagline */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-5xl font-extrabold text-blue-400">
          Aman's Image Compressor
        </h1>
        <p className="text-lg text-gray-300 italic">
          "Optimize your images effortlessly. Fast, secure, and AI-powered!"
        </p>
      </div>

      {/* Right Section - Using image.webp */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={image}
          alt="Landing Page Illustration"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default LandingLogin;
