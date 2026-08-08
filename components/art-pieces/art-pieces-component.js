import ArtPiecePreview from "../art-piece-preview/art-piece-preview"; /* importing ArtPiecePreview component from the art-piece-preview directory. This component is used to display a preview of an individual art piece. */
import { Gallery } from "./styles";

/* Renders the gallery page.
The "artPieces" array is passed as a prop from the parent component. */

export default function ArtPieces({ artPieces, toggleFavorite }) {
  // If artPieces is not loaded yet, render a fallback message
  if (!Array.isArray(artPieces) || artPieces.length === 0) {
    return <p>No art pieces available.</p>;
  }

  return (
    <div className="gallery-page">
      <h1>ART GALLERY</h1>
      {/* Maps through the artpieceInfo array and creates a preview for each artwork */}
      {/* Displays a preview of the artwork. The artwork data is passed as props*/}
      <Gallery>
        {/*fallback values keep the UI stable even if one item is partially missing*/}
        {artPieces.map((piece) => {
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
              isFavorite={piece.isFavorite}
              toggleFavorite={toggleFavorite}
            />
          );
        })}
      </Gallery>
    </div>
  );
}
