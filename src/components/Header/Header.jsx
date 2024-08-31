import React from 'react';
import './Header.css';
import icon from '../../Images/icon img.png';
import logo from '../../Images/logo.png';
import sign from '../../Images/sign.png'; 

function Header() {
  return (
    <div className="header">
      <div className="header-left">
       <div className='logo1'>
      <img className='img-logo1' src={logo} alt=''/>
       </div>
      <div className='logo2'>
        <img  className='img-logo2' src={sign} alt=''/>
        </div>
      </div>
     
      <div className='header-middle'>
      <button className="upgrade-btn">Upgrade</button>
      <button className="view-options-btn">View options</button>
      </div>
      <div className="header-right">
        <div className="user-profile">
       <div className='icon'> <img className='user' src={icon} alt=''/></div>
          <span>Rishikesh Singh</span>
        </div>
        <div className='minus-cross'>
         <span>-</span>
         <span>☒</span>
        </div>
      </div>
    </div>
  );
}

export default Header;