import React from 'react';
import './Button.css';

export default function Button({ type, className, children}) {
  return (
    <button type={type ? type : "button"} className={className? `btn-component ${className}` : "btn-component"}  > 
        {children}
    </button>
  )
}
