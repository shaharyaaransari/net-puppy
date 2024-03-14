import React from 'react';
import campus from "../assets/campus.png";
import expert from "../assets/expert.png";
import management from "../assets/management.png";
import students from "../assets/students.png";
import traning from "../assets/training.png";
import ratio from "../assets/ratio.png";
import "./styles/why.css";

export const Why = () => {
  return (
    <div className="questionSection">
      <h1>
        Why <span>TIS</span>?
      </h1>
      <div className="imagesdescription">
        <h2>A FOCUS ON...</h2>
        <h1 className="managementTitle">MANAGEMENT</h1>
        <p className="managementDescription">
          Extremely Friendly and Approachable Management. Tula’s International School combines – respect for tradition with a progressive application of modern sciences, academic rigour with a caring heart, and individual appreciation with the warmth of a school community
        </p>
      </div>
      <div className="imagesContainer">
        <img src={students} alt="Background" />
        <div>
          <ul className="listContainer">
            <li>
              <img src={campus} alt="Campus" height="40px" width="40px"  className='students'/>
              <span>CAMPUS</span>
            </li>
            <li>
              <img src={expert} alt="Expert Instruction" height="40px" width="40px" />
              <span>EXPERT INSTRUCTION</span>
            </li>
            <li>
              <img src={traning} alt="Training Methods" height="40px" width="40px" />
              <span>TRAINING METHODS</span>
            </li>
            <li>
              <img src={ratio} alt="Ratio" height="40px" width="40px" />
              <span>RATIO</span>
            </li>
            <li>
              <img src={management} alt="Management" height="40px" width="100%" />
              <span>MANAGEMENT</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
