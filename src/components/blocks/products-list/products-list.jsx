import React from "react";
import Title from "/src/components/ui/title/title";
import ProductCard from "/src/components/ui/product-card/product-card";
import Button from "/src/components/ui/button/button";
import { StyledStarsList, ProductList, ProductItem } from "./styles";
import { AppRoute } from "/src/const";

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
