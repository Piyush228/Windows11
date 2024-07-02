// src/Icon.js

import React, { useState } from 'react';
import './Icon.css';
import AnotherComponent from './AnotherComponent.jsx';

const AppIcon = ({ iconName, iconUrl, componentName: Component = AnotherComponent, childComponentName: childComponent}) => {

  const [showComponent, setShowComponent] = useState(false);
  const [active, setActive] = useState(false);
  
  const handleToggle = () => {
    setShowComponent(!showComponent);
    setActive(true);
    setTimeout(() => setActive(false), 200);
  };
  
  return (
    <div className='icon-container'>
      {showComponent && <Component name={iconName} imgUrl= {iconUrl} childComponentName={childComponent} handleToggle={handleToggle}/>}
      <img onClick={handleToggle} src={iconUrl} alt={iconName} className={`taskbar-icon ${active ? 'active' : ''}`} />
    </div>
  );
};

export default AppIcon;
