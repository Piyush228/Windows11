import React, { useState, useRef } from 'react';
import './AppComponent.css';

const AppComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const notepadRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <div
        className="app-component-container"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ref={notepadRef}
        onMouseDown={handleMouseDown}
      >
        <h2>Hello, I'm temp_Notepad!</h2>
      </div>
    </>
  );
};

export default AppComponent;
