// Props for MovieCard (title, isFavorite, and functions)
type Props = {
  title: string
  isFavorite: boolean
  onAdd: () => void
  onRemove: () => void
}

// One small card for a movie
export default function MovieCard({ title, isFavorite, onAdd, onRemove }: Props) {
  return (
    <div className="movie-card">
      <div className="movie-title">{title}</div>
      <div>
        {isFavorite ? (
          <button onClick={onRemove}>Remove from Favorites</button>
        ) : (
          <button onClick={onAdd}>Add to Favorites</button>
        )}
      </div>
    </div>
  )
}

