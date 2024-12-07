import React from "react";
import About from "/src/components/blocks/about/about";
import ProductsList from "/src/components/blocks/products-list/products-list";
import { TitleLevel } from "/src/components/ui/title/title";

function MainPage({ products }) {
  return (
    <>
      <About level={TitleLevel.H1} />
      <ProductsList products={products} level={TitleLevel.H2} />
    </>
  );
}

export default MainPage;
