import React, { useState, useRef, useEffect} from 'react';
import './AppComponent.css';

const AppComponent = ({name, imgUrl, childComponentName: Component, handleToggle, screenIcons}) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme
  const [isMaximize, setIsMaximize] = useState(false);
  const notepadRef = useRef(null);

  useEffect(() => {
    if (screenIcons) {
      setPosition({ x: 300, y: -100 });
    }
  }, [screenIcons]);
  
  const handleMouseDown = (e) => {
    if (!e.target.closest('.title-bar')) return;

    if (isMaximize) return; // Disable drag when maximized
    
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e) => {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleToggleMaximize = () => {
    setIsMaximize(!isMaximize);
    if (!isMaximize) {
      setPosition({ x: 0, y: 0 }); // Reset position when maximizing
    }
  }

  return (
    <div
        className={`app-component-container ${isMaximize ? 'maximize': ''}`}
        style={isMaximize ? {} : { transform: `translate(${position.x}px, ${position.y}px)` }}
        ref={notepadRef}
        onMouseDown={handleMouseDown}
    >
        <div className={`title-bar ${isDarkMode ? 'dark' : ''} ${isMaximize ? 'maximize': ''}`}>
            <div className={`title-bar-content ${isMaximize ? 'maximize': ''}`}>
                <img src={imgUrl} alt={name} className="icon-img" />
                <div className={`title-name ${isDarkMode ? 'dark' : ''} ${isMaximize ? 'maximize': ''}`}>
                    <p className={`text ${isMaximize ? 'maximize': ''}`}>{`${name}`}</p>
                    <img src={`${process.env.PUBLIC_URL}/cross-${isDarkMode ? 'dark' : 'light'}.png`} className={`cross-img ${isMaximize ? 'maximize': ''}`}/>
                </div>
                <img 
                    onClick={toggleTheme} 
                    src={`${process.env.PUBLIC_URL}/mode-${isDarkMode ? 'light' : 'dark'}.png`}
                    style={{background: `${isDarkMode ? 'rgb(234, 234, 248)': '#333'}`}}
                    className={`mode-icon ${isMaximize ? 'maximize': ''}`}
                />
            </div>
            <div className={`caption-button ${isMaximize ? 'maximize': ''}`}>
                <img onClick={handleToggle} src={`${process.env.PUBLIC_URL}/minimize-${isDarkMode ? 'dark' : 'light'}.png`} className={`cross-img ${isMaximize ? 'maximize': ''}`} />
                <img onClick={handleToggleMaximize} src={`${process.env.PUBLIC_URL}/maximise-${isDarkMode ? 'dark' : 'light'}.png`} className={`cross-img ${isMaximize ? 'maximize': ''}`}/>
                <img onClick={handleToggle} src={`${process.env.PUBLIC_URL}/cross-${isDarkMode ? 'dark' : 'light'}.png`} className={`cross-img imp ${isMaximize ? 'maximize': ''}`}/>
            </div>
        </div>
        <Component isDarkMode={isDarkMode} isMaximize={isMaximize}/>
    </div>
  );
};

export default AppComponent;
