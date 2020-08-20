import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <p className="code f3 center black">
        {"This magic brain will detect the face from the image"}
      </p>
      <div className="f3 white">{`${name}, your current rank is: `}</div>
      <div className="f1 white">{entries}</div>
    </div>
  );
};

export default Rank;
