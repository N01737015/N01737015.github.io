// Props type means this component expects a list of strings
type Props = {
  favorites: string[]
}

// Simple component that shows the list
export default function FavoritesList({ favorites }: Props) {

  // if no favorites, show message
  if (favorites.length === 0) {
    return <p>You have no favorites yet.</p>
  }

  // else, show list
  return (
    <ul className="favorites-list">
      {favorites.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
  )
}
