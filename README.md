## 📽️ Movie Search App (Netflix-style UI)

A modern **Movie Search Web Application** built using **React.js**, inspired by Netflix’s UI.
The app allows users to browse curated movie categories, search for movies using the **OMDb API**, and view detailed information in a clean modal interface.

🔗 **Live Demo:**
👉 *https://movie-search-app-mu-blond.vercel.app/* 

---

## 🚀 Features

### 🎬 Homepage (Netflix-style)

* Hero Banner with welcome message
* Horizontally scrollable movie rows
* Predefined movie categories:

  * Trending Now
  * Action Movies
  * Romantic Movies
  * Sci-Fi & Fantasy
* Smooth hover animations and arrow navigation

### 🔍 Movie Search

* Search movies by title using **OMDb API**
* Displays:

  * Movie poster
  * Title
  * Year
  * Type (movie/series)
* Results update instantly without page reload

### 🪟 Movie Details Modal

* Click on any movie card to view:

  * Poster
  * Genre
  * Runtime
  * Plot
  * IMDb Rating
* Modal closes on outside click or close button

### 🏠 Navigation

* Click **Movie Search** logo to return to homepage
* “Back to Home” button after search results
* Seamless navigation without routing

### ☁️ Deployment

* Deployed on **Vercel**
* Environment variables handled securely
* Public, shareable live link

---

## 🛠️ Tech Stack

| Technology            | Usage                  |
| --------------------- | ---------------------- |
| **React.js**          | UI development         |
| **JavaScript (ES6+)** | Logic & state handling |
| **CSS**               | Styling & animations   |
| **OMDb API**          | Movie data             |
| **Git & GitHub**      | Version control        |
| **Vercel**            | Deployment             |

---

## 📁 Project Structure

```
movie-search-app/
│
├── src/
│   ├── components/
│   │   ├── HeroBanner.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieRow.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── data/
│   │   └── categories.js
│   │
│   ├── utils/
│   │   └── api.js
│   │
│   ├── App.js
│   └── index.css
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

This project uses the **OMDb API**, which requires an API key.

### ⚠️ Important Notes

* `.env` file is **NOT committed** to GitHub
* Environment variable is added securely in **Vercel Dashboard**
* `.env` is included in `.gitignore`

---

## 🧑‍💻 Getting Started Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AvantiSavji/movie-search-app.git
cd movie-search-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

### 4️⃣ Start development server

```bash
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🌐 Deployment

The project is deployed using **Vercel**.

### Steps followed:

1. Pushed code to GitHub
2. Imported repository into Vercel
3. Added environment variables in Vercel settings
4. Deployed with one click

---

