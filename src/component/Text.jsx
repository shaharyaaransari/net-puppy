
import React from 'react';

const Text = ({ heading, subtitle, description }) => {
  return (
    <div className="textBox" style={{ backgroundColor: 'rgba(185, 1, 36, 1)', width: '200px', height: '200px' }}>
      <h1 className="heading" style={{ fontFamily: 'Miltonian', fontSize: '40px', fontWeight: '400', lineHeight: '2px', letterSpacing: '0.02em', textAlign: 'center' }}>{heading}</h1>
      <p className="subtitle" style={{ fontFamily: 'Mirador', fontSize: '18px', fontStyle: 'italic', fontWeight: '900', lineHeight: '3px', letterSpacing: '0.02em', textAlign: 'center' }}>{subtitle}</p>
      <p className="description" style={{ fontFamily: 'TT Chocolates Trl', fontSize: '15px', fontWeight: '400', lineHeight: '18px', letterSpacing: '0.02em', textAlign: 'center' }}>{description}</p>
    </div>
  );
};

export default Text;
