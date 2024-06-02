// src/components/SearchIcon.js
import React, { useState }  from 'react';
import './Icon.css'; // Assuming you have some common CSS for icons
import './SearchIcon.css';

const SearchIcon = ({ param='', searchText='Search' }) => {
  return (
      <div className={`taskbar-search-icon ${param}`}>
        <div className={`search-input-container ${param}`}>
            <input type="text" className={`search-input ${param}`} placeholder = {searchText} />
            <img src={`${process.env.PUBLIC_URL}/search-icon.svg`} alt="Search Icon" className={`search-input-icon ${param}`} />
        </div>
    </div> 
  );
};

export default SearchIcon;