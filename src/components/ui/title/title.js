import styled, { css } from "styled-components";

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRA_SMALL: "extra_small",
};

const TitleSizeValue = {
  [TitleSize.BIG]: {
    fontSize: "44px",
    lineHeight: "50px",
  },
  [TitleSize.MEDIUM]: {
    fontSize: "36px",
    lineHeight: "41px",
  },
  [TitleSize.SMALL]: {
    fontSize: "24px",
    lineHeight: "31px",
  },
  [TitleSize.EXTRA_SMALL]: {
    fontSize: "18px",
    lineHeight: "27px",
  },
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};


// Заголовок
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-weight: bold;
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
    `;
  }};
`;

export default Title;
