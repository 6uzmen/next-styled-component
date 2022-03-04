import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  min-height: "100vh";
  transition: 0.2s all ease-in-out;
  border-radius: 8px;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);

  &:hover {
    box-shadow: #00000094 2px 1px 2rem 0px;
    transform: scale(1.008);
  }
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #51505a;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  background-color: #e3dddd;
  margin-right: 5px;
  margin-top: 5px;
`;

export default {};
