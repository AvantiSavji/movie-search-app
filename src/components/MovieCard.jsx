// src/components/MovieCard.jsx
import React from 'react';

export default function MovieCard({ movie, onClick }) {
  const poster =
    movie.Poster && movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://via.placeholder.com/300x440?text=No+Image';

  return (
    <div
      onClick={() => onClick(movie)}
      style={{
        width: 160,
        marginRight: 10,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
        borderRadius: 10,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.07)';
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.5)';
      }}
    >
      <div
        style={{
          width: '100%',
          paddingTop: '150%',
          backgroundImage: `url(${poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 10,
          overflow: 'hidden',
        }}
      />

      <div style={{ marginTop: 8 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{movie.Title}</div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>
          {movie.Year} • {movie.Type}
        </div>
      </div>
    </div>
  );
}
