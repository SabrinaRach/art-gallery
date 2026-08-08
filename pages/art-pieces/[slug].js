import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/art-piece-details/ArtPieceDetails";
import ColorPalette from "../../components/Color-palette/ColorPalette";

export default function ArtPiecePage({ artPieces, toggleFavorite, children }) {
  const router = useRouter();
  const { slug } = router.query;
  //prevents rendering before the URL slug is available.
  if (!router.isReady) {
    return <p>Loading...</p>;
  }
  // avoids crashes when data is still loading.
  if (!artPieces || artPieces.length === 0) {
    return <p>Loading art pieces...</p>;
  }

  const artPiece = artPieces.find((piece) => piece.slug === slug);
  //gives a clear fallback when the slug does not match any item.
  if (!artPiece) {
    return <p>Artwork not found.</p>;
  }

  return (
    <>
      <ArtPieceDetails artPiece={artPiece} toggleFavorite={toggleFavorite}>
        <ColorPalette colors={artPiece.colors ?? []} />
      </ArtPieceDetails>
    </>
  );
}
