import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import FavoritesList from '../components/FavoritesList'

function loadSavedFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem('favorites')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    setFavorites(loadSavedFavorites())
  }, [])

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
