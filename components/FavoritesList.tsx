type Props = {
  favorites: string[]
}

export default function FavoritesList({ favorites }: Props) {
  if (favorites.length === 0) {
    return <p>You have no favorites yet.</p>
  }
  return (
    <ul className="favorites-list">
      {favorites.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
  )
}
