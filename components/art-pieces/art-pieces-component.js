import ArtPiecePreview from "../art-piece-preview/art-piece-preview"; /* importing ArtPiecePreview component from the art-piece-preview directory. This component is used to display a preview of an individual art piece. */
import { Gallery } from "./styles";

/* Renders the gallery page.
The "artPieces" array is passed as a prop from the parent component. */
export default function ArtPieces({ artpieceInfo, toggleFavorite }) {
  return (
    <div className="gallery-page">
      <h1>Gallery Page</h1>
      {/* Maps through the artpieceInfo array and creates a preview for each artwork */}
      {/* Displays a preview of the artwork. The artwork data is passed as props*/}
      <Gallery>
        {artpieceInfo.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
            isFavorite={piece.isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </Gallery>
    </div>
  );
}