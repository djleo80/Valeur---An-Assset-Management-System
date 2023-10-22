/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineRoundedHome3 = ({ color = "#6D758F", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_47_15368)">
        <path
          d="M3.12288 14.2454H12.3556C13.3269 14.2454 14.1143 13.4581 14.1143 12.4868V5.89199L7.73924 1.49542L1.36426 5.89199V12.4868C1.36426 13.4581 2.15163 14.2454 3.12288 14.2454Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M5.7603 11.167C5.7603 10.1957 6.5477 9.40841 7.5189 9.40841H7.95856C8.92984 9.40841 9.71718 10.1957 9.71718 11.167V14.2446H5.7603V11.167Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_47_15368">
          <rect fill="white" height="15" transform="translate(0.239258 0.370422)" width="15" />
        </clipPath>
      </defs>
    </svg>
  );
};

LineRoundedHome3.propTypes = {
  color: PropTypes.string,
};
