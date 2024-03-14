import React from 'react';
import './styles/colabration.css'; // Import CSS file
import home9CO from "../assets/home9CO.png";
import home9AS from "../assets/home9AS.png";
import home9CT from "../assets/home9CT.png";
import home9DAN from "../assets/home9DAN.png";
import home9IN from "../assets/home9IN.png";
import home9LEO from "../assets/home9LIO.png";
import home9PEN from "../assets/home9PEN.png";
import home9TRI from "../assets/home9TRI.png";
import home9UN from "../assets/home9UN.png";
import home9YOU from "../assets/home9YOU.png";

const Colabration = () => {
  return (
    <div className="colabration">
      <div className="leftImage">
        <img src={home9CO} alt="Image" />
        <div className="textOverlay">
          <p>
            What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive.
          </p>
        </div>
      </div>
      <div className="rightImages">
        <div className="topRow">
          <img src={home9AS} alt="Image" />
          <img src={home9YOU} alt="Image" />
          <img src={home9LEO} alt="Image" />
          <img src={home9PEN} alt="Image" />
        </div>
        <div className="bottomRow">
          <img src={home9UN} alt="Image" />
          <img src={home9IN} alt="Image" />
          <img src={home9TRI} alt="Image" />
          <img src={home9DAN} alt="Image" />
          <img src={home9CT} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Colabration;
