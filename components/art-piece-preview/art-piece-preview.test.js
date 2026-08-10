/* --- TESTING: ArtPiecePreview --- */

/* Testing if the ArtPiecePreview component renders the title, artist, and image correctly. 
Check if FavoriteButton is rendered and if the toggleFavorite function is called when the button is clicked. */

import { render, screen, fireEvent } from "@testing-library/react";
import ArtPiecePreview from "./art-piece-preview";

/* mock for next/image to render a standart <img> element during testing and to avoid errors during testing 
without this the first test would fail */
jest.mock("next/image", () => {
  return function MockImage(props) {
    return <img {...props} />;
  };
});

/* creating a test art piece object to use in the tests 
it's the last art piece found in the API*/
const testArtPiece = {
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

/* 1. Test if the ArtPiecePreview component renders the title, artist, and image src correctly. */
test("renders title, artist, and image correctly", () => {
  render(
    <ArtPiecePreview
      title={testArtPiece.name}
      image={testArtPiece.imageSource}
      artist={testArtPiece.artist}
      alt={testArtPiece.name}
      slug={testArtPiece.slug}
      width={testArtPiece.dimensions.width}
      height={testArtPiece.dimensions.height}
      isFavorite={false}
      toggleFavorite={jest.fn()}
    />
  );
  // Testing if the art piece title is rendered correctly
  expect(screen.getByText(testArtPiece.name)).toBeInTheDocument();

  // Testing if the artist information is rendered correctly
  expect(
    screen.getByText(`Artist: ${testArtPiece.artist}`)
  ).toBeInTheDocument();

  // Testing if the image is rendered with the correct source attribute
  expect(screen.getByAltText(testArtPiece.name)).toHaveAttribute(
    "src",
    testArtPiece.imageSource
  );
});

/* 2. Test if the FavoriteButton is rendered and if the toggleFavorite function is called when the button is clicked. */
test("renders FavoriteButton and calls toggleFavorite on click", () => {
  /* creating a mock function to simulate the toggleFavorite function with jest.fn() */
  const mockToggleFavorite = jest.fn();
  render(
    <ArtPiecePreview
      title={testArtPiece.name}
      image={testArtPiece.imageSource}
      artist={testArtPiece.artist}
      slug={testArtPiece.slug}
      width={testArtPiece.dimensions.width}
      height={testArtPiece.dimensions.height}
      isFavorite={false}
      toggleFavorite={mockToggleFavorite}
    />
  );
  const favoriteButton = screen.getByRole("button", {
    name: "Add to favorites",
  });

  fireEvent.click(favoriteButton);

  expect(mockToggleFavorite).toHaveBeenCalledTimes(
    1
  ); /* tests if the toggleFavorite function is called once */
  expect(mockToggleFavorite).toHaveBeenCalledWith(
    testArtPiece.slug
  ); /* tests if the toggleFavorite function is called with the correct slug */
});
