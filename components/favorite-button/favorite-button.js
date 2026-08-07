import styled from "styled-components";

export default function FavoriteButton({ slug, isFavorite, toggleFavorite }) {
  return (
    <FavoriteButtonStyle
      type="button"
      onClick={() => toggleFavorite(slug)}
      $isFavorite={isFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <span />
    </FavoriteButtonStyle>
  );
}

/* Favorite Button styling */
export const FavoriteButtonStyle = styled.button`
position: absolute;
top: 10px;
right: 50px;
  background: transparent;
  border: none;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  span {
    display: block;

    width: 32px;
    height: 32px;

    background-color: ${({ $isFavorite }) =>
      $isFavorite ? "rgb(255, 0, 64)" : "#ffffff"};

    /*
The SVG acts as a mask that defines the icon shape.
The background-color is applied through CSS, which allows us to dynamically change the icon color.
*/
    mask-image: ${({ $isFavorite }) =>
      $isFavorite
        ? 'url("/images/palette-red.svg")'
        : 'url("/images/palette.svg")'};

    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;

    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  &:hover span {
    background-color: rgb(255, 0, 64);

    transform: scale(1.15);
  }
`;
