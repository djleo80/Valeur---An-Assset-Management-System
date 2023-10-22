/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LineRoundedArrowRigth } from "../../icons/LineRoundedArrowRigth";
import { LineRoundedArrowRigth21 } from "../../icons/LineRoundedArrowRigth21";
import { LineRoundedArrowRigth22 } from "../../icons/LineRoundedArrowRigth22";
import { LineRoundedArrowRigth23 } from "../../icons/LineRoundedArrowRigth23";
import { LineRoundedArrowRigth24 } from "../../icons/LineRoundedArrowRigth24";
import { LineRoundedArrowRigth25 } from "../../icons/LineRoundedArrowRigth25";
import { LineRoundedSearch1 } from "../../icons/LineRoundedSearch1";
import { LineRoundedSearch3 } from "../../icons/LineRoundedSearch3";
import { LineRoundedSearch4 } from "../../icons/LineRoundedSearch4";
import { LineRoundedSearch5 } from "../../icons/LineRoundedSearch5";

export const PrimaryButton = ({ size, color, iconLeft, iconRight, className, text = "Default" }) => {
  return (
    <div
      className={`inline-flex items-center justify-center relative ${size === "large" ? "gap-[4px]" : "gap-[3px]"} ${
        color === "default" ? "shadow-neutral-shadow-02" : ""
      } ${
        !iconLeft && size === "default" && !iconRight
          ? "px-[18px] py-[15px]"
          : size === "large"
          ? "px-[22px] py-[18px]"
          : size === "small"
          ? "p-[12px]"
          : "px-[18px] py-[14px]"
      } ${
        !iconLeft && size === "default" && color === "white" && !iconRight
          ? "rounded-[7px]"
          : (color === "default" && iconLeft && size === "large") ||
            (color === "white" && !iconRight && size === "large") ||
            (iconRight && size === "large")
          ? "rounded-[8px]"
          : size === "small"
          ? "rounded-[4px]"
          : "rounded-[6px]"
      } ${color === "white" ? "bg-neutral-colors100" : "bg-neutral-colors600"} ${className}`}
    >
      {iconLeft && size === "large" && (
        <LineRoundedSearch5 className="!relative !w-[14px] !h-[14px]" color={color === "white" ? "#6D758F" : "white"} />
      )}

      {((iconLeft && size === "large") || (iconRight && size === "large") || (iconRight && size === "default")) && (
        <div
          className={`w-fit relative text-center whitespace-nowrap ${
            size === "large" ? "font-display-3-semi-bold" : "font-display-2-semi-bold"
          } ${
            size === "large"
              ? "tracking-[var(--display-3-semi-bold-letter-spacing)]"
              : "tracking-[var(--display-2-semi-bold-letter-spacing)]"
          } ${
            size === "large"
              ? "[font-style:var(--display-3-semi-bold-font-style)]"
              : "[font-style:var(--display-2-semi-bold-font-style)]"
          } ${
            size === "large"
              ? "text-[length:var(--display-3-semi-bold-font-size)]"
              : "text-[length:var(--display-2-semi-bold-font-size)]"
          } ${color === "white" ? "text-neutral-colors600" : "text-neutral-colors100"} ${
            size === "large"
              ? "font-[number:var(--display-3-semi-bold-font-weight)]"
              : "font-[number:var(--display-2-semi-bold-font-weight)]"
          } ${
            size === "large"
              ? "leading-[var(--display-3-semi-bold-line-height)]"
              : "leading-[var(--display-2-semi-bold-line-height)]"
          }`}
        >
          {text}
        </div>
      )}

      {iconRight && color === "default" && size === "default" && (
        <LineRoundedArrowRigth25 className="!relative !w-[12px] !h-[12px]" />
      )}

      {iconRight && size === "default" && color === "white" && (
        <LineRoundedArrowRigth24 className="!relative !w-[12px] !h-[12px]" />
      )}

      {color === "default" && size === "default" && iconLeft && (
        <>
          <LineRoundedSearch4 className="!relative !w-[12px] !h-[12px]" />
          <div className="relative w-fit font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors100 text-[length:var(--display-2-semi-bold-font-size)] text-center tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--display-2-semi-bold-font-style)]">
            {text}
          </div>
        </>
      )}

      {size === "default" && color === "white" && iconLeft && (
        <>
          <LineRoundedSearch3 className="!relative !w-[12px] !h-[12px]" />
          <div className="relative w-fit font-display-2-semi-bold font-[number:var(--display-2-semi-bold-font-weight)] text-neutral-colors600 text-[length:var(--display-2-semi-bold-font-size)] text-center tracking-[var(--display-2-semi-bold-letter-spacing)] leading-[var(--display-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--display-2-semi-bold-font-style)]">
            {text}
          </div>
        </>
      )}

      {((iconRight && size === "small") || (!iconLeft && !iconRight)) && (
        <div
          className={`w-fit relative text-center whitespace-nowrap ${
            size === "default"
              ? "font-display-2-semi-bold"
              : size === "large"
              ? "font-display-3-semi-bold"
              : "font-display-1-semi-bold"
          } ${!iconRight ? "mt-[-1.00px]" : "mt-[-0.50px]"} ${
            size === "default"
              ? "tracking-[var(--display-2-semi-bold-letter-spacing)]"
              : size === "large"
              ? "tracking-[var(--display-3-semi-bold-letter-spacing)]"
              : "tracking-[var(--display-1-semi-bold-letter-spacing)]"
          } ${
            size === "default"
              ? "text-[length:var(--display-2-semi-bold-font-size)]"
              : size === "large"
              ? "text-[length:var(--display-3-semi-bold-font-size)]"
              : "text-[length:var(--display-1-semi-bold-font-size)]"
          } ${
            size === "default"
              ? "[font-style:var(--display-2-semi-bold-font-style)]"
              : size === "large"
              ? "[font-style:var(--display-3-semi-bold-font-style)]"
              : "[font-style:var(--display-1-semi-bold-font-style)]"
          } ${color === "default" ? "text-neutral-colors100" : "text-neutral-colors600"} ${
            size === "default"
              ? "font-[number:var(--display-2-semi-bold-font-weight)]"
              : size === "large"
              ? "font-[number:var(--display-3-semi-bold-font-weight)]"
              : "font-[number:var(--display-1-semi-bold-font-weight)]"
          } ${
            size === "default"
              ? "leading-[var(--display-2-semi-bold-line-height)]"
              : size === "large"
              ? "leading-[var(--display-3-semi-bold-line-height)]"
              : "leading-[var(--display-1-semi-bold-line-height)]"
          }`}
        >
          {text}
        </div>
      )}

      {iconRight && color === "default" && size === "small" && (
        <LineRoundedArrowRigth23 className="!relative !w-[10px] !h-[10px]" />
      )}

      {iconRight && color === "white" && size === "small" && (
        <LineRoundedArrowRigth22 className="!relative !w-[10px] !h-[10px]" />
      )}

      {size === "small" && iconLeft && (
        <>
          <LineRoundedSearch1
            className="!relative !w-[10px] !h-[10px]"
            color={color === "white" ? "#6D758F" : "white"}
          />
          <div
            className={`font-display-1-semi-bold w-fit mt-[-0.50px] tracking-[var(--display-1-semi-bold-letter-spacing)] text-[length:var(--display-1-semi-bold-font-size)] [font-style:var(--display-1-semi-bold-font-style)] font-[number:var(--display-1-semi-bold-font-weight)] text-center whitespace-nowrap leading-[var(--display-1-semi-bold-line-height)] relative ${
              color === "white" ? "text-neutral-colors600" : "text-neutral-colors100"
            }`}
          >
            {text}
          </div>
        </>
      )}

      {iconRight && color === "default" && size === "large" && (
        <LineRoundedArrowRigth className="!relative !w-[14px] !h-[14px]" />
      )}

      {iconRight && color === "white" && size === "large" && (
        <LineRoundedArrowRigth21 className="!relative !w-[14px] !h-[14px]" color="#6D758F" />
      )}
    </div>
  );
};

PrimaryButton.propTypes = {
  size: PropTypes.oneOf(["large", "small", "default"]),
  color: PropTypes.oneOf(["white", "default"]),
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  text: PropTypes.string,
};
