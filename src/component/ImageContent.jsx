import React from 'react';

const ImageContent = ({ imageUrl, text, paragraph }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img src={imageUrl} alt="Image" style={{ maxWidth: '100%', width: '90%', height: 'auto' }} />
      <div style={{ position: 'absolute', bottom: '10px', left: '20px', padding: '5px', background: 'transparent' }}>
        <p style={{ fontFamily: 'Mirador', fontSize: '40px', fontStyle: 'italic', fontWeight: '900', lineHeight: '20px', letterSpacing: '0.02em', margin: '0', color: 'white' }}>{text}</p>
        <p style={{ fontFamily: 'Mirador', fontSize: '16px', fontStyle: 'italic', fontWeight: '900', lineHeight: '20px', letterSpacing: '0.02em', margin: '0', color: 'white', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageContent;
