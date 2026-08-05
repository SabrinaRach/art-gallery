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
`;
