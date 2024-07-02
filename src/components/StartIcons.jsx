// src/Icon.js

import React from 'react';
import './StartWindow.scss';

const StartIcon = ({ iconName, iconUrl, myLink='#' }) => {
  const handleLinkClick = () => {
    if(myLink != '#')
      window.open(myLink, '_blank');
  };

  return (
    <div onClick={handleLinkClick} className= "start-user-component">
      <img src={iconUrl} alt={iconName} className="start-icon" />
      <div className="line-text-bar">{iconName}</div>
    </div>
  );
};

export default StartIcon;
