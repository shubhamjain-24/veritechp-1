import React from 'react';
import './Bookmark2.css';

const Bookmark2 = ({ title, active }) => {
  return (
    <div className={`b2mainContainer ${active ? "end" : "start"}`}>
      <div className={active ? "mark2 active" : "mark2"}></div>
      <div className="header">
        {title}
      </div>
      <div className="nocontent"></div>
    </div>
  );
};

export default Bookmark2;
