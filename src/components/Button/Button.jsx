import React from 'react';

function Button({ text, className, ...props }) {
  return (
    <button className={className ? `btn ${className}` : 'btn'} {...props}>
      {text}
    </button>
  );
}

export default Button;