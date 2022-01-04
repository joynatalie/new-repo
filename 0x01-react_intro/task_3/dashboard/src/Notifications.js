import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button style={buttonStyle} aria-label="Close"
        onClick={() => buttonClick()}>
        <img alt="close-icon" src={close_icon} style={imageStyle}/>
      </button>
    </div>
  );
}

const buttonClick = () => {
  console.log('Close button has been clicked');
}

const buttonStyle = {
  position: 'fixed',
  top: '1em',
  right: '1em',
  background: 'transparent',
  border: 'none',
}

const imageStyle = {
  width: '10px',
  height: '10px',
}

export default Notifications;