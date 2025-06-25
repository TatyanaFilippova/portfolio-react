import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";

export function EmblaCarousel({ imgList }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="wrapper__slider">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {imgList.map((img) => (
            <div className="embla__slide" key={img}>
              <img src={img} className="slide_img" alt="image" />
            </div>
          ))}
        </div>

        <button className="embla__prev " onClick={scrollPrev}>
          ▷
        </button>
        <button className="embla__next " onClick={scrollNext}>
          ▷
        </button>
      </div>
    </div>
  );
}
