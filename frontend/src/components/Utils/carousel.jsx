import React, { useState } from "react";
import fleche from "../../assets/fleche-haut.png";

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.pictures.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.pictures.length) % data.pictures.length);
  };

  return (
    <div className="carousel">
      {data.pictures.length > 1 && (
        <button onClick={goToPrevSlide} className="prevButton">
          <img src={fleche} alt="fleche  du carousel " />
        </button>
      )}
      <img src={data.pictures[currentIndex]} alt={`${data.title} - Slide ${currentIndex + 1}`} className="imageCarousel" />
      <p className="indexImage">
        {currentIndex + 1} / {data.pictures.length}
      </p>
      {data.pictures.length > 1 && (
        <button onClick={goToNextSlide} className="nextButton">
          <img src={fleche} alt="fleche  du carousel " />
        </button>
      )}
    </div>
  );
}

export default Carousel;
