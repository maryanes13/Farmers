import React from "react";

export const ProductFeature = {
  FERMER: "fermer",
  SHOP: "shop",
};

function ProductCategory({ className = "", feature }) {
  let options;

  switch (feature) {
    case ProductFeature.FERMER:
      options = {
        text: "фермерские продукты",
        bgColor: "#88AA4D",
      };
      break;
    case ProductFeature.SHOP:
      options = {
        text: "магазинные продукты",
        bgColor: "#F75531",
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#FC9B27",
      };
  }

  return options.text ? (
    <span
      className={`${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </span>
  ) : null;
}

export default ProductCategory;
