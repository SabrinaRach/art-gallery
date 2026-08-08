import Image from "next/image";
import Link from "next/link";
import { Artwork } from "./styles";
import FavoriteButton from "../favorite-button/favorite-button.js"; /* importing FavoriteButton component from the favorite-button directory. This component is used to allow users to mark an art piece as a favorite. */

// Creates a component that displays a preview of a single artwork.
// Receives artwork information as props.

export default function ArtPiecePreview({
  title,
  image,
  artist,
  slug,
  width,
  height,
  isFavorite,
  toggleFavorite,
}) {
  // Add the character codes of all characters in the slug to get a number.
  const hash = [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);

  // Calculate a column span between 2 and 5.
  const colSpan = 2 + (hash % 4);

  // Calculate a row span between 10 and 21.
  const rowSpan = 10 + (hash % 12);

  /*  naming different frame styles */
  const frameStyles = [
    "baroqueGold",
    "empireGold",
    "darkWalnut",
    "renaissanceCarved",
    "louisXVI",
    "ebonyBlack",
  ];

  const frame = frameStyles[hash % frameStyles.length];

  return (
    <Artwork $colSpan={colSpan} $rowSpan={rowSpan} $frame={frame}>
      <div className="image-container">
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={image}
          alt={title}
          width={width}
          height={height}
        />

        <div className="overlay">
          <FavoriteButton
            slug={slug}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
          <h2>{title}</h2>
          <p>Artist: {artist}</p>

          <Link href={`/art-pieces/${slug}`}>View Details</Link>
        </div>
      </div>
    </Artwork>
  );
}
