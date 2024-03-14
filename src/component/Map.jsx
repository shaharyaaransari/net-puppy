import React from 'react';
import map from "../assets/map.png";
import './styles/Map.css';

const Map = () => {
  return (
    <div className="map">
      <img src={map} alt="Map" className="map-image" />
      <div className="content">
        <h1 className="title">BECOME A PART OF THE...</h1>
        <h1 className="title" style={{ textAlign: 'end', color: 'rgba(166, 0, 40, 1)', marginBottom: '0' }}>TULA’S FAMILY</h1>
        <p className="address">VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR <br /> Dehradun, Uttarakhand, 248197</p>
        <div className="contact-info">
          <p>(+91) 9458311000</p>
          <p>info@tis.edu.in</p>
        </div>
        <div className="buttons">
          <button className="tour-button">VIRTUAL TOUR</button>
          <button className="apply-button">APPLY NOW</button>
          <button className="login-button">FEDENA LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
