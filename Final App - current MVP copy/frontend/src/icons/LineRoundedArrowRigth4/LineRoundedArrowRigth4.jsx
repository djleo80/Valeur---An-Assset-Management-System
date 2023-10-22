/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineRoundedArrowRigth4 = ({ color = "#2388FF", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.59494 2.72141L12.9891 7.87042L7.59494 13.0194"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.125"
      />
      <path
        d="M12.9891 7.87042L2.48921 7.87042"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.125"
      />
    </svg>
  );
};

LineRoundedArrowRigth4.propTypes = {
  color: PropTypes.string,
};
