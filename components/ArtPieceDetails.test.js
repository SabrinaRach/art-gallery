/* --- TESTING: ArtPieceDetails Component --- */

/* testing if it renders the art piece details correctly, including the title, artist, genre, and year 
testing if it renders comments correctly */

import { render, screen, fireEvent } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

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

/* 1. testing if it renders the art piece details correctly, including the title, artist, genre, and year */

test("renders art piece details correctly", () => {
  render(
    <ArtPieceDetails
      artPiece={testArtPiece}
      toggleFavorite={jest.fn()}
    />
  );

  expect(screen.getByText(testArtPiece.name)).toBeInTheDocument();
  expect(
    screen.getByText(`Artist:`)
  ).toBeInTheDocument();
  expect(screen.getByText(testArtPiece.genre)).toBeInTheDocument();
  expect(screen.getByText(String(testArtPiece.year))).toBeInTheDocument();
});

/* 2. testing if it renders comments correctly */

/* mocking a comment*/
jest.mock("./Comments/Comments", () => {
  return function MockComments({ comments }) {
    return <div>{comments.length} comments</div>;
  };
});

test("renders existing comments", () => {
  localStorage.setItem(
    "art-comments",
    JSON.stringify({
      "umbilical-ambiguity": [
        {
          text: "Amazing artwork",
          date: "2026",
        },
      ],
    })
  );

  render(
    <ArtPieceDetails
      artPiece={testArtPiece}
      toggleFavorite={jest.fn()}
    />
  );

  expect(screen.getByText("1 comments")).toBeInTheDocument();
});