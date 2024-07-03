import React from 'react';
import Modal from 'react-modal';
import './Taskbar.scss';
import SearchIcon from './SearchIcon';
import RightIcons from './RightIcons';
import Icon from './Icon';
import StartWindow from './StartWindow';
import AppIcon from './AppIcon';
import AppComponent from './AppComponent/AppComponent';
import Notepad from './Notepad/Notepad';
import Photos from './Photos/Photos';
import Chrome from './Chrome/Chrome';
import FileExplorer from './FileExplorer/FileExplorer';

Modal.setAppElement('#root');

const Taskbar= ()=> {
  return (
    <div className="taskbar">
       <div className="taskbar-left">
        <Icon iconName='Portfolio' iconUrl={`${process.env.PUBLIC_URL}/portfolio.png`} message="My Portfolio :"/>
      </div>
      <div className="taskbar-centre">
        <Icon iconName='Start' iconUrl= {`${process.env.PUBLIC_URL}/start-icon.png`} componentName= {StartWindow}/>
        <SearchIcon />
        <AppIcon iconName='Notepad' iconUrl= {`${process.env.PUBLIC_URL}/notepad.png`} componentName={AppComponent} childComponentName={Notepad}/>
        <Icon iconName='Github' iconUrl= {`${process.env.PUBLIC_URL}/github.svg`} message="Github Profile:" myLink="https://github.com/Piyush228"/>
        <AppIcon iconName='Chrome' iconUrl= {`${process.env.PUBLIC_URL}/chrome-icon.svg`} componentName={AppComponent} childComponentName={Chrome}/>
        <AppIcon iconName='Photos' iconUrl= {`${process.env.PUBLIC_URL}/photos.png`} componentName={AppComponent} childComponentName={Photos}/>
        <AppIcon iconName='File Explorer' iconUrl= {`${process.env.PUBLIC_URL}/file-explorer-icon.png`} componentName={AppComponent} childComponentName={FileExplorer}/>
        <Icon iconName='LinkedIn' iconUrl= {`${process.env.PUBLIC_URL}/linked-in-icon.svg`} message="LinkedIn Profile:" myLink='https://www.linkedin.com/in/meetpiyushverma/'/>
      </div>
      <div className="taskbar-right">
        <RightIcons />    
      </div>
    </div>
  );
};

export default Taskbar;
