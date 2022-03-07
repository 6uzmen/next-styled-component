import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
  transition: 0.2s all ease-in-out;
  &:hover {
    box-shadow: #00000094 2px 1px 2rem 0px;
    transform: scale(1.008);
  }
`;

export const Description = styled.div`
  padding: 1rem;
  min-height: 21rem;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  @media screen and (max-width: 768px) {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;
export default {};
