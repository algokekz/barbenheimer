import React from 'react';

export const Button = ({ label, style, handleClick }) => (
  
  
  <button
    style={style}
    onClick={handleClick}
  >
    {label}
  </button>
);

