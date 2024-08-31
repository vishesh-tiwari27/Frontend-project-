import React from 'react';
import './Main.css';
import lock from '../../Images/lock img.png';
import scan from '../../Images/scan.jpg';
import glass from '../../Images/glass.png';
import aiii from '../../Images/aiii.png';
import click from '../../Images/click img.png';
import thunder from '../../Images/thunder img.png';

function Main() {
  return (
    <main className="main-content">
      <h1>You are safe</h1>
      <p>We’re looking out for your device and data.</p>
      <div className="block-ai-tools">
        <div  className='ani'>
        <h3>AntiAi protect your device</h3>
        <p>"Anti-AI is a tool that protects against the influence and risks of artificial intelligence.</p>
           <p1>  Safeguarding users from potential risks associated with AI technology."</p1>
        </div>
        <div className='btoon'>
        <button className="block-btn">Block</button>
        <button className="blocked-btn">Blocked</button>
        </div>
      </div>
      <div className="actions">
        <div className="action-item">Block AI Tools 
             <div className="pic1"><img src={lock} alt=''/></div> 
             </div>
        <div className="action-item">System AI Scan
            <div className="pic2"><img src={scan} alt=''/></div> 
            </div>
        <div className="action-item">Vulnerability AI Scan
            <div className="pic3"><img src={glass} alt=''/></div> 
            </div>
        <div className="action-item">Secure AI
            <div className="pic4"><img src={aiii} alt=''/></div>
            </div>
        <div className="action-item">ID Protection
            <div className="pic5"><img src={click} alt=''/></div>
            </div>
        <div className="action-item">Add a quick action
            <div className="pic6"><img src={thunder} alt=''/></div>
            </div>
      </div>
    </main>
  );
}

export default Main;
