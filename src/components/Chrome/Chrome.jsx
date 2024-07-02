import React from 'react';
import SearchIcon from '../SearchIcon';
import ChromePinnedIcon from './ChromePinnedIcon';
import './Chrome.css';

const Chrome = ({isDarkMode, isMaximize}) => {
  return (
    <div className={`chrome-component-container ${isDarkMode ? 'dark' : 'light'} ${isMaximize ? 'maximize': ''}`}>
        <div className={`chrome-header ${isMaximize ? 'maximize': ''}`}>
            <p className={`chrome-text ${isMaximize ? 'maximize': ''}`}>Gmail</p>
            <p className={`chrome-text ${isMaximize ? 'maximize': ''}`}>Images</p>
            <img src={`${process.env.PUBLIC_URL}/user-${isDarkMode ? 'dark' : 'light'}.png`} className={`user-image ${isMaximize ? 'maximize': ''}`}/>
        </div>
        <div className={`chrome-body ${isMaximize ? 'maximize': ''}`}>
            <img src={`${process.env.PUBLIC_URL}/google_logo.svg`} className={`google-logo ${isMaximize ? 'maximize': ''}`}/>
            <div className={`search-bar ${isMaximize ? 'maximize': ''}`}>
                <SearchIcon param={`large chrome-search ${isMaximize ? 'maximize': ''}`} searchText="Search Google or type a URL" extraParams='chrome-search'/>
            </div>
        </div>
        <div className='start-features-icon google-components'>
            <ChromePinnedIcon iconName='Github' iconUrl= {`${process.env.PUBLIC_URL}/github.svg`} isDarkMode={isDarkMode}/>
            <ChromePinnedIcon iconName='LinkedIn' iconUrl= {`${process.env.PUBLIC_URL}/linked-in-icon.svg`} isDarkMode={isDarkMode}/>
            <ChromePinnedIcon iconName='CodeChef' iconUrl= {`${process.env.PUBLIC_URL}/codechef${isDarkMode ? '-dark' : ''}.png`} isDarkMode={isDarkMode}/>
            <ChromePinnedIcon iconName='LeetCode' iconUrl= {`${process.env.PUBLIC_URL}/leetCode.png`} isDarkMode={isDarkMode}/>
            { isMaximize && <ChromePinnedIcon iconName='Add shortcut' iconUrl= {`${process.env.PUBLIC_URL}/add-${isDarkMode ? 'dark' : 'light'}.png`} isDarkMode={isDarkMode}/>}
        </div>
        { isMaximize &&
        <div className={`chrome-taskbar`}>
            <div className={`customise-tab ${isDarkMode ? 'dark' : ''}`}>
                <img src={`${process.env.PUBLIC_URL}/pencil-${isDarkMode ? 'dark' : 'light'}.png`} className={`customise-image ${isMaximize ? 'maximize': ''}`}/>
                <p className={`chrome-text ${isMaximize ? 'maximize': ''}`}>Customise Chrome</p>
            </div>
        </div>
        }
    </div>
  );
};

export default Chrome;
