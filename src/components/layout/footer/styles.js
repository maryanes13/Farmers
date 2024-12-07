import styled from "styled-components";
import { Section } from "../../styled";

export const FooterComponent = styled(Section)`
  position: absolute;
  width: 1280px;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 0;
  padding-bottom: 0;
  height: 80px;
  background-color: ${(props) => props.theme.colorWhite};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 10;
`;

export const Copyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  background-color: #fff6d9;
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;
