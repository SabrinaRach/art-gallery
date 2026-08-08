import { useRouter } from "next/router";
import Link from "next/link";
import ArtPieceDetails from "../../components/art-piece-details/ArtPieceDetails";
import ColorPalette from "../../components/Color-palette/ColorPalette";

export default function ArtPiecePage({ artPieces, toggleFavorite, children }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!artPieces) {
    return <p>Loading...</p>;
  }

  const artPiece = artPieces.find((artPiece) => artPiece.slug === slug);

  if (!artPiece) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ArtPieceDetails artPiece={artPiece} toggleFavorite={toggleFavorite}>
      <ColorPalette colors={artPiece.colors ?? []} /> 
      </ArtPieceDetails>
    </>
  );
}
