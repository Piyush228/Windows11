import React from 'react';
import FolderList from './FolderList';
import './FileExplorer.css';
import DeviceAndDrives from './DeviceAndDrives';

const FileExplorer = ({isDarkMode, isMaximize}) => {
  return (
    <>
    <div className={`windows-navbar ${isDarkMode? 'dark': ''} ${isMaximize? 'maximize':''}`}>
        <img src={`${process.env.PUBLIC_URL}/left-arrow-${isDarkMode? 'dark': 'light'}.png`} className={`windows-icons ${isMaximize? 'maximize':''}`}/>
        <img src={`${process.env.PUBLIC_URL}/right-arrow-${isDarkMode? 'dark': 'light'}.png`} className={`windows-icons ${isMaximize? 'maximize':''}`}/>
        <img src={`${process.env.PUBLIC_URL}/upward-${isDarkMode? 'dark': 'light'}.png`} className={`windows-icons ${isMaximize? 'maximize':''}`}/>
        <img src={`${process.env.PUBLIC_URL}/refresh-${isDarkMode? 'dark': 'light'}.png`} className={`windows-icons ${isMaximize? 'maximize':''}`}/>
        <div className={`windows-home-navbar ${isMaximize? 'maximize':''}`}>
            <img src={`${process.env.PUBLIC_URL}/home-${isDarkMode? 'dark': 'light'}.png`} className={`home-folder-icon ${isDarkMode? 'dark': 'light'} ${isMaximize? 'maximize':''}`} />
            <div className={`windows-folder-text ${isDarkMode? 'dark': 'light'} ${isMaximize? 'maximize':''}`}>{`> __ Home __ >`}</div>
        </div>
        <div className={`windows-search-bar ${isMaximize? 'maximize':''}`}>
            <div className={`windows-folder-text ${isDarkMode? 'dark': 'light'} ${isMaximize? 'maximize':''}`}>{`Search Home`}</div>
            <img src={`${process.env.PUBLIC_URL}/search-${isDarkMode? 'dark': 'light'}.png`} className={`search-folder-icon ${isDarkMode? 'dark': 'light'} ${isMaximize? 'maximize':''}`} />
        </div>    
    </div>
    <div className={`windows-explorer ${isDarkMode? 'dark': ''} ${isMaximize? 'maximize':''}`}>
        <div className={`file-list-component ${isDarkMode? 'dark': ''} ${isMaximize? 'maximize':''}`}>
            <div className={`folder-component`}>
                <div className={`list-icon-component`}>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/home.png`} iconName={`Home`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/gallery.png`} iconName={`Gallery`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/onedrive.png`} iconName={`OneDrive - Personal`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <div className='seperator'></div>                    
                </div>
                { isMaximize && <div className={`list-icon-component`}>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/desktop-folder.png`} iconName={`Desktop`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/download-folder.png`} iconName={`Downloads`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/documents-folder.png`} iconName={`Documents`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/pictures-folder.png`} iconName={`Pictures`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/music-folder.png`} iconName={`Music`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/videos.png`} iconName={`Videos`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <div className='seperator'></div>  
                </div> }
                <div className={`list-icon-component`}>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/monitor.png`} iconName={`This PC`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                    <FolderList iconUrl={`${process.env.PUBLIC_URL}/network.png`} iconName={`Network`} isDarkMode={isDarkMode} isMaximize={isMaximize}/>
                </div>
            </div>
        </div>
        <div className={`display-list-component ${isMaximize? 'maximize':''}`}>
            {isMaximize && <div className={`default-component`}>
                <p className={`text-statement ${isDarkMode? 'dark': ''}`}> Quick access</p>
                <div className={`folders`}>
                    <DeviceAndDrives iconUrl='desktop-folder' isDarkMode={isDarkMode} textUpper='Desktop' textLower='Stored locally' isMaximize={isMaximize}/>
                    <DeviceAndDrives iconUrl='download-folder' isDarkMode={isDarkMode} textUpper='Downloads' textLower='Stored locally' isMaximize={isMaximize}/>
                    <DeviceAndDrives iconUrl='documents-folder' isDarkMode={isDarkMode} textUpper='Documents' textLower='Stored locally' isMaximize={isMaximize}/>
                    <DeviceAndDrives iconUrl='pictures-folder' isDarkMode={isDarkMode} textUpper='Pictures' textLower='Stored locally' isMaximize={isMaximize}/>
                </div>
                <div className={`folders`}>
                    <DeviceAndDrives iconUrl='music-folder' isDarkMode={isDarkMode} textUpper='Music' textLower='Stored locally' isMaximize={isMaximize}/>
                    <DeviceAndDrives iconUrl='video-folder' isDarkMode={isDarkMode} textUpper='Videos' textLower='Stored locally' isMaximize={isMaximize}/>
                    <DeviceAndDrives iconUrl='new-folder-icon' isDarkMode={isDarkMode} textUpper='public' textLower='New Volume (D:)' isMaximize={isMaximize}/>
                </div>
            </div>}
            <div className={`folder-component`}>
                    <p className={`text-statement ${isDarkMode? 'dark': ''}`}> Devices and drives </p>
                    <div className={`folders-component ${isMaximize? 'maximize':''}`}>
                        <DeviceAndDrives iconUrl='windows-C' isDarkMode={isDarkMode} textUpper='Windows (C:)' textLower='81.5 GB free of 276 GB' isMaximize={isMaximize} ok={true}/>
                        <DeviceAndDrives iconUrl='windows-D' isDarkMode={isDarkMode} textUpper='New Volume (D:)' textLower='162 GB free of 199 GB' isMaximize={isMaximize} ok={true}/>
                    </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default FileExplorer;