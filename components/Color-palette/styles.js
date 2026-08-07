import styled from "styled-components";

export const ColorBadge = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;  
  list-style: none;            
  background-color: ${(props) => props.$color};
`;
export const ColorContainer = styled.div`
  display: flex;
  gap: 8px;
`; 