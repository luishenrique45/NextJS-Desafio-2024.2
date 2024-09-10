"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton } from "./next-button";
import { NextButton } from "./next-button";
import { usePrevNextButtons } from "./next-button";
import { CardProd } from "@/components/landing-page/principais-produtos/card-produtos/cp";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const CapaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-10/12 mx-auto  flex items-center">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="overflow-hidde" ref={emblaRef}>
        <div className="flex">
          {slides.map((index) => (
            <div
              className="min-w-0 shrink-0 grow-0 basis-1/5 py-6 "
              key={index}
            >
              <CardProd />
            </div>
          ))}
        </div>
      </div>

      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
};

export default CapaCarousel;
