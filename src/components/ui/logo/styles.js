import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  height: 44px;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Text = styled.span`
  display: flex;
  height: 32px;
  margin-left: ${(props) => props.theme.indent};
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: ${(props) => props.theme.colorBlackForText};
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;
