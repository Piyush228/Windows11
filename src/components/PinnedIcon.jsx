import React, {useState} from 'react';
import './PinnedIcon.scss';
import AnotherComponent from './AnotherComponent.jsx';

const PinnedIcon = ({ iconName, iconUrl, screenIcons=false, displayIcon= false, componentName: Component = AnotherComponent, childComponentName: childComponent}) => {
  
  const [showComponent, setShowComponent] = useState(false);
  
  const handleToggle = () => {
    setShowComponent(!showComponent);
  };

  return (
    <>
      {showComponent && <Component name={iconName} imgUrl= {iconUrl} childComponentName={childComponent} handleToggle={handleToggle} screenIcons={screenIcons}/>}
      <div {...((screenIcons && displayIcon) ? { onClick: handleToggle } : {})} className= {`pinned-icon-container ${screenIcons? 'screen': ''}`}>
        <img src={iconUrl} alt={iconName} className="pinned-img" />
        <div className={`pinned-text-bar ${screenIcons? 'screen': ''}`}>{iconName}</div>
      </div>
    </>
  );
};

export default PinnedIcon;
