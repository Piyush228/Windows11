import React from 'react';
import './Notepad.css';

const Notepad = () => {
  return (
    <div className="another-component-container">
      <h2>Hello, I'm Notepad!</h2>
      <iframe 
        src="https://www.example.com" 
        title="Notepad Iframe" 
        className="notepad-iframe"
      ></iframe>
    </div>
  );
};

export default Notepad;
