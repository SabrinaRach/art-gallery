import Image from "next/image";
import Link from "next/link";
import { Artwork } from "/components/art-piece-preview/styles"; //components/art-piece-preview/styles.js
/* importing FavoriteButton component from the favorite-button directory. 
This component is used to allow users to mark an art piece as a favorite. */
import FavoriteButton from "../favorite-button/favorite-button.js";

export default function Spotlight({ artPiece, isFavorite, toggleFavorite }) {
  /*  naming different frame styles */
  const frameStyles = [
    "baroqueGold",
    "empireGold",
    "darkWalnut",
    "renaissanceCarved",
    "louisXVI",
    "ebonyBlack",
  ];
  const { title, artist, imageSource, slug } = artPiece;
  const hash = [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const frame = frameStyles[hash % frameStyles.length];

  //console.log("I am inside Spotlight.js", artist);

  const colSpan = 2 + (hash % 4);
  const rowSpan = 10 + (hash % 12);

  return (
    <>
      <h1>ART OF THE DAY</h1>
      <main>
        <Artwork $colSpan={colSpan} $rowSpan={rowSpan} $frame={frame}>
          <div className="image-container">
            <Image
              src={imageSource}
              alt={title}
              width={artPiece.dimensions.width}
              height={artPiece.dimensions.height}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div className="overlay">
              <FavoriteButton
                slug={slug}
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
              />
              <Link href={`/art-pieces/${slug}`}>View Details</Link>
            </div>
          </div>
        </Artwork>
        <h2>By: {artist}</h2>
      </main>
    </>
  );
}
