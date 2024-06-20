import React from 'react';
import './ChromePinnedIcon.css';

const ChromePinnedIcon = ({ iconName, iconUrl, isDarkMode}) => {
  return (
    <div className={`chrome-pinned-icon-container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className={`chrome-image-icon-container  ${isDarkMode ? 'dark' : 'light'}`}>
            <img src={iconUrl} alt={iconName} className={`chrome-pinned-img`} />
        </div>
      <div className={`chrome-pinned-text-bar`}>{iconName}</div>
    </div>
  );
};

export default ChromePinnedIcon;
