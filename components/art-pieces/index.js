import ArtPiecePreview from '../art-piece-preview';

export default function ArtPieces({ pieces }) {
return (
  <div className="gallery-page">
    <h1>Gallery Page</h1>
  </div>
  <ul>
  {pieces.map((piece) => (
    <li key={piece.slug}>
        <ArtPiecePreview
          title={piece.name}
          image={piece.imageSource}
          artist={piece.artist}
          slug={piece.slug}
        />
    </li>
  ))}
 </ul>

);
}