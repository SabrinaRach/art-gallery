import Image from "next/image";
import { Artwork } from "./styles";

// Creates a component that displays a preview of a single artwork.
// Receives artwork information as props.

export default function ArtPiecePreview({
  title,
  image,
  artist,
  slug,
  width,
  height,
}) {

    const hash = [...slug].reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0
  );

  const colSpan = 2 + (hash % 4);
  const rowSpan = 10 + (hash % 12);

  return (
    <Artwork $colSpan={colSpan} $rowSpan={rowSpan}>
      
      <Image src={image} alt={title} width={width} height={height} 
      style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}/>
        <h2>{title}</h2>
      <p>Artist: {artist}</p>
      {/* Links to the artwork detail page */}
      <a href={`/art-pieces/${slug}`}>View Details</a>
    </Artwork>
  );
}
