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
        <AppIcon iconName='Notepad' iconUrl= {`${process.env.PUBLIC_URL}/Notepad.png`} componentName={AppComponent} childComponentName={Notepad}/>
        {/* <AppIcon iconName='Notepad' iconUrl= {`${process.env.PUBLIC_URL}/Notepad.png`} componentName={AppComponent} childComponentName={Chrome}/> */}
        <Icon iconName='Github' iconUrl= {`${process.env.PUBLIC_URL}/github.svg`} message="Github Profile:" myLink="https://github.com/Piyush228"/>
        <Icon iconName='Chrome' iconUrl= {`${process.env.PUBLIC_URL}/chrome-icon.svg`} />
        <AppIcon iconName='Photos' iconUrl= {`${process.env.PUBLIC_URL}/photos.png`} componentName={AppComponent} childComponentName={Photos}/>
        <Icon iconName='File Explorer' iconUrl= {`${process.env.PUBLIC_URL}/file-explorer-icon.png`}/>
        <Icon iconName='LinkedIn' iconUrl= {`${process.env.PUBLIC_URL}/linked-in-icon.svg`} message="LinkedIn Profile:"/>
        <AppIcon iconName='Chrome' iconUrl= {`${process.env.PUBLIC_URL}/chrome-icon.svg`} componentName={AppComponent} childComponentName={Chrome}/>
      </div>
      <div className="taskbar-right">
        <RightIcons />    
      </div>
    </div>
  );
};

export default Taskbar;
