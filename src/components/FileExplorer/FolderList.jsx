import React from 'react';
import './FileExplorer.css';

const FolderList = ({iconUrl, iconName, isDarkMode, isMaximize}) => {
return (
  <div className={`folder-icon-component ${isDarkMode? 'dark': ''}`}>
      <img src={iconUrl} alt={iconName} className={`folder-icon ${isMaximize? 'max':''}`} />
      <div className={`folder-text ${isMaximize? 'max':''}`}>{iconName}</div>
  </div>
);
}

export default FolderList;