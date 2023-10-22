/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineRoundedSearch5 = ({ color = "#6D758F", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="15"
      viewBox="0 0 15 15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1893 13.6982L10.1117 10.6206M1.28926 6.92754C1.28926 4.0947 3.58573 1.79823 6.41857 1.79823C9.25143 1.79823 11.5479 4.0947 11.5479 6.92754C11.5479 9.7604 9.25143 12.0568 6.41857 12.0568C3.58573 12.0568 1.28926 9.7604 1.28926 6.92754Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

LineRoundedSearch5.propTypes = {
  color: PropTypes.string,
};
