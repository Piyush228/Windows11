import React from 'react';
import './Text.css';

const Text= ({FirstLine, SecondLine, ClassName=''})=> {
    return (
        <div className={`taskbar-icon ${ClassName}`}>
            <div className={`line ${ClassName}`}>{FirstLine}</div>
            <div className={`line ${ClassName}`}>{SecondLine}</div>
        </div>        
    );
};

export default Text;