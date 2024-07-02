// src/Icon.js

import React, { useState, useRef, useEffect } from 'react';
import './Icon.css';
import AnotherComponent from './AnotherComponent.jsx';

const Icon = ({ iconName, iconUrl, componentName: Component = AnotherComponent, message="On Progress! ", myLink="#"}) => {

  const [showComponent, setShowComponent] = useState(false);
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);
  const componentRef = useRef(null);

  const handleToggle = () => {
    setShowComponent(!showComponent);
    setActive(true);
    setTimeout(() => setActive(false), 200);
  };

  const handleClickOutside = (event) => {
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowComponent(false);
    }
  };

  useEffect(() => {
    if (showComponent) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showComponent]);

  
  return (
    <div className='icon-container'>
      {showComponent && <div ref={componentRef}><Component messageBody={message} iconUrl={iconUrl} myLink={myLink}/></div>}
      <img onClick={handleToggle} ref={buttonRef} src={iconUrl} alt={iconName} className={`taskbar-icon ${active ? 'active' : ''}`} />
    </div>
  );
};

export default Icon;
