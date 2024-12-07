import React from "react";
import { Label, VisuallyHiddenInput, CheckboxLabel } from "./styles";

function Checkbox({
  onClick,
  isChecked, // выбранно ли значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <CheckboxLabel onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </CheckboxLabel>
    </Label>
  );
}

export default Checkbox;
