import FavoritePieces from "@/components/Favorite-pieces";

export default function FavoritesPage({ artpieceInfo, toggleFavorite }) {
  return <FavoritePieces artPieces={artpieceInfo} toggleFavorite={toggleFavorite} />;
}