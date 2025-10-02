// small card for one movie
type Props = {
  title: string
  isFavorite: boolean
  onAdd: () => void
  onRemove: () => void
}

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

