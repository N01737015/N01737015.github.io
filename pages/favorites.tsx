import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import FavoritesList from '../components/FavoritesList'

// Function to load saved favorites from localStorage
function loadSavedFavorites(): string[] {
  if (typeof window === 'undefined') return [] // When server renders, window is not available
  try {
    // try to get favorites from browser local storage
    const raw = localStorage.getItem('favorites')
    // if found, parse it, else return empty array
    return raw ? JSON.parse(raw) : []
  } catch {
    // If something goes wrong, just return empty
    return []
  }
}

export default function FavoritesPage() {
  // state to store favorite items
  const [favorites, setFavorites] = useState<string[]>([])

  // run once when page loads → get favorites from localStorage
  useEffect(() => {
    setFavorites(loadSavedFavorites())
  }, [])

  // Function to clear favorites completely
  function clearFavorites() {
    localStorage.removeItem('favorites')
    setFavorites([])
  }

  return (
    <>
      <NavBar />
      <div className="page">
        <div className="card">
          <div className="link-boxes">
            <Link href="/" className="link-box">Home</Link>
            <Link href="/movies" className="link-box">Movies</Link>
            <Link href="/favorites" className="link-box">Favorites</Link>
          </div>
        </div>

        <div className="card">
          <h2>My Favorites</h2>
          <button onClick={clearFavorites} className="clear-btn">Clear Favorites</button>
          <FavoritesList favorites={favorites} />
        </div>
      </div>
    </>
  )
}
