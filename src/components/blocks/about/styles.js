import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.png";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: ${(props) => props.theme.pagePaddingTopBottom};
  padding-bottom: ${(props) => props.theme.pagePaddingTopBottom};
  padding-right: 553px;
  align-items: center;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  z-index: 1;
  overflow: hidden;

  &::after {
    position: absolute;
    top: 37px;
    right: 177px;
    display: block;
    content: "";
    width: 273px;
    height: 627px;
    margin: auto;
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
  }

  &::before {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
    background-color: ${(props) => props.theme.colorRadius};
    border-radius: 50%;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  min-width: 640px;
  z-index: 3;
`;

export const Text = styled(Paragraph)`
  margin-top: ${(props) => props.theme.indent};
  padding-right: 100px;
`;
