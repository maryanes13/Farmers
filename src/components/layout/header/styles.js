import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 90px;
  width: 1280px;
  margin: 0 auto;
  position: relative;
  height: 80px;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.06);
  align-items: center;
  z-index: 5;
  box-sizing: border-box;
`;
