import React from "react";
import nav from "../assets/nav.png"
import mesg from '../assets/message.svg'
   import logo from '../assets/logo.png'
   import arrow from '../assets/arrow.png'
 import './Home.css'
import Youtube from "../component/Youtube";
import { Desription } from "../component/Desription";
import { Button } from "../component/Button";
import { Why } from "../component/Why";
import Campus from "../component/campus";
import Achivement from "../component/Achivement";
import Rank from "../component/Rank";
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
<img src={arrow} alt="arrow"  style={{marginLeft:'30rem'}}/>
             </div>
                <div >
  <img src={logo} alt="logo" />
                </div>
              <div >
              <div className="Taekwondo-div">
        <p  className="swiming-p">Taekwondo</p>
           <span className="swiming-span"> 22 Acres, Pollution- Free, World-Class.
</span>
<img src={arrow} alt="arrow"  style={{marginLeft:'30rem'}}/>
             </div>
             <div className="horse-div">
        <p  className="swiming-p">Horse Riding</p>
           <span className="swiming-span"> 22 Acres, Pollution- Free, World-Class.
</span>
<img src={arrow} alt="arrow"  style={{marginLeft:'30rem'}}/>
             </div>
              </div>
           
              </div>
            
        </div>
        <Button text={"SEE ALL ACTIVITIES"}/>
        
            <Youtube/>
              <Desription/>
              <Button text={"LEARN MORE"}/>
                <Why/>
                  <Campus/>

                   <Achivement/>
                     <Rank/>
      </div>
      </>
    
  );
};
