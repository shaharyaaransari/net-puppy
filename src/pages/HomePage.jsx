import React from "react";
import nav from "../assets/nav.png"
import mesg from '../assets/message.svg'
   
 import './Home.css'
export const HomePage = () => {
  return (
      <>
       <div className="nav">
      <div className="img">
        <img src={nav} alt="nav-pic" />
      </div>
      <div className="mesg">
        <img src={mesg} alt="msg" />
      </div>
    </div>
      <div>
        <div>
            <p className="line">Our commitment to all-round development shines in diverse extracurricular activities.</p>
            <span className="second-line">( Our Students love that! )</span>
              <div className="container">
              <div className="swiming-div">
        <p  className="swiming-p">Swimming</p>
           <span className="swiming-span"> 22 Acres, Pollution- Free, World-Class.
</span>
             </div>
             <div className="Taekwondo-div">
        <p  className="swiming-p">Taekwondo</p>
           <span className="swiming-span"> 22 Acres, Pollution- Free, World-Class.
</span>
             </div>
              </div>
            
        </div>
      </div>
      </>
    
  );
};
