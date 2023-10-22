/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LineRoundedSearch1 = ({ color = "#6D758F", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="11"
      viewBox="0 0 11 11"
      width="11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.48926 9.99823L7.29098 7.79995M0.989258 5.16202C0.989258 3.13857 2.62959 1.49823 4.65305 1.49823C6.67652 1.49823 8.31684 3.13857 8.31684 5.16202C8.31684 7.18549 6.67652 8.82582 4.65305 8.82582C2.62959 8.82582 0.989258 7.18549 0.989258 5.16202Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.11111"
      />
    </svg>
  );
};

LineRoundedSearch1.propTypes = {
  color: PropTypes.string,
};
