import styled from "styled-components";
import Img from "../../styled/img/img";
import Title from "../title/title";

export const SlideContent = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const SlideTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const SlideImage = styled(Img)`
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const SlideInfo = styled.div`
  position: relative;
  float: right;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const SlidePrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 30px;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  background-color: ${(props) => props.theme.colorForDarkBackground};
`;
