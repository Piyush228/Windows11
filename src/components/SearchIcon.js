// src/components/SearchIcon.js
import React, { useState }  from 'react';
import './Icon.css'; // Assuming you have some common CSS for icons
import './SearchIcon.css';

const SearchIcon = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    //   <img
    //     src={`${process.env.PUBLIC_URL}/search-icon.svg`}
    //     className="taskbar-icon"
    //     alt="Search"
    //     onClick={onClick}
    //   />

    <div className="taskbar-search-icon">
        <div className="search-input-container">
            <input type="text" className="search-input" placeholder="Search" />
            <img src={`${process.env.PUBLIC_URL}/search-icon.svg`} alt="Search Icon" className="search-input-icon" />
        </div>
    </div> 
  );
};

export default SearchIcon;