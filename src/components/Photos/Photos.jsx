import React, { useState, useEffect, useRef } from 'react';
import './Photos.css'; // Create a CSS file for styling

const images = [
  'Image+1.png',
  'Image+2.png',
  'Image+3.png',
  'Image+4.png',
  'Image+5.png',
  'Image+6.png',
  'Image+7.png',
  'image+8.png'
];

const Photos = ({ isDarkMode, isMaximize }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleKeyboardEvent = (event) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    }
  };

  useEffect(() => {
    const currentRef = sliderRef.current;
    console.log("sliderRef.current"+sliderRef.current);
    if (currentRef) {
      currentRef.focus();
      currentRef.addEventListener('keydown', handleKeyboardEvent);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('keydown', handleKeyboardEvent);
      }
    };
  }, [sliderRef]);

  return (
    <div
      ref={sliderRef}
      tabIndex="0"  // Attribute makes the div focusable and able to receive keyboard events.
                    // value of 0 allows the element to be focused in the natural tab order of the page.
      className={`image-slider ${isDarkMode ? 'dark' : ''} ${isMaximize ? 'maximize' : ''}`}
    >
      <div className="previous" onMouseDown={goToPrevious}>
        <img
          src={`${process.env.PUBLIC_URL}/sort-left-${isDarkMode ? 'dark' : 'light'}.png`}
          className="sort-button"
          alt="Previous"
        />
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/${images[currentIndex]}`}
        alt={`Slide ${currentIndex + 1}`}
        className={`images ${isMaximize ? 'maximize' : ''}`}
      />
      <div className="next" onMouseDown={goToNext}>
        <img
          src={`${process.env.PUBLIC_URL}/sort-right-${isDarkMode ? 'dark' : 'light'}.png`}
          className="sort-button"
          alt="Next"
        />
      </div>
    </div>
  );
};

export default Photos;
