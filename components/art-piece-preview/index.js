export default function ArtPiecePreview({ title, image, artist, slug }) {
  return (
    <li>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Artist: {artist}</p>
      <a href={`/art-pieces/${slug}`}>View Details</a>
    </li>
  );
}