import ArtPiecePreview from "../art-piece-preview"; /* importing ArtPiecePreview component from the art-piece-preview directory. This component is used to display a preview of an individual art piece. */

/* Renders the gallery page.
The "artPieces" array is passed as a prop from the parent component. */
export default function ArtPieces({ artPieces }) {
  return (
    <div className="gallery-page">
      <h1>Gallery Page</h1>
      {/* Maps through the artPieces array and creates a preview for each artwork */}
      <ul>
        {artPieces.map((piece) => (
          <li key={piece.slug}>
            {/* Displays a preview of the artwork. The artwork data is passed as props*/}
            <ArtPiecePreview
              title={piece.name}
              image={piece.imageSource}
              artist={piece.artist}
              slug={piece.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
