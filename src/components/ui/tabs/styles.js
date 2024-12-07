import styled, { css } from "styled-components";
import { Ul, Li } from "../../styled/index";

export const TabListItem = styled(Li)`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;
export const TabButton = styled.span`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  cursor: pointer;

  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.colorForNewIcon};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorBlackForText};
        `}
`;
export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;
export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
`;
