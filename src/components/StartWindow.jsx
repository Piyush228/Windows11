import React from 'react';
import StartIcon from './StartIcons';
import './StartWindow.scss';
import SearchIcon from './SearchIcon';
import PinnedIcon from './PinnedIcon';

const StartWindow = () => {
  return (
    <div className="windows-component-container">
      <div className='start-user-features-component'>
        <SearchIcon param="large" searchText="Search for apps, settings and documents"/>
        <div className="line-text-bar bold">Pinned</div>
        <div className='pinned-features-icon'>
            <PinnedIcon iconName="Coffee😋" iconUrl= {`${process.env.PUBLIC_URL}/coffee.png`} />
            <PinnedIcon iconName="Mail" iconUrl= {`${process.env.PUBLIC_URL}/mail.png`} />
            <PinnedIcon iconName="Photos" iconUrl= {`${process.env.PUBLIC_URL}/photos.png`} />
            <PinnedIcon iconName="Discord" iconUrl= {`${process.env.PUBLIC_URL}/discord.png`} />
            <PinnedIcon iconName="Instagram" iconUrl= {`${process.env.PUBLIC_URL}/instagram.png`} />
        </div>
        <div className='pinned-features-icon'>
            <PinnedIcon iconName="VS Code" iconUrl= {`${process.env.PUBLIC_URL}/visual-studio-code.svg`} />
            <PinnedIcon iconName="Files" iconUrl= {`${process.env.PUBLIC_URL}/new-folder-icon.svg`} />
            <PinnedIcon iconName="Chrome" iconUrl= {`${process.env.PUBLIC_URL}/chrome-icon.svg`} />
            <PinnedIcon iconName="To Do" iconUrl= {`${process.env.PUBLIC_URL}/todo.png`} />
            <PinnedIcon iconName="Edge" iconUrl= {`${process.env.PUBLIC_URL}/edge-icon.svg`} />
        </div>
        <div className="line-text-bar bold">Recommended</div>

        <div className='start-features-icon'>
            <StartIcon iconName='Github' iconUrl= {`${process.env.PUBLIC_URL}/github.svg`} myLink="https://github.com/Piyush228"/>
            <StartIcon iconName='CodeChef' iconUrl= {`${process.env.PUBLIC_URL}/codechef.png`} myLink='https://codechef.com/users/piyush228/'/>
        </div>
        <div className='start-features-icon'>
            <StartIcon iconName='LinkedIn' iconUrl= {`${process.env.PUBLIC_URL}/linked-in-icon.svg`} myLink="https://www.linkedin.com/in/meetpiyushverma/"/>
            <StartIcon iconName='LeetCode' iconUrl= {`${process.env.PUBLIC_URL}/leetCode.png`} myLink="#"/>
        </div>
        <div className='start-features-icon'>
            <StartIcon iconName='Download PDF Resume' iconUrl= {`${process.env.PUBLIC_URL}/pdf.png`}/>
            <StartIcon iconName='My First Project' iconUrl= {`${process.env.PUBLIC_URL}/game-controller.png`} myLink="https://phoenix-gaming-website.netlify.app/"/>
        </div>
      </div>
      <div className='start-user-taskbar-component'>
        <div className='start-icon-container-left'>
            <StartIcon iconName='Piyush Verma' iconUrl= {`${process.env.PUBLIC_URL}/user.png`}/>
        </div>
        <div className='start-icon-container-right'>
            <img src={`${process.env.PUBLIC_URL}/power.png`} alt={"Power"} className="power-icon" />
        </div>

      </div>
    </div>
  )
};

export default StartWindow;
