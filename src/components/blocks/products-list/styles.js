import styled from "styled-components";
import { Li, Section, Ul } from "/src/components/styled";

export const StyledStarsList = styled(Section)`
  position: relative;
  background-color: ${(props) => props.theme.colorWhite};
  overflow: hidden;
`;

export const ProductList = styled(Ul)`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.indent};
  margin-top: ${(props) => props.theme.marginIndent};
  margin-bottom: ${(props) => props.theme.marginIndent};
`;

export const ProductItem = styled(Li)`
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeight};
`;
