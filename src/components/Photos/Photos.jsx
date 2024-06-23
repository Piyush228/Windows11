import React, { useState } from 'react';
import './Photos.css'; // Create a CSS file for styling

const images = [
  'Image+1.png',
  'Image+2.png',
  'Image+3.png',
  'Image+4.png',
  'Image+5.png',
  'Image+6.png',
];

const Photos = ({ isDarkMode, isMaximize }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    if (event.button === 0) {
      // Left click
      goToPrevious();
    } else if (event.button === 2) {
      // Right click
      goToNext();
    }
  };

  return (
    <div className={`image-slider ${isDarkMode ? 'dark' : ''} ${isMaximize ? 'maximize' : ''}`}>
      <div className="previous" onMouseDown={handleMouseDown}>
        <img src={`${process.env.PUBLIC_URL}/sort-left-${isDarkMode ? 'dark' : 'light'}.png`} className="sort-button" alt="Previous" />
      </div>
      <img src={`${process.env.PUBLIC_URL}/${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} className={`images ${isMaximize ? 'maximize' : ''}`} />
      <div className="next" onMouseDown={handleMouseDown}>
        <img src={`${process.env.PUBLIC_URL}/sort-right-${isDarkMode ? 'dark' : 'light'}.png`} className="sort-button" alt="Next" />
      </div>
    </div>
  );
};

export default Photos;
