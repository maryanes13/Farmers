import styled from "styled-components";

export const StyleBuyPage = styled.section`
  display: grid;
  grid-template-columns: 350px 1fr;
  padding: 40px 90px;
  gap: 20px;
  background-color: ${(props) => props.theme.colorGray};
`;
