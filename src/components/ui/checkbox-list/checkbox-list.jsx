import Checkbox from "../checkbox/checkbox";
import { Ul, Li } from "../../styled/index";

// Радиокнопка
function CheckboxList({
  selectValues, // массив выбранных значений
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  alt, // имя
  onChange, // событие при изменении
  onClickLabel = () => {},
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            name={alt}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;
