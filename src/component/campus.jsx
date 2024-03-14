import React from 'react';

import CountUp from 'react-countup';
import './styles/campus.css'; 

import blog from '../assets/blog.png';
import n360 from '../assets/n360.png';

const Campus = () => {
  return (
    <div className="reportSection">
    <div className="backgroundImageContainer">
      <div className="overlay">
        <img src={n360} alt="Logo" className="logo" />
        <div className="textContainer">
          <h2 className="heading">DIVINE INTO OUR...</h2>
          <h2 className="subHeading">VIRTUAL TOUR</h2>
        </div>
      </div>
      <img src={blog} alt="Background" className="backgroundImage" />
    </div>
    <div className="statisticsContainer">
      <div className="statisticBox">
        <CountUp end={100} suffix="%" />
        <p className="statisticText">College Acceptance</p>
      </div>
      <div className="statisticBox">
        <CountUp end={20} />
        <p className="statisticText">Years of Educational Excellence</p>
      </div>
      <div className="statisticBox">
        <CountUp end={60} suffix="%" />
        <p className="statisticText">STEM Program Participation</p>
      </div>
      <div className="statisticBox">
        <CountUp end={15} suffix="+" />
        <p className="statisticText">Extracurricular Activities</p>
      </div>
    </div>
  </div>
  );
};

export default Campus;
