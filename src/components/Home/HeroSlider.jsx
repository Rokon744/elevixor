import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";


const HeroSlider = ({slides}) => {
  const options = { loop: true, duration: 30, };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, ind) => (
            <div className="embla__slide" key={ind}>
              <Image src={slide} className="w-full max-sm:h-[250px] shadow-lg" alt="slide" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HeroSlider;
