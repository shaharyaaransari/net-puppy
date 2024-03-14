import React from 'react';
import './styles/feedback.css'; // Import CSS file
import phone from "../assets/phone.png";
import home81 from "../assets/home81.png";
import home82 from "../assets/home82.png";

const HomePageContent8 = () => {
  return (
    <div className="feedback">
      <div className="contentLeft">
        <h1 className="title">From the</h1>
        <h1 className="title parent">Parent</h1>
        <div className="dividerContainer">
          <img src={home81} alt="Divider" style={{width:"30px"}}  />
          <img src={home82} alt="Divider"  />
        </div>
        <p className="description">
          What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive to their unique needs, providing the support and encouragement necessary for their academic success.
        </p>
      </div>
      <div className="contentRight">
        <div className="phoneContainer">
          <img src={phone} alt="Phone" className="phone" />
        </div>
      </div>
    </div>
  );
};

export default HomePageContent8;
