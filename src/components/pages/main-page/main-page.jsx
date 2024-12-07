import React from "react";
import About from "../../blocks/about/about";
import ProductsList from "../../blocks/products-list/products-list";
import { TitleLevel } from "../../ui/title/title";

function MainPage({ products }) {
  return (
    <>
      <About level={TitleLevel.H1} />
      <ProductsList products={products} level={TitleLevel.H2} />
    </>
  );
}

export default MainPage;
