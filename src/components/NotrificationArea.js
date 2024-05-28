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

//   const [isCharging, setIsCharging] = useState(false);
//   const [batteryLevel, setBatteryLevel] = useState(0);

//   // Example effect to simulate state changes (you can replace it with real logic)
//   useEffect(() => {
//     let battery;

//     const updateBatteryStatus = (battery) => {
//       setIsCharging(battery.charging);
//       setBatteryLevel(battery.level * 100);

//       var str = JSON.stringify(battery);
//       console.log("battery: "+ str);
//       console.log("battery.charging: "+ battery.charging);
//       console.log("battery.level: "+ battery.level);
//       console.log("battery: "+ isCharging);
//     };

//     const handleBatteryStatus = (event) => {
//       updateBatteryStatus(event.target);
//     };

//     const updateStatus = () => {
//         navigator.getBattery().then((bat) => {
//             battery = bat;
            
//             updateBatteryStatus(battery);
      
//             battery.addEventListener('chargingchange', handleBatteryStatus);
//             battery.addEventListener('levelchange', handleBatteryStatus);
//         })
//     }

//     const interval = setInterval(() => {
//         console.log("setInterval\n");
//         {isCharging ? ( setBatteryPercentage(prev => (prev < 100 ? prev + 10 : 0)) // simulate battery percentage change
//           ) : (
//             setBatteryPercentage(batteryLevel)
//           )}
//           updateStatus();
//           console.log("isCharging: "+ isCharging);
//     //   setBatteryPercentage(prev => (prev < 100 ? prev + 10 : 0)); // simulate battery percentage change
//     // setWifiStatus(prev => (prev === 'enabled' ? ( prev === 'disconnected'? 'airplanemode' : 'disconnected') : 'enabled')); // simulate WiFi status change
//     // setSoundStatus(prev => (prev === 'on' ? 'mute' : 'on')); // simulate sound status change
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

    const [isCharging, setIsCharging] = useState(false);
    const [batteryLevel, setBatteryLevel] = useState(0);

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
    };

    updateStatus(); // Initial call to set battery status

    const interval = setInterval(() => {
        updateStatus(); // Update battery status every second
    }, 1000);

    return () => {
        clearInterval(interval);
        if (battery) {
        battery.removeEventListener('chargingchange', handleBatteryStatus);
        battery.removeEventListener('levelchange', handleBatteryStatus);
        }
    };
    }, []);

    const abc = ()=>{
        console.log("isCharging : "+ isCharging);
        
        isCharging ? ( setBatteryPercentage(prev => (prev < 100 ? prev + 10 : 0)) // simulate battery percentage change
          ) : (
            setBatteryPercentage(batteryLevel)
          )
    }    

    useEffect(() => {
    console.log("isCharging: ", isCharging);
    console.log("batteryLevel: ", batteryLevel);
    }, [isCharging, batteryLevel]); // Logs whenever isCharging or batteryLevel changes


  return (
    <div className='taskbar-icon notrification'>
      <img src={getWifiImage()} alt="Wifi" className='icons' />
      <img src={getSoundImage()} alt="Sound" className='icons' />
      <img src={getBatteryImage()} alt="Battery" className='icons' />
    </div>
  );
};

export default NotrificationArea;
