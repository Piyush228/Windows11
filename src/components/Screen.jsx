import React from 'react';
import PinnedIcon from './PinnedIcon';
import AppComponent from './AppComponent/AppComponent';
import Chrome from './Chrome/Chrome';
import Photos from './Photos/Photos';
import FileExplorer from './FileExplorer/FileExplorer';

const Screen = () => {
  return (
    <div className='pinned-screen-icon'>
        <PinnedIcon iconName="This PC" iconUrl= {`${process.env.PUBLIC_URL}/monitor.png`} screenIcons={true} componentName={AppComponent} childComponentName={FileExplorer} displayIcon={true}/>
        <PinnedIcon iconName="Photos" iconUrl= {`${process.env.PUBLIC_URL}/photos.png`} screenIcons={true} componentName={AppComponent} childComponentName={Photos} displayIcon={true}/>
        <PinnedIcon iconName="Chrome" iconUrl= {`${process.env.PUBLIC_URL}/chrome-icon.svg`} screenIcons={true} componentName={AppComponent} childComponentName={Chrome} displayIcon={true}/>
        <PinnedIcon iconName="Discord" iconUrl= {`${process.env.PUBLIC_URL}/discord.png`} screenIcons={true}/>
        <PinnedIcon iconName="Recycle Bin" iconUrl= {`${process.env.PUBLIC_URL}/recycle-bin.png`} screenIcons={true}/>
    </div>
  );
};

export default Screen;
