// src/Icon.js

import React, { useState } from 'react';
import './Icon.css';
import AnotherComponent from './AnotherComponent.jsx';

const AppIcon = ({ iconName, iconUrl, componentName: Component = AnotherComponent}) => {

  const [showComponent, setShowComponent] = useState(false);
  
  const handleToggle = () => {
    setShowComponent(!showComponent);
  };
  
  return (
    <div className='icon-container'>
      {showComponent && <Component />}
      <img onClick={handleToggle} src={iconUrl} alt={iconName} className="taskbar-icon" />
    </div>
  );
};

export default AppIcon;
