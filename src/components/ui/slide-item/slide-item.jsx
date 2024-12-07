import React from "react";

import {
  SlideImage,
  SlideInfo,
  SlideTitle,
  SlideContent,
  SlidePrice,
} from "./styles";
import { TitleSize } from "/src/components/ui/title/title";
import OptionsList from "/src/components/ui/options-list/options-list";
import Tabs from "/src/components/ui/tabs/tabs";

function SlideItem({ slide }) {
  const tabs = [
    {
      title: "Описание",
      content: slide.description,
    },
    {
      title: "Характеристики",
      content: <OptionsList list={slide.specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionsList list={slide.structure} />,
    },
  ];

  return (
    <>
      <SlideContent>
        <SlideImage src={slide.src} alt={slide.alt} />
        <SlideInfo>
          <SlideTitle as="h3" size={TitleSize.SMALL}>
            {slide.alt}
          </SlideTitle>
          <Tabs tabs={tabs} maxContentHeiht="115px" />
          <SlidePrice>
            {slide.price} руб. / {slide.weight} гр.
          </SlidePrice>
        </SlideInfo>
      </SlideContent>
    </>
  );
}

export default SlideItem;
