import React from 'react';
import './FileExplorer.css';

const DeviceAndDrives = ({iconUrl, isDarkMode, textUpper, textLower, isMaximize, ok=false}) => {
  return (
    <div className={`device-and-drives ${isMaximize? 'maximize':''}`}>
        <img src={`${process.env.PUBLIC_URL}/${iconUrl}.png`} className={`disk-icon `}/>
        <div className={`statements`}>
           <p className={`device-text-statement ${isDarkMode? 'dark': ''} ${ok? '': 'quick'}`}> {textUpper} </p>
           {ok &&<div className={`bar-line ${isMaximize? 'maximize':''}`}>
                <div className={`color-bar-line`}></div>
           </div>}
           <p className={`device-text-statement normal ${isDarkMode? 'dark': ''}`}> {textLower} </p>
        </div>
    </div>
  );
}

export default DeviceAndDrives;