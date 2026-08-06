import { Gallery } from "@/components/art-pieces/styles";
import ArtPiecePreview from "../art-piece-preview/art-piece-preview"; /* importing ArtPiecePreview component from the art-piece-preview directory. This component is used to display a preview of an individual art piece. */

export default function FavoritePieces({ artPieces, toggleFavorite }) {
 const favoritePieces = artPieces.filter((artPiece) => artPiece.isFavorite);
  return (
     <div className="gallery-page">
      <h1>Favorites Page</h1>
      {/* Maps through the artPieces array and creates a preview for each artwork */}
      {/* Displays a preview of the artwork. The artwork data is passed as props*/}
      <Gallery>
        {favoritePieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
            toggleFavorite={toggleFavorite} // Passes a function to toggle the favorite status of the artwork
            isFavorite={piece.isFavorite} // Passes the favorite status of the artwork
          />
        ))}
      </Gallery>
    </div>
  );
}