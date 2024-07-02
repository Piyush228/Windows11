import React from 'react';
import './Icon.css';

const AnotherComponent = ({ messageBody='',  iconUrl={iconUrl}, myLink='#' }) => {
  const handleLinkClick = () => {
    if(myLink != '#')
      window.open(myLink, '_blank');
  };

  return (
    <div className="another-component-container">
      <h3>{messageBody}</h3>
      <img onClick={handleLinkClick} src={iconUrl} className="taskbar-icon link-text" />
    </div>
  );
};

export default AnotherComponent;
