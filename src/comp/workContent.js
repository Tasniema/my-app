import React, { useState } from 'react';
import './workContent.css';

const WorkContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrvNzpLEGlolWcdzPTzYhHo-RM2osTLiGSQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJqSueidbapno_SHkf6RSGkTqlqc_A-R2Jw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCUO1DZbKmnnubAmKzgpRKXPcOwi1Ff6p_w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSmipge5YueMwlkrIgFC0xGqKYYqgN6skGg&s",
    "https://cars.usnews.com/images/new-features/widget-section/2019_Kawasaki_Ninja400_Base.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NTwDTbwvHnfHv6Lom2Ik7MKaalWeOOGVHQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOYJ_idN6-ZVuCwGa1uRfgm_2dnAyJWVnQw&s"
  ];
  const totalImages = images.length;
  const imagesToShow = 4;

  const prevBtnDisabled = currentIndex === 0;
  const nextBtnDisabled = currentIndex >= totalImages - imagesToShow;

  const updateCarousel = (direction) => {
    if (direction === 'prev' && !prevBtnDisabled) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'next' && !nextBtnDisabled) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className='workPage'>
      <div className="parent">
        <h1 className="head-one">
          I present to you some types of motorcycles that I buy, sell, or repair, and
          this is due to the customer’s needs.
        </h1>
        <div className="carousel-container">
          <button
            id="prevBtn"
            onClick={() => updateCarousel('prev')}
            disabled={prevBtnDisabled}
          >
            ←
          </button>
          <div className="carousel">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${currentIndex * 115 / imagesToShow}%)` }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Motorcycle ${index + 1}`}
                  className="motocycle"
                />
              ))}
            </div>
          </div>
          <button
            id="nextBtn"
            onClick={() => updateCarousel('next')}
            disabled={nextBtnDisabled}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
