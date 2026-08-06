import Image from "next/image";

export default function Spotlight({ artPiece }) {
  const { artist, imageSource } = artPiece;
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
      <h2>Art by: {artist}</h2>
    </main>
  );
}
