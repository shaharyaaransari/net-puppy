import React from 'react';

const Policy = () => {
  return (
    <div style={{ width: '100%', margin: ' 10px auto', height: '140px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <div style={{ marginRight: '4px' }}>
        <p style={{ textAlign: 'start', fontSize: '30px', margin: '0' }}>FIND YOUR</p>
        <p style={{ textAlign: 'end', fontSize: '30px', color: 'rgba(166, 0, 40, 1)', margin: '0' }}>FOCUS</p>
      </div>
      <div style={{ display: 'flex' }}>
        <ul style={{ listStyleType: 'none', textAlign: 'center', marginTop: '0', marginBottom: '0', marginRight: '10px' }}>
          <li>-FAQ</li>
          <li>-Calendar</li>
          <li>-E-Prospectus</li>
        </ul>
        <ul style={{ listStyleType: 'none', textAlign: 'center', marginTop: '4px', marginBottom: '0', marginRight: '10px' }}>
          <li>-Registration Form</li>
          <li>-Blogs</li>
          <li>-Privacy Policy</li>
        </ul>
        <ul style={{ listStyleType: 'none', textAlign: 'center', marginTop: '4px', marginBottom: '0' }}>
          <li></li>
          <br />
          <li>-Terms & Conditions</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
