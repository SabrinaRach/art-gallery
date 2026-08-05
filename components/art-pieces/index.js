import ArtPiecePreview from '../art-piece-preview';

export default function ArtPieces({ pieces }) {
return (
  <div className="gallery-page">
    <h1>Gallery Page</h1>
  </div>
    <li>
        title={piece.name}
        image={piece.imageSource}
        artist={piece.artist}
        slug={piece.slug} 
    </li>
);
}