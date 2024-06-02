import React from 'react';
import Modal from 'react-modal';
import './Taskbar.scss';
import SearchIcon from './SearchIcon';
import RightIcons from './RightIcons';
// import SmallIcon from './SmallIcon';
import Icon from './Icon';
import StartWindow from './StartWindow';

// Set the root element for react-modal
Modal.setAppElement('#root');

const Taskbar= ()=> {
  return (
    <div className="taskbar">
       <div className="taskbar-left">
        <Icon iconName='Portfolio' iconUrl={`${process.env.PUBLIC_URL}/portfolio.png`} />
      </div>
      <div className="taskbar-centre">
        <Icon iconName='Start' iconUrl= {`${process.env.PUBLIC_URL}/start-icon.png`} componentName= {StartWindow}/>
        <SearchIcon />
        <Icon iconName='Github' iconUrl= {`${process.env.PUBLIC_URL}/github.svg`}/>
        <Icon iconName='Chrome' iconUrl= {`${process.env.PUBLIC_URL}/chrome-icon.svg`}/>
        <Icon iconName='Edge' iconUrl= {`${process.env.PUBLIC_URL}/edge-icon.svg`}/>
        <Icon iconName='File Explorer' iconUrl= {`${process.env.PUBLIC_URL}/file-explorer-icon.png`}/>
        <Icon iconName='LinkedIn' iconUrl= {`${process.env.PUBLIC_URL}/linked-in-icon.svg`}/>
        <Icon iconName='Visual Studio Code' iconUrl= {`${process.env.PUBLIC_URL}/visual-studio-code.svg`}/>
      </div>
      <div className="taskbar-right">
        <RightIcons />    
      </div>
    </div>
  );
};

export default Taskbar;
