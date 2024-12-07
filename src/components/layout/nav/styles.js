import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledButton = styled(Button)`
  padding: 0;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 300px;
  display: inline-block;
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 18px;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
