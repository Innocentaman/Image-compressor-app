import { useAuth0 } from "@auth0/auth0-react";
import LandingLogin from "./components/LandingLogin";  // ✅ Import fixed
import ImageUpload from "./components/ImageUpload";

function App() {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white p-6">
      {isAuthenticated ? (
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          {/* Logout Button (Top Right) */}
          <div className="w-full flex justify-end">
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
            >
              Logout
            </button>
          </div>

          {/* Greeting Section */}
          <h2 className="text-3xl font-bold mb-2">
            Hello, <span className="text-blue-400">{user.name}</span> 👋  
          </h2>
          <p className="text-gray-300 italic text-lg mb-6">
            "Compress your images effortlessly with{" "}
            <span className="text-green-400 font-semibold">Aman's Image Compressor</span>!"
          </p>

          {/* Image Compressor Component */}
          <ImageUpload />
        </div>
      ) : (
        <LandingLogin />  // ✅ Now properly defined
      )}
    </div>
  );
}

export default App;
