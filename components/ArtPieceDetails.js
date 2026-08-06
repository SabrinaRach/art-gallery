import Link from "next/link";
import Image from "next/image";
import styledComponents from "styled-components";
import FavoriteButton from "../favorite-button/favorite-button.js"; /* importing FavoriteButton component from the favorite-button directory. This component is used to allow users to mark an art piece as a favorite. */

const StyledArticle = styledComponents.article`
display: flex;
flex-direction: column;
align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    `;
const StyledImage = styledComponents(Image)`
    max-width: 100%;
    `;
const StyledLink = styledComponents(Link)`
    margin-bottom: 20px;
    text-decoration: none;
    `;
const StyledHeading = styledComponents.h1`
    font-size: 2.25rem;
    margin-bottom: 10px;
`;
const StyledSubheading = styledComponents.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;
const StyledSpan = styledComponents.span`
    font-size: 1.25rem;
    margin-bottom: 10px;
`;
const StyledParagraph = styledComponents.p`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export default function ArtPieceDetails({ artPiece, toggleFavorite }) {
  return (
    <StyledArticle>
      <StyledLink href="/art-pieces">Back to Gallery</StyledLink>
      <StyledImage
        src={artPiece.imageSource}
        width={artPiece.dimensions.width}
        height={artPiece.dimensions.height}
        alt={artPiece.name}
      />
      <FavoriteButton
        slug={artPiece.slug}
        isFavorite={artPiece.isFavorite}
        onToggleFavorite={toggleFavorite}
      />
      <StyledHeading>Details</StyledHeading>
      <StyledSubheading>Name of the Artwork: {artPiece.name}</StyledSubheading>
      <StyledSpan>
        Artist: {artPiece.artist} {artPiece.year}
      </StyledSpan>
      <StyledParagraph>Genre: {artPiece.genre}</StyledParagraph>
    </StyledArticle>
  );
}
