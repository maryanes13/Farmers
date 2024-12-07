import React from "react";
import Title, { TitleSize, TitleLevel } from "../title/title";
import {
  StyledProductCard,
  StyledProductCategory,
  Figure,
  Image,
  Text,
} from "./styles";

function ProductCard({ name, about, feature, image, isNegative }) {
  return (
    <StyledProductCard isNegative={isNegative}>
      <Image width={56} height={56} alt={name} src={image} />
      <Figure isNegative={isNegative}>
        <StyledProductCategory feature={feature} />
        <Title level={TitleLevel.H4} size={TitleSize.EXTRA_SMALL}>
          {name}
        </Title>
      </Figure>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </StyledProductCard>
  );
}

export default ProductCard;
