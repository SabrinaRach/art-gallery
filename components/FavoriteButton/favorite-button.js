import styled from "styled-components";
import Image from "next/image";

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <FavoriteButtonStyle type="button" onClick={() => onToggleFavorite(slug)}>
      <Image
        src="/images/color-palette.png"
        alt="Color Palette Icon"
        width={24}
        height={24}
      />
      {isFavorite ? "Unmark Favorite" : "Mark as Favorite"}
    </FavoriteButtonStyle>
  );
}

/* Favorite Button styling */
export const FavoriteButtonStyle = styled.button``;
