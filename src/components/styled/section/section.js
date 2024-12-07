import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export default Section;
