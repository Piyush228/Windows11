import React from 'react';
import './PinnedIcon.scss';

const PinnedIcon = ({ iconName, iconUrl }) => {
  return (
    <div className= "pinned-icon-container">
      <img src={iconUrl} alt={iconName} className="pinned-img" />
      <div className="pinned-text-bar">{iconName}</div>
    </div>
  );
};

export default PinnedIcon;
