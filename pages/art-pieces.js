import ArtPieces from "@/components/art-pieces/art-pieces-component";

export default function ArtPiecesPage({ artpieceInfo, toggleFavorite }) {
  return (
    <ArtPieces artpieceInfo={artpieceInfo} toggleFavorite={toggleFavorite} />
  );
}
