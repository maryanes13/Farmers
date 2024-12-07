import styled from "styled-components";

export const TextInput = styled.input`
  display: flex;
  background-color: ${(props) => props.theme.colorGray};
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  width: 100%;
  height: 48px;
  padding-left: 12px;
  color: ${(props) => props.theme.colorBlackForText};
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
  }
`;

export default TextInput;
