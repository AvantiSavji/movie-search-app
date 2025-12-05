// src/components/SearchBar.jsx
import React from 'react';

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); //Stops the browser from refreshing the page
        onSubmit(); //Calls the function that App.js gave us.
      }}
      style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        width: '100%',
      }}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies (e.g., 'inception')"
        style={{
          flex: 1,
          padding: '10px 12px',
          borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.07)',
          color: 'white',
          outline: 'none',
          fontSize: 16,
        }}
      />

      <button
        type="submit"
        style={{
          padding: '10px 14px',
          borderRadius: 8,
          border: 'none',
          cursor: 'pointer',
          background: 'rgba(255,255,255,0.15)',
          color: 'white',
          fontSize: 15,
        }}
      >
        Search
      </button>
    </form>
  );
}
