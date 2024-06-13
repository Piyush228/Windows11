import React from 'react';
import './Notepad.css';

const Notepad = ({isDarkMode, isMaximize}) => {
  return (
    <textarea className={`textArea ${isDarkMode? 'dark': ''} ${isMaximize ? 'maximize': ''}`}></textarea>
  );
};

export default Notepad;
