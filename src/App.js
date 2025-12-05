// src/App.js
import React, { useState } from "react";
import "./index.css";

import { searchMovies, getMovieById } from "./utils/api";
import SearchBar from "./components/SearchBar";
import MovieRow from "./components/MovieRow";

import HeroBanner from "./components/HeroBanner";
import { categories } from "./data/categories";

function App() {
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState(null);

  // SEARCH FUNCTION
  const doSearch = async () => {
    if (!query.trim()) return;

    const res = await searchMovies(query, 1);

    if (!res.ok || res.data.Response === "False") {
      setRows([]);
      return;
    }

    const movies = res.data.Search;

    setRows([
      { title: `Results for "${query}"`, movies },
      { title: `More Like "${query}"`, movies: movies.slice(0, 8) },
    ]);
  };

  // OPEN MOVIE MODAL
  const openMovie = async (movie) => {
    const res = await getMovieById(movie.imdbID);
    if (res.ok) setSelected(res.data);
  };

  // CLOSE MODAL
  const closeModal = () => setSelected(null);

  // HOME BUTTON LOGIC
  const goHome = () => {
    setRows([]);
    setQuery("");
  };

  return (
    <div className="app-root">

      {/* ================= HEADER ================= */}
      <header
        className="app-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 20px",
          background: "#111",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* CLICKABLE LOGO */}
        <h1
          style={{
            cursor: "pointer",
            margin: 0,
            fontSize: "1.8rem",
            color: "white",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
          onClick={goHome}
        >
          Movie Search
        </h1>

        {/* SEARCH BAR */}
        <div style={{ flexGrow: 1, maxWidth: "380px", marginLeft: "20px" }}>
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={doSearch}
          />
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main style={{ padding: "24px 20px" }}>

        {/* BEFORE SEARCH → HERO + CATEGORIES */}
        {rows.length === 0 && (
          <>
            <HeroBanner />

            {categories.map((c, index) => (
              <MovieRow
                key={index}
                title={c.title}
                movies={c.movies}
                onCardClick={openMovie}
              />
            ))}
          </>
        )}

        {/* AFTER SEARCH → SEARCH RESULTS */}
        {rows.length !== 0 && (
          <>
            {/* Back button */}
            <button
              onClick={goHome}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: "rgba(255,255,255,0.12)",
                color: "white",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              ← Back to Home
            </button>

            {rows.map((r, index) => (
              <MovieRow
                key={index}
                title={r.title}
                movies={r.movies}
                onCardClick={openMovie}
              />
            ))}
          </>
        )}
      </main>

      {/* ================= MOVIE MODAL ================= */}
      {selected && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>
              {selected.Title} ({selected.Year})
            </h2>

            <div style={{ display: "flex", gap: 20 }}>
              <img
                src={
                  selected.Poster !== "N/A"
                    ? selected.Poster
                    : "https://via.placeholder.com/300x440?text=No+Image"
                }
                alt={selected.Title}
                style={{ width: 200, borderRadius: 8 }}
              />

              <div>
                <p>
                  <strong>Genre:</strong> {selected.Genre}
                </p>
                <p>
                  <strong>Runtime:</strong> {selected.Runtime}
                </p>
                <p>
                  <strong>Plot:</strong> {selected.Plot}
                </p>
                <p>
                  <strong>IMDB Rating:</strong> {selected.imdbRating}
                </p>
              </div>
            </div>

            <button
              onClick={closeModal}
              style={{ marginTop: 16 }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
