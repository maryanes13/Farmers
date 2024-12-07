import styled from "styled-components";

export const TitlePrice = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: ${(props) => props.theme.colorBlackForText};
  margin-bottom: 10px;
`;

export const PriceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;
