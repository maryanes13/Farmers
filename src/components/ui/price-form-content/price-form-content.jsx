import React from "react";
import Price from "../price/price";
import { TitlePrice, PriceContent } from "./styles";

function PriceFormContent({ fullPrice }) {
  return (
    <>
      <PriceContent>
        <TitlePrice>Цена</TitlePrice>
        <Price value={fullPrice} />
      </PriceContent>
    </>
  );
}

export default PriceFormContent;
