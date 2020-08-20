import React from "react";
import "./Face.css";

const Face = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute pt3 ">
        <img alt=" " src={imageUrl} width="auto" height="300" id="inputimage" />
        <div
          className="bounding-box"
          style={{
            top: box.top_row,
            bottom: box.bottom_row,
            left: box.left_col,
            right: box.right_col,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Face;
