import styled from "styled-components";
import ProductCategory from "../product-category/product-category";

export const StyledProductCard = styled.article`
  box-sizing: border-box;
  padding: ${(props) => props.theme.indent};
  min-width: 540px;
  min-height: 197px;
  background-color: #e1edce;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr;
  column-gap: ${(props) => props.theme.indent};
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
`;

export const StyledProductCategory = styled(ProductCategory)`
  display: inline-block;
  background-color: ${(props) => props.theme.colorForNewIcon};
  color: ${(props) => props.theme.colorWhite};
  max-width: 178px;
  height: 21px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  padding: 2px 10px;
  margin-bottom: 4px;
`;

export const Figure = styled.div`
  position: relative;
  margin: 0;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  width: 56px;
  height: 56px;
`;

export const Text = styled.p`
  margin-top: ${(props) => props.theme.indent};
  margin-bottom: 0;
  grid-column: span 2;
`;
