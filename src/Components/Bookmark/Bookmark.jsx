import React from "react";
import "./Bookmark.css";

const Bookmark = ({ active }) => {
  return (
    <>
      <div className={`markDiv ${active ? "end1" : "start1"}`}>
        <div className={active ? "mark active" : "mark"}></div>
      </div>
    </>
  );
};

export default Bookmark;
