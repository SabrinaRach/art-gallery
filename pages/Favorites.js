import FavoritePieces from "@/components/Favorite-pieces";

export default function FavoritesPage({ artPieces, toggleFavorite }) {
  return (
    <FavoritePieces artPieces={artPieces} toggleFavorite={toggleFavorite} />
  );
}
