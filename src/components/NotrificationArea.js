// src/NotrificationArea.js

import React, { useState, useEffect } from 'react';
import './NotrificationArea.css';
import './Taskbar.scss';

const NotrificationArea = () => {
  // States for WiFi, Sound, and Battery
  const [wifiStatus, setWifiStatus] = useState('enabled'); // possible values: 'enabled', 'disconnected', 'airplanemode'
  const [soundStatus, setSoundStatus] = useState('on'); // possible values: 'on', 'mute'
  const [batteryPercentage, setBatteryPercentage] = useState(50); // example initial battery percentage

  // Determine WiFi image based on wifiStatus
  const getWifiImage = () => {
    switch (wifiStatus) {
      case 'enabled':
        return `${process.env.PUBLIC_URL}/wifi.png`;
      case 'disconnected':
        return `${process.env.PUBLIC_URL}/wifi-disconnected.png`;
      case 'airplanemode':
        return `${process.env.PUBLIC_URL}/airplane-mode.png`;
      default:
        return `${process.env.PUBLIC_URL}/wifi.png`;
    }
  };

  // Determine Sound image based on soundStatus
  const getSoundImage = () => {
    return soundStatus === 'on'
      ? `${process.env.PUBLIC_URL}/sound.png`
      : `${process.env.PUBLIC_URL}/mute.png`;
  };

  // Determine Battery image based on batteryPercentage
  const getBatteryImage = () => {
    if (batteryPercentage <= 20) {
      return `${process.env.PUBLIC_URL}/battery-0-20.png`;
    } else if (batteryPercentage <= 40) {
      return `${process.env.PUBLIC_URL}/battery-20-40.png`;
    } else if (batteryPercentage <= 60) {
      return `${process.env.PUBLIC_URL}/battery-40-60.png`;
    } else if (batteryPercentage <= 80) {
      return `${process.env.PUBLIC_URL}/battery-60-80.png`;
    } else {
      return `${process.env.PUBLIC_URL}/battery-80-100.png`;
    }
  };

  const [isCharging, setIsCharging] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [status, setStatus] = useState({
    online: navigator.onLine,
    airplaneMode: false,
  });

  useEffect(() => {
    let battery;

    const updateBatteryStatus = (battery) => {
        setIsCharging(battery.charging);
        setBatteryLevel(battery.level * 100);
    };

    const handleBatteryStatus = (event) => {
        updateBatteryStatus(event.target);
    };

    const updateStatus = () => {
        navigator.getBattery().then((battery) => {
        updateBatteryStatus(battery);

        battery.addEventListener('chargingchange', handleBatteryStatus);
        battery.addEventListener('levelchange', handleBatteryStatus);
        });

        const isOnline = navigator.onLine;
        setStatus({
          online: isOnline,
          airplaneMode: !isOnline && !navigator.connection,
        });
    };

    updateStatus(); // Initial call to set battery status
    const interval = setInterval(() => {
        updateStatus(); // Update battery status every second
    }, 1000);

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    return () => {
        clearInterval(interval);
        if (battery) {
          battery.removeEventListener('chargingchange', handleBatteryStatus);
          battery.removeEventListener('levelchange', handleBatteryStatus);
        }
        if(window){
          window.removeEventListener('online', updateStatus);
          window.removeEventListener('offline', updateStatus);
        }
    };
  }, []);

  useEffect(() => {
    if (isCharging) {
      const intervalId = setInterval(() => {
        setBatteryPercentage((prev) => {
          const newLevel = prev < 100 ? prev + 10 : 0;
          return newLevel;
        });
      }, 1000); // 1 seconds delay

      // Cleanup the interval when component unmounts or isCharging changes
      return () => clearInterval(intervalId);
    }
    else{
      setBatteryPercentage(batteryLevel);
    }
  }, [isCharging, batteryLevel]);

  useEffect(() => {
    if (status.airplaneMode) {
      setWifiStatus('airplanemode');
    } else if (status.online) {
      setWifiStatus('enabled');
    } else {
      setWifiStatus('disconnected');
    }
  }, [status]);

  return (
    <div className='taskbar-icon notrification'>
      <img src={getWifiImage()} alt="Wifi" className='icons' />
      <img src={getSoundImage()} alt="Sound" className='icons' />
      <img src={getBatteryImage()} alt="Battery" className='icons' />
    </div>
  );
};

export default NotrificationArea;
