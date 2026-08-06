
export function IsFavoriteButton({ slug, isFavorite, onToggle }) {

return (
    <Button onClick={() => onToggle(slug)}>
        {isFavorite ? "Unlike" : "Like"}
    </Button>
)