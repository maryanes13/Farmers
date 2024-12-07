import React from "react";
import Title from "../../ui/title/title";
import ProductCard from "../../ui/product-card/product-card";
import Button from "../../ui/button/button";
import { StyledStarsList, ProductList, ProductItem } from "./styles";
import { AppRoute } from "../../../const";

function ProductsList({ products, level }) {
  return (
    <StyledStarsList>
      {products?.length ? (
        <>
          <Title level={level}>Почему фермерские продукты лучше?</Title>
          <ProductList>
            {products.map((product) => (
              <ProductItem key={product.id}>
                <ProductCard {...product} />
              </ProductItem>
            ))}
          </ProductList>
          <Button minWidth={260} link={AppRoute.BUY}>
            Купить
          </Button>
        </>
      ) : null}
    </StyledStarsList>
  );
}

export default ProductsList;
