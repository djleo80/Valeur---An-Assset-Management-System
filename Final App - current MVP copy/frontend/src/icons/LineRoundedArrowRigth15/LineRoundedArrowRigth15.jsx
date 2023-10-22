/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineRoundedArrowRigth15 = ({ color = "#2388FF", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.63342 2.09448L9.58917 5.87042L5.63342 9.64636"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.825"
      />
      <path
        d="M9.58917 5.87042L1.88922 5.87042"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.825"
      />
    </svg>
  );
};

LineRoundedArrowRigth15.propTypes = {
  color: PropTypes.string,
};
