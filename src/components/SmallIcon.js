// src/Icon.js

import React, { useState } from 'react';
import './Taskbar.scss';

const SmallIcon = ({ iconName, iconUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className= "icon-container"
    //   ${isHovered ? 'hovered' : ''}`}
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    >
      <img src={iconUrl} alt={iconName} className="taskbar-icon" />
      {/* {isHovered && <div className="tooltip">{iconName}</div>} */}
    </div>
  );
};

export default SmallIcon;
