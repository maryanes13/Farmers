import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Panel, FilterContent, InputAddress } from "./styles";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import PriceFormContent from "/src/components/ui/price-form-content/price-form-content";
import Button from "/src/components/ui/button/button";

function Filter({
  slides,
  selectValues,
  onChange,
  onClickLabel,
  fullPrice,
  valueAddress,
  onChangeAddress,
  onClick,
  disabled,
}) {
  return (
    <>
      <FilterContent>
        <Panel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          <CheckboxList
            name={"select-products"}
            options={slides.map((slide) => ({
              value: slide.id,
              title: slide.alt,
            }))}
            selectValues={selectValues}
            onChange={onChange}
            onClickLabel={onClickLabel}
          />
        </Panel>
        <Panel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Сделать заказ
          </Title>
          <InputAddress
            placeholder="Введите адрес доставки"
            value={valueAddress}
            onChange={onChangeAddress}
          />
          <PriceFormContent fullPrice={fullPrice} />
          <Button onClick={onClick} disabled={disabled}>
            Купить
          </Button>
        </Panel>
      </FilterContent>
    </>
  );
}

export default Filter;
