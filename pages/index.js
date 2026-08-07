import Spotlight from "../components/Spotlight/Spotlight";
import { useState, useEffect } from "react";

export default function HomePage({ artPieces, toggleFavorite }) {
  // State to hold the currently selected random artwork
  const [spotlightArt, setSpotlightArt] = useState(null);

  // useEffect to pick a random art piece when the component mounts or when artPieces change
  useEffect(() => {
    // Only pick a random piece if we have artPieces AND we haven't picked one yet,
    // OR if you want it to pick once when data loads.
    if (!artPieces || artPieces.length === 0) return;

    // Check if spotlightArt is already set so it doesn't loop
    if (!spotlightArt) {
      const randomIndex = Math.floor(Math.random() * artPieces.length);
      setSpotlightArt(artPieces[randomIndex]);
    }
  }, [artPieces, spotlightArt]);
  // Fallback if data is still loading
  if (!spotlightArt) {
    return <p>Loading spotlight artwork...</p>;
  }

  return (
    <Spotlight
      artPiece={spotlightArt}
      toggleFavorite={toggleFavorite}
      width={spotlightArt.dimensions.width}
      height={spotlightArt.dimensions.height}
    />
  );
}
