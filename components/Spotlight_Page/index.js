import Image from "next/image";

const initialData = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: { height: 2432, width: 1920, type: "jpg" },
};

export default function Spotlight() {
  const { artist, imageSource } = initialData;
  console.log(initialData.artist);
  return (
    <>
      <h1>Spotlight Page</h1>

      <Image
        src={initialData.imageSource}
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        alt={`spotlight: ${artist}`}
      />
      <h2>Art by: {initialData.artist}</h2>
    </>
  );
}
