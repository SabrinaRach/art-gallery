import { useRouter } from "next/router";
import Link from "next/link";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPiecePage({ artpieceInfo, toggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!artpieceInfo) {
    return <p>Loading...</p>;
  }

  const artPiece = artpieceInfo.find((artPiece) => artPiece.slug === slug);

  if (!artPiece) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ArtPieceDetails artPiece={artPiece} toggleFavorite={toggleFavorite} />
    </>
  );
}
