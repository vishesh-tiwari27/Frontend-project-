import React from 'react';
import './Sidebar.css';
import protection from '../../Images/protection 2 img.png';
import safety from '../../Images/safety.png';
import privacy from '../../Images/privacy.png';
import notification from '../../Images/notification.png';
import setting from '../../Images/setting img.png';
import dashboard from '../../Images/dashboard.png';

function Sidebar() {
  return (
    <div className="sidebar">
   <div className='upperbar'>

       <div >
        <img className="protection" src={protection} alt=''/>
        </div>

        <div className='dashboard1'>
        <img className="dashboard" src={dashboard} alt=''/><p2>Dashboard</p2>
        </div> 
       
       <div className='safety1'>
        <img className="safety" src={safety} alt=''/><p2>Safety</p2>
        </div> 
       
       <div className='privacy1'>
        <img className="privacy" src={privacy} alt=''/><p2>Privacy</p2>
        </div> 

        </div>
       
<div className='belowbar'>

       <div className='notification1'>
        <img className="notification" src={notification} alt=''/><p2>Notification</p2>
        </div> 

       <div className='setting1'>
        <img className="setting" src={setting} alt=''/><p2>Setting</p2>
        </div> 

        </div>
    </div>
  );
}

export default Sidebar;