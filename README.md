# Movie Streaming Platform MERN Stack 🎬

![ScreenShot](/frontend/public/Project%20Image.jpg)

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Project Structure](#project-structure)
  - [Frontend (React.js)](#frontendreactjs)
  - [Backend (Node.js/Express.js)](#backend-nodejsexpressjs)
- [How to Use](#how-to-use)
- [Author](#author)

## Overview

This project is a **Movie Streaming Platform** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js).** It mimics the core functionalities of popular video streaming platforms, allowing users to sign up, log in, view trending movies and TV shows, watch trailers, search for actors and movies, and keep a search history. All functionalities are authenticated using **JWT (JSON Web Token).**

The application also features a responsive UI, optimized for desktop, tablet, and mobile devices. Users can navigate through the application, watch videos, and view detailed information about movies or TV shows, and manage their search history.

<u>Login</u>
<br>
**email:** abc@mail.com<br>
**password:** 123123

### Key Features

- 🔐 User authentication with JWT (JSON Web Token)
- 🎬 Fetch and display movies & TV shows (Now Playing, Top Rated, Popular, Upcoming categories)
- 🔎 Search for movies, TV shows, and actors
- 📱 Fully responsive UI (Desktop, Tablet, Mobile)
- 🎥 Watch movie trailers directly on the platform
- 📜 Search history tracking (and management)
- 🐱‍👤 Recommendations of similar movies/TV shows
- 💙 Landing page design with smooth shimmer effect animations and video integration
- 💾 Fullstack MERN implementation with secure backend routes

## Tech Stack

### Frontend:

- **React.js**: Used for building the dynamic, responsive user interface.
- **React Router:** For navigation and routing between different pages in the application.
- **Axios:** For making HTTP requests to the backend API.
- **Lucide React:** Icon library used to display icons.
- **Zustand:** A small, fast state management library used to manage global state in the app.
- **React Player:** Used for embedding and playing videos like movie trailers.
- **Tailwind CSS:** A utility-first CSS framework used for responsive design and styling.
- **React Hot Toast:** For showing notifications, such as errors and success messages.

### Backend:

- **Node.js:** Used as the runtime environment for running the backend server.
- **Express.js:** A lightweight web application framework for handling routes, middleware, and API logic.
- **MongoDB:** NoSQL database for storing user data, movie information, and search history.
- **Mongoose:** ODM (Object Data Modeling) library for interacting with MongoDB from Node.js.
- **bcryptjs:** For hashing passwords securely.
- **jsonwebtoken (JWT):** For handling user authentication securely.
- **Cookie-Parser:** Middleware for handling cookies, particularly for storing JWT tokens.

## Project Structure

### Frontend(React.js)

- **Pages:**
  - `HomePage:` Displays trending movies or TV shows, allows users to play trailers or view more information.
  - `LoginPage:` Handles user login.
  - `SignUpPage:` Handles user registration.
  - `WatchPage:` Displays movie details and allows users to watch trailers.
  - `SearchPage:` Handles the search functionality for movies, TV shows, and actors.
  - `SearchHistoryPage:` Displays the user's search history and provides options to delete individual entries or clear all history.
  - `NotFoundPage:` Custom 404 page for unknown routes.
- **Components:**
  - `Footer:` Displays a simple footer.
  - `Navbar:` Includes links for navigation.
  - `MovieSlider:` Displays movie or TV show lists in a slider format.
- **State Management**
  - `authStore:` Handles user authentication state using Zustand.
  - `contentStore:` Manages the current content type (movie or TV show) being displayed.

### Backend (Node.js/Express.js)

- Routes:
  - `authRoutes:` Handles user authentication (signup, login, etc.).
  - `movieRoutes:` Fetches movie-related data (protected).
  - `tvRoutes:` Fetches TV show-related data (protected).
  - `searchRoutes:` Handles searching for movies, TV shows, or actors (protected).
- Controllers:
  - Implements the business logic for each of the routes (e.g., login, signup, fetch movie details).
- Middleware:
  - `authMiddleware:` Protects routes by ensuring that the user is authenticated using JWT.

## How to Use

1. **Sign Up:** Create a new account with an email and password.
2. **Login:** Log in with your email and password.
3. **Browse Movies:** View trending movies, top-rated, upcoming, and more.
4. **Search:** Search for movies, TV shows, or actors.
5. **Watch Trailers:** Watch trailers of selected movies or TV shows.
6. **Manage Search History:** View or delete search history.
7. **Logout:** Log out from the app securely.

## Author

This project was developed by [ersinisgor](https://ersinisgor.netlify.app/).
