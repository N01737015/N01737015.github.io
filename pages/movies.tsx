import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'

// function to load saved favorites from localStorage
function loadSavedFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem('favorites')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function MoviesPage() {
  const [favorites, setFavorites] = useState<string[]>([]) // state for favorites

  // load favorites when page starts
  useEffect(() => {
    setFavorites(loadSavedFavorites())
  }, [])

   // Movie data (3 categories)
  const englishMovies = ["Interstellar", "The Dark Knight", "Conjuring", "Tenet"]
  const hindiMovies = ["3 Idiots", "War", "Housefull", "Welcome"]
  const gujaratiMovies = ["Chhello Divas", "Vash", "Su Thayu", "Love Ni Bhavai"]

  // Helper to save favorites in both state + localStorage
  function saveFavorites(next: string[]) {
    setFavorites(next)
    localStorage.setItem('favorites', JSON.stringify(next))
  }

  // Add new movie if not already there
  function addToFavorites(title: string) {
    if (!favorites.includes(title)) saveFavorites([...favorites, title])
  }

  // Remove a movie
  function removeFromFavorites(title: string) {
    saveFavorites(favorites.filter((m) => m !== title))
  }

  // Renders each category section
  function renderMovieList(list: string[], heading: string) {
    return (
      <section className="movie-section">
        <h2>{heading}</h2>
        {list.map((m) => (
          <MovieCard
            key={m}
            title={m}
            isFavorite={favorites.includes(m)}
            onAdd={() => addToFavorites(m)}
            onRemove={() => removeFromFavorites(m)}
          />
        ))}
      </section>
    )
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
          {renderMovieList(englishMovies, "English Movies")}
          {renderMovieList(hindiMovies, "Hindi Movies")}
          {renderMovieList(gujaratiMovies, "Gujarati Movies")}

          <h3>Current Favorites:</h3>
          {favorites.length === 0 ? (
            <p>No movies added yet.</p>
          ) : (
            <ul>
              {favorites.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

