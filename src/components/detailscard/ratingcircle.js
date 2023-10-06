import React from "react";
import "./CircularRating.css";

const CircularRating = (props) => {
  const percentage = (props.rating / 5) * 100;
  const circleRadius = 17;

  const strokeDashoffset =
    2 * Math.PI * circleRadius -
    (percentage / 100) * (2 * Math.PI * circleRadius);

  return (
    <div className="circular-rating">
      <svg className="circle-svg">
        <circle className="circle-bg" cx="50" cy="50" r={circleRadius} />
        <circle
          className="circle-progress"
          cx="50"
          cy="50"
          r={circleRadius}
          strokeDasharray={2 * Math.PI * circleRadius}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="rating-value">{(props.rating / 0.05).toFixed(1)}</div>
    </div>
  );
};

export default CircularRating;
