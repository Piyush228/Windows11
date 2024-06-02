// src/Icon.js

import React from 'react';
import './StartWindow.scss';

const StartIcon = ({ iconName, iconUrl }) => {
  return (
    <div className= "start-user-component">
      <img src={iconUrl} alt={iconName} className="start-icon" />
      <div className="line-text-bar">{iconName}</div>
    </div>
  );
};

export default StartIcon;
