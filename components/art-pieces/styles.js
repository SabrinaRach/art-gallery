import styled from "styled-components";

export const Gallery = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 20px;
  grid-auto-flow: dense;
  gap: 8px;

  list-style: none;
  padding: 2rem;
  margin: 0;

  /* Tablet */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Smartphone */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
