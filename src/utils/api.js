// src/utils/api.js
// Small, focused helper to call the OMDb API from the app.
// Exports two functions: searchMovies(query, page) and getMovieById(imdbID).

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE = 'https://www.omdbapi.com/';

// A helper to make GET requests and normalize errors
async function request(url) {
  try {
    const res = await fetch(url);
    // Network-level failures will throw before this point (except older browsers/polyfills)
    if (!res.ok) {
      // res.status might be 401/403/500 etc.
      throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    return { ok: true, data };
  } catch (err) {
    // Return a consistent error object so caller can handle it without try/catch if desired.
    return { ok: false, error: err.message || String(err) };
  }
}

/**
 * Search movies by a query string (OMDb "s" search).
 * Returns an object:
 *  - on success: { ok: true, data } where data is OMDb JSON (may contain Search: [...], totalResults, Response)
 *  - on failure: { ok: false, error: "message" }
 */
export async function searchMovies(query, page = 1) {
  if (!query || !query.trim()) {
    return { ok: true, data: { Search: [], totalResults: "0", Response: "False" } };
  }
  const url = `${BASE}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
  return await request(url);
}

/**
 * Get full movie details by imdbID (OMDb "i" endpoint)
 * Example: getMovieById('tt0133093')
 */
export async function getMovieById(imdbID) {
  if (!imdbID) return { ok: false, error: 'Missing imdbID' };
  const url = `${BASE}?apikey=${API_KEY}&i=${encodeURIComponent(imdbID)}&plot=full`;
  return await request(url);
}
