/* --- TESTING: ArtPiece Component --- */

/* Testing if all art pieces passed through the artPieces prop are rendered */
import { render, screen } from "@testing-library/react";
import ArtPieces from "./art-pieces-component";

/* creating two test art piece objects to use in the tests 
it's the last two art pieces found in the API*/
const testArtPiece1 = {
  slug: "umbilical-ambiguity",
  artist: "Klaus Stille",
  name: "Umbilical Ambiguity",
  imageSource:
    "https://example-apis.vercel.app/assets/art/umbilical-ambiguity.jpg",
  year: 2021,
  genre: "Linoprint",
  colors: ["#102463", "#424D77", "#646C8B", "#7D829A", "#CECCC9"],
  dimensions: { height: 2786, width: 1920 },
  type: "jpg",
};

const testArtPiece2 = {
  slug: "selfportrait-klaus-stille",
  artist: "Klaus Stille",
  name: "Selfportrait",
  imageSource:
    "https://example-apis.vercel.app/assets/art/selfportrait-klaus-stille.jpg",
  year: "2020",
  genre: "Portrait Painting",
  colors: ["#4D5A50", "#8D7673", "#B09271", "#A09D97", "#DAC8B9"],
  dimensions: { height: 2608, width: 1920 },
  type: "jpg",
};

test("renders all art pieces passed through the artPieces prop", () => {
  const testPieces = [testArtPiece1, testArtPiece2];
  render(<ArtPieces artPieces={testPieces} toggleFavorite={jest.fn()} />);
  expect(screen.getByText(testArtPiece1.name)).toBeInTheDocument();
  expect(screen.getByText(testArtPiece2.name)).toBeInTheDocument();
});
