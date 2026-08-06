// Creates a component that displays a preview of a single artwork.
// Receives artwork information as props.

export default function ArtPiecePreview({ title, image, artist, slug }) {
  return (
    <li>
      <h2>{title}</h2>
      <img width={300} height={400} src={image} alt={title} />
      <p>Artist: {artist}</p>
      {/* Links to the artwork detail page */}
      <a href={`/art-pieces/${slug}`}>View Details</a>
    </li>
  );
}
