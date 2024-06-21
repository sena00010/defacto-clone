"use client";
import React, { useState } from "react";
import style from "./offerSlider.module.css";

const OfferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://dfcdn.defacto.com.tr/df/1920/Mobile/slider_cef6cd39-ed34-4fed-8551-c7f6165a2e3a_4266cc9b-74dc-4c38-9879-47c8474d0796_DI_297.jpg",
    "https://dfcdn.defacto.com.tr/df/1920/Mobile/slider_3556b0c1-0e8b-47af-b715-bc8db0fb0610_26c557ff-e17c-4ad3-9e67-edf8f578f551_DI_297.jpg",
    "https://dfcdn.defacto.com.tr/df/1920/Mobile/sliderpng_4e0030e9-9675-481f-a256-07c79850fc6d_d37c3d83-ed8c-44b5-be75-4b76b5b723f1_DI_297.jpg",
    "https://dfcdn.defacto.com.tr/df/1920/Mobile/slider-revpng_725f8414-4173-4acc-b00c-1df5cdc1b09b_41a2dfef-ede3-43cb-8017-210abb1190d2_DI_297.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={style.sliderContainer}>
      <button onClick={prevSlide} className={style.navButton}>
        {"<"}
      </button>
      <div className={style.slide}>
        {slides[currentIndex].startsWith("http") ? (
          <img
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={style.slideImage}
          />
        ) : (
          <div className={style.textSlide}>{slides[currentIndex]}</div>
        )}
      </div>
      <button onClick={nextSlide} className={style.navButton}>
        {">"}
      </button>
    </div>
  );
};

export default OfferSlider;
