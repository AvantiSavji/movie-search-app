import React from "react";

export default function HeroBanner() {
const img = "https://wallpapers.com/images/featured/movie-poster-background-6v1ye95sl6tqxy2h.jpg";

  return (
    <div
      style={{
        position: "relative",
        height: "55vh",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          filter: "brightness(0.6)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 20,
          bottom: 40,
          maxWidth: "45%",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.8rem" }}>Welcome to MovieZone</h1>
        <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
          Explore trending movies, search for your favorites, and enjoy a Netflix-style interface.
        </p>

        <button
          style={{
            marginTop: 10,
            padding: "10px 20px",
            border: "none",
            borderRadius: 6,
            background: "white",
            color: "black",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
