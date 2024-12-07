import React, { useState } from "react";
import ProductGallery from "../../blocks/product-gallery/ProductGallery";
import Filter from "../../ui/filter/filter";
import { StyleBuyPage } from "./styles";
import "swiper/swiper-bundle.css";

function BuyPage({ slides }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const selectProducts = selectProductIds.map((id) =>
    slides.find((slide) => slide.id === id)
  );

  //цена покупки
  const fullPrice = selectProducts.reduce(
    (sum, slide) => (sum += slide.price),
    0
  );

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (slide) => `${slide.alt} - ${slide.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return slides && slides.length ? (
    <>
      <StyleBuyPage as="form">
        <Filter
          selectValues={selectProductIds}
          onChange={setSelectProductIds}
          onClickLabel={handleOnClickProduct}
          slides={slides}
          fullPrice={fullPrice}
          valueAddress={address}
          onChangeAddress={(e) => setAddress(e.target.value)}
          onClick={handleBuyClick}
          disabled={!(selectProductIds.length && address)}
        />
        <ProductGallery onSwiper={setSwiperRef} slides={slides} />
      </StyleBuyPage>
    </>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}
export default BuyPage;
