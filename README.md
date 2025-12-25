# 📝 MegaBlog - Full Stack Blogging Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A production-grade blogging platform built with React and Appwrite. This application features a rich text editor, real-time slug generation, and a fully functional authentication system using Redux for state management.

---

## ✨ Key Features

-   **Authentication:** Secure Login/Signup flow using Appwrite Auth.
-   **Real-time Editor:** Integrated **TinyMCE** for rich text editing (bold, italics, lists, images).
-   **Image Uploads:** Drag-and-drop support for featured images using Appwrite Buckets.
-   **Dynamic Routing:** SEO-friendly URLs with auto-generated slugs.
-   **Protected Routes:** `AuthLayout` wrapper ensures only logged-in users can add/edit posts.
-   **State Management:** Centralized user status and post data using **Redux Toolkit**.
-   **Performance:** Optimized with React Hook Form for handling complex form inputs without unnecessary re-renders.

---

## 🛠️ Tech Stack

-   **Frontend:** React.js (Vite), Tailwind CSS
-   **Backend:** Appwrite (Backend-as-a-Service)
-   **State Management:** Redux Toolkit
-   **Forms:** React Hook Form
-   **Editor:** TinyMCE
-   **Routing:** React Router DOM (v6) with `createBrowserRouter`

---

## ⚙️ Environment Variables

To run this project locally, you need to add the following environment variables to your `.env` file in the root directory.

```bash
VITE_APPWRITE_URL=""
VITE_APPWRITE_PROJECT_ID=""
VITE_APPWRITE_DATABASE_ID=""
VITE_APPWRITE_COLLECTION_ID=""
VITE_APPWRITE_BUCKET_ID=""
