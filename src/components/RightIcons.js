import React, {useState, useEffect} from 'react';
// import SmallIcon from './SmallIcon';
import NotrificationArea from './NotrificationArea';
import Icon from './Icon';
import Text from './Text';
import './RightIcons.css';

// Helper function to get the current time and date
function getCurrentDateTime() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  const time = now.toLocaleTimeString([], options);
  const date = now.toLocaleDateString('en-GB'); // Format: DD-MM-YYYY
  return { time, date };
}

const RightIcons = () => {
    const [dateTime, setDateTime] = useState(getCurrentDateTime());
    useEffect(() => {
        const interval = setInterval(() => {
          setDateTime(getCurrentDateTime());
        }, 1000); 
        return () => clearInterval(interval);
    }, []);

  return (
    <>
      {/* <SmallIcon iconName='Show hidden icons' iconUrl={`${process.env.PUBLIC_URL}/Collapse-arrow-icon.png`} /> */}
      <Icon iconName='Github' iconUrl= {`${process.env.PUBLIC_URL}/github.svg`}/>
      <Text FirstLine={"ENG"} SecondLine={"IN"} ClassName={"right"}/>
      <NotrificationArea />
      <Text FirstLine={dateTime.time} SecondLine={dateTime.date} ClassName={"medium right"} />
    </>
  );
};

export default RightIcons;
