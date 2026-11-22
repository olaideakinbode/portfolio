import React from 'react';
import './Divider.css';

export default function Divider({ text }) {
  return (
    <div className="divider-container" role="separator">
      {text && <span className="divider-text">{text}</span>}
    </div>
  );
}