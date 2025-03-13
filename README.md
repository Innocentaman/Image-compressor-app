# Image Compressor Application

**[Live Link: https://imagecompressor-by-aman.netlify.app/](https://67d31f864eb5ac24498044a8--lambent-stardust-415fb4.netlify.app/)**

Welcome to my **Image Compressor Application**, designed to efficiently reduce image file sizes while maintaining high quality. This application allows users to upload JPEG/JPG images, compress them with a custom quality setting, and download the optimized images.

## 🚀 Features

1. **Custom Compression Quality** - Users can select the desired image compression level (1-100).
2. **Fast & Efficient Processing** - Uses Sharp.js for high-speed image compression.
3. **Secure Authentication** - Users must log in using OAuth (Auth0) to access the service.
4. **User-Friendly UI** - A clean, dark-themed interface designed with Tailwind CSS for a modern look.
5. **Cloud Storage with MongoDB GridFS** - Images are stored securely on MongoDB Atlas.
6. **Download & Preview** - Compressed images are available for preview and download.
7. **Scalable & Optimized** - Designed for high performance and easy deployment.

## 🛠 Tech Stack

- **Frontend**: ReactJS (Vite) + Tailwind CSS  
- **Backend**: Node.js with Express  
- **Database**: MongoDB (GridFS for image storage)  
- **Authentication**: Auth0 OAuth  
- **Image Processing**: Sharp.js  
- **File Upload**: Multer  
- **Deployment**: Netlify (Frontend), Render (Backend)  
- **Version Control**: Git & GitHub  

---

## 🔹 How It Works

### **1️⃣ User Authentication**
- Users log in using **OAuth (Auth0)**.  
- Only authenticated users can access the compressor.

### **2️⃣ Image Upload & Compression**
- Users upload a **JPEG/JPG image**.
- The backend processes the image using **Sharp.js**, resizing it to a max width of **800px**.
- The **compression quality is adjustable (1-100)**.
- The compressed image is stored in **MongoDB GridFS**.

### **3️⃣ Download & Preview**
- Users can **preview** the compressed image before downloading.  
- The image is served via **MongoDB GridFS & Express**.

### **4️⃣ Secure & Scalable Storage**
- All images are stored securely in **MongoDB Atlas (GridFS)**.

---
