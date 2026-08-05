import styled from "styled-components";

export const Artwork = styled.li`
  
  grid-column: span ${({ $colSpan }) => $colSpan};
  grid-row: span ${({ $rowSpan }) => $rowSpan};

  padding: 6px;
  background: #8b6b2e;
  border: 3px solid #4b3412;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
`;
