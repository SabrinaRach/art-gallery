import { Gallery } from "../art-pieces/styles";
import ArtPiecePreview from "../art-piece-preview/art-piece-preview"; /* importing ArtPiecePreview component from the art-piece-preview directory. This component is used to display a preview of an individual art piece. */

export default function FavoritePieces({ artPieces, toggleFavorite }) {
  if (!Array.isArray(artPieces) || artPieces.length === 0) {
    return <p>No favorite artwork yet.</p>;
  }
  const favoritePieces = artPieces.filter((artPiece) => artPiece.isFavorite);
  return (
    <div className="gallery-page">
      <h1>FAVORITE ARTWORK</h1>
      {/* Maps through the artPieces array and creates a preview for each artwork */}
      {/* Displays a preview of the artwork. The artwork data is passed as props*/}
      <Gallery>
        {favoritePieces.map((piece) => {
          const dimensions = piece.dimensions || { width: 800, height: 600 };

          return (
            <ArtPiecePreview
              key={piece.slug || piece.name || Math.random()}
              title={piece.name || "Untitled"}
              image={piece.imageSource || "/images/fallback.png"}
              artist={piece.artist || "Unknown artist"}
              slug={piece.slug || ""}
              width={dimensions.width}
              height={dimensions.height}
              toggleFavorite={toggleFavorite}
              isFavorite={piece.isFavorite}
            />
          );
        })}
      </Gallery>
    </div>
  );
}
