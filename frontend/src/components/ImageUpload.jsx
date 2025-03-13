import { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState(60);
  const [imageId, setImageId] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("quality", quality);

    try {
      const res = await axios.post("https://image-compressor-deploy.onrender.com/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImageId(res.data.fileId);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg border border-gray-700 text-center">
      {/* Stylish Heading */}
      <h2 className="text-3xl font-extrabold text-gray-100 mb-4 tracking-wide">
        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Image Compressor
        </span>
      </h2>

      {/* File Input */}
      <label className="block w-full text-center bg-gray-700 text-gray-300 py-3 px-4 rounded-md cursor-pointer hover:bg-gray-600 transition">
        <span>{file ? file.name : "Choose an image (JPEG, JPG)"}</span>
        <input type="file" accept="image/jpeg, image/jpg" onChange={(e) => setFile(e.target.files[0])} className="hidden" />
      </label>

      {/* Quality Input (Now Centered + Guide Text) */}
      <div className="flex flex-col items-center gap-1 mt-4">
        <label className="text-gray-300 font-semibold">Quality:</label>
        <input
          type="number"
          min="1"
          max="100"
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          className="border border-gray-600 bg-gray-700 text-white rounded-md px-3 py-2 w-24 text-center focus:ring focus:ring-blue-400 outline-none"
        />
        <span className="text-gray-400 text-sm">Choose between 1 to 100</span>
      </div>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105 mt-4"
      >
        Upload
      </button>

      {/* Compressed Image Display */}
      {imageId ? (
  <div className="mt-6 flex flex-col items-center justify-center text-center">
    <h3 className="text-lg font-semibold text-gray-200 mb-2">Compressed Image:</h3>
    
    <img
      src={`https://image-compressor-deploy.onrender.com/api/image/${imageId}`}
      alt="Compressed"
      className="w-full max-w-xs rounded-lg shadow-lg border border-gray-600"
      onError={() => console.error("Failed to load compressed image.")}
    />
    
    <a
      href={`https://image-compressor-deploy.onrender.com/api/image/${imageId}`}
      download
      className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mt-4 shadow-md transition duration-300 transform hover:scale-105"
    >
      Download
    </a>
  </div>
) : (
  <p className="text-gray-400 mt-4 text-center">Waiting for image...</p>
)}


    </div>
  );
}

export default ImageUpload;
