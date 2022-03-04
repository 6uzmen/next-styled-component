import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
  transition: 0.2s all ease-in-out;
  &:hover {
    box-shadow: #00000094 2px 1px 2rem 0px;
    transform: scale(1.008);
  }
`;

export default {};
