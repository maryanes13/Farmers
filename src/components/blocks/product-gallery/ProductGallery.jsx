import React, { useState } from "react";
import SlideItem from "/src/components/ui/slide-item/slide-item";
import { SwiperSlide } from "swiper/react";
import { StyledSection } from "./styles";

//галерея
function ProductGallery({ slides = [], onSwiper }) {
  return slides && slides.length ? (
    <StyledSection
      spaceBetween={12}
      onSwiper={onSwiper}
      direction="vertical"
      slidesPerView={2.5}
      pagination={{ type: "fraction" }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <SlideItem slide={slide} />
        </SwiperSlide>
      ))}
    </StyledSection>
  ) : null;
}

export default ProductGallery;
