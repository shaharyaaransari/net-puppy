import React from 'react';
import './styles/acivement.css'; // Import CSS file




import logo from "../assets/logo.png";
import home61 from '../assets/home61.png';
import home62 from '../assets/home62.png';
import home63 from '../assets/home63.png';
import ImageContent from './ImageContent';
import { Button } from './Button';

const Achivement = () => {
  return (
    <div className="acievement">
      <div className="leftSection">
        <div className="leftTop">
          <ImageContent imageUrl={home61} paragraph={'Best Residential School in Uttarakhand, India'} />
        </div>
        <div className="leftBottom">
          <ImageContent imageUrl={home63} paragraph={'Best Residential School in Uttarakhand, India'} />
        </div>
      </div>
      <div className="middleSection">
        <img src={logo} alt="See More" />
      </div>
      <div className="rightSection">
        <div className="rightTop">
          <p className="text">Our commitment to all-round development shines in diverse extracurricular activities.</p>
          <p className="highlight">Our Students love that!</p>
        </div>
        <div className="rightMiddle">
          <ImageContent imageUrl={home62} paragraph={'International School Award, India 2019'} />
        </div>
        <div className="rightBottom">
         <Button text={"SEE ALL AWARDS"}/>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
