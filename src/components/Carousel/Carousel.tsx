import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import slideByIndex from "./slideByIndex";
import "./css/embla.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress())) * 100;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => {
            const { imageUrl, text } = slideByIndex(index);
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__image">
                  <img src={imageUrl} alt={`Slide ${index + 1}`} />
                </div>
                <div className="embla__slide__text">
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel;
