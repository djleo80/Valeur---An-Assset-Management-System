/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineRoundedHome16 = ({ color = "#6D758F", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_47_15272)">
        <path
          d="M2.35391 10.5454H9.1246C9.83687 10.5454 10.4143 9.96804 10.4143 9.25576V4.41957L5.73924 1.19542L1.06425 4.41957V9.25576C1.06425 9.96804 1.64166 10.5454 2.35391 10.5454Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
        <path
          d="M4.28802 8.28794C4.28802 7.57566 4.86544 6.99828 5.57766 6.99828H5.90007C6.61235 6.99828 7.18973 7.57566 7.18973 8.28794V10.5448H4.28802V8.28794Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
      </g>
      <defs>
        <clipPath id="clip0_47_15272">
          <rect fill="white" height="11" transform="translate(0.239258 0.370422)" width="11" />
        </clipPath>
      </defs>
    </svg>
  );
};

LineRoundedHome16.propTypes = {
  color: PropTypes.string,
};
