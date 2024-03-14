import React from 'react';
import youtube from '../assets/youtube.png';

export default function Youtube() {
  return (
    <div
      style={{
        position: 'relative', // Make the div position relative
        backgroundImage: `url(${youtube})`,
        backgroundSize: 'cover',
        width: '60%', 
        height: '500px',
        marginTop: '4rem',
        marginLeft: '9rem',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube-filled" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path strokeLinecap="none" strokeLinejoin="round" d="M0 0h24v24H0z" fill="none"/>
        <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" fill="currentColor" />
      </svg>
    </div>
  );
}
