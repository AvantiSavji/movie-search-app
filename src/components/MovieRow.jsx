// src/components/MovieRow.jsx
import React, { useRef, useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function MovieRow({ title, movies = [], onCardClick }) {
  const outerRef = useRef(); // the scrollable container
  const innerRef = useRef(); // the wide inner wrapper
  const [rowWidth, setRowWidth] = useState(0);

  useEffect(() => {
    // compute width based on number of cards (card width 160 + gap ~10)
    const cardWidth = 160;
    const gap = 10; // marginRight on each card
    const total = movies.length * (cardWidth + gap);
    setRowWidth(total);

    // Also update on window resize just in case
    const onResize = () => {
      // small reflow to ensure overflow calculation is current
      if (!outerRef.current || !innerRef.current) return;
      // no change to rowWidth needed here, but we keep it for debug if necessary
      // (this ensures the refs exist when debugging)
      // You may optionally re-calc total based on actual card size if you change CSS.
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [movies]);

  const scroll = (dir) => {
    const el = outerRef.current;
    if (!el) return;
    const amount = 180; // smaller steady scroll amount
    el.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ margin: '20px 0', animation: 'fadeInUp 0.6s ease' }}>
      {/* header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={arrowStyle} onClick={() => scroll('left')}>
            ◀
          </button>
          <button style={arrowStyle} onClick={() => scroll('right')}>
            ▶
          </button>
        </div>
      </div>

      {/* OUTER scroll container */}
      <div
        ref={outerRef}
        data-mrow-outer
        style={{
          overflowX: 'auto',
          display: 'block',
          paddingBottom: 6,
          scrollbarWidth: 'none',
          width: '100%',
        }}
      >
        {/* INNER wide wrapper that actually creates the overflow */}
        <div
          ref={innerRef}
          data-mrow-inner
          style={{
            display: 'flex',
            width: rowWidth ? `${rowWidth}px` : '100%',
            boxSizing: 'border-box',
          }}
        >
          {movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m} onClick={onCardClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

const arrowStyle = {
  padding: '6px 10px',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
  background: 'rgba(255,255,255,0.1)',
  color: 'white',
};
