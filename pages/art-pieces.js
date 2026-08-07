import ArtPieces from "@/components/art-pieces/art-pieces-component";

export default function ArtPiecesPage({ artPieces, toggleFavorite }) {
  return <ArtPieces artPieces={artPieces} toggleFavorite={toggleFavorite} />;
}
