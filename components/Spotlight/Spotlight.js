import Image from "next/image";
import FavoriteButton from "../favorite-button/favorite-button.js"; /* importing FavoriteButton component from the favorite-button directory. This component is used to allow users to mark an art piece as a favorite. */

export default function Spotlight({ artPiece, isFavorite, onToggleFavorite }) {
  const { artist, imageSource, slug } = artPiece;
  console.log("I am inside Spotlight.js", artist);
  return (
    <main>
      <h1>Spotlight Page</h1>

      <Image
        width={300}
        height={400}
        src={imageSource}
        alt={`spotlight: ${artist}`}
      />
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <h2>Art by: {artist}</h2>
    </main>
  );
}
