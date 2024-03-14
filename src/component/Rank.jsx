import React from 'react';
import rank from "../assets/rank.png";


import './styles/rank.css'
import Text from './Text';
const Rank = () => {
  return (
    <div className="rank">
      <div className="rankContainer">
        <img src={rank} alt="Image" />
        <h1 className="rankTitle">Our Rankings</h1>
        <p className="rankSubtitle">Top Board School</p>
      </div>
      <div className="arrowContainer">
       
        <Text
          heading="#1"
          subtitle="In Dehradun"
          description="Co-Educational Boarding School in Dehradun by Education Today 2020"
        />
        <Text
          heading="#2"
          subtitle="In Uttarakhand"
          description="Co-Educational Boarding School in North India by Education Today 2020"
        />
        <Text
          heading="#4"
          subtitle="In India"
          description="Co-Educational Boarding School in India by Education Today 2020"
        />
      </div>
    </div>
  );
};

export default Rank;
