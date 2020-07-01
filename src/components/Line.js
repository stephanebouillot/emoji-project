import React from "react";

function Line(props) {
  return (
    <>
      <div className="container">
        <div className="ligne">
          <div className="symbol">{props.symbol}</div>
          <div className="title">{props.title}</div>
        </div>
      </div>
    </>
  );
}

export default Line;
