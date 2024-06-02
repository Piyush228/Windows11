import React from 'react';
import StartIcon from './StartIcons';
import './StartWindow.scss';
import SearchIcon from './SearchIcon';

const StartWindow = () => {
  return (
    <div className="windows-component-container">
      <div className='start-user-features-component'>
      <SearchIcon param="large" searchText="Search for apps, settings and documents"/>
      <div className="line-text-bar bold">Piyush Verma</div>
        {/* <Icon iconName='Game' iconUrl= {`${process.env.PUBLIC_URL}/game-controller.png`}/> */}
      </div>
      <div className='start-user-taskbar-component'>
        <div className='start-icon-container-left'>
            <StartIcon iconName='User' iconUrl= {`${process.env.PUBLIC_URL}/user.png`}/>
        </div>
        <div className='start-icon-container-right'>
            <img src={`${process.env.PUBLIC_URL}/power.png`} alt={"Power"} className="power-icon" />
        </div>

      </div>
    </div>
  )
};

export default StartWindow;
