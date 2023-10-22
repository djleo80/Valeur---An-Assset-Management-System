/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LineRoundedArrowRigth4 } from "../../icons/LineRoundedArrowRigth4";
import { LineRoundedHome11 } from "../../icons/LineRoundedHome11";
import { LineRoundedHome15 } from "../../icons/LineRoundedHome15";
import { LineRoundedHome16 } from "../../icons/LineRoundedHome16";
import { LineRoundedHome3 } from "../../icons/LineRoundedHome3";

export const Link = ({
  weight,
  size,
  color,
  iconLeft,
  iconRight,
  className,
  text = "Link item",
  icon = <LineRoundedArrowRigth4 className="!relative !w-[15px] !h-[15px]" color="#6D758F" />,
}) => {
  return (
    <div className={`inline-flex items-center relative ${size === "default" ? "gap-[6px]" : "gap-[4px]"} ${className}`}>
      {!iconLeft && !iconRight && (
        <div
          className={`w-fit mt-[-1.00px] text-center whitespace-nowrap relative ${
            size === "small" && weight === "semi-bold"
              ? "font-display-1-semi-bold"
              : weight === "extra-bold" && size === "small"
              ? "font-display-1-extra-bold"
              : weight === "regular" && size === "default"
              ? "font-display-3-regular"
              : size === "default" && weight === "semi-bold"
              ? "font-display-3-semi-bold"
              : size === "default" && weight === "extra-bold"
              ? "font-display-3-extra-bold"
              : "font-display-1-regular"
          } ${
            size === "small" && weight === "semi-bold"
              ? "tracking-[var(--display-1-semi-bold-letter-spacing)]"
              : weight === "extra-bold" && size === "small"
              ? "tracking-[var(--display-1-extra-bold-letter-spacing)]"
              : weight === "regular" && size === "default"
              ? "tracking-[var(--display-3-regular-letter-spacing)]"
              : size === "default" && weight === "semi-bold"
              ? "tracking-[var(--display-3-semi-bold-letter-spacing)]"
              : size === "default" && weight === "extra-bold"
              ? "tracking-[var(--display-3-extra-bold-letter-spacing)]"
              : "tracking-[var(--display-1-regular-letter-spacing)]"
          } ${
            size === "small" && weight === "semi-bold"
              ? "text-[length:var(--display-1-semi-bold-font-size)]"
              : weight === "extra-bold" && size === "small"
              ? "text-[length:var(--display-1-extra-bold-font-size)]"
              : weight === "regular" && size === "default"
              ? "text-[length:var(--display-3-regular-font-size)]"
              : size === "default" && weight === "semi-bold"
              ? "text-[length:var(--display-3-semi-bold-font-size)]"
              : size === "default" && weight === "extra-bold"
              ? "text-[length:var(--display-3-extra-bold-font-size)]"
              : "text-[length:var(--display-1-regular-font-size)]"
          } ${
            size === "small" && weight === "semi-bold"
              ? "[font-style:var(--display-1-semi-bold-font-style)]"
              : weight === "extra-bold" && size === "small"
              ? "[font-style:var(--display-1-extra-bold-font-style)]"
              : weight === "regular" && size === "default"
              ? "[font-style:var(--display-3-regular-font-style)]"
              : size === "default" && weight === "semi-bold"
              ? "[font-style:var(--display-3-semi-bold-font-style)]"
              : size === "default" && weight === "extra-bold"
              ? "[font-style:var(--display-3-extra-bold-font-style)]"
              : "[font-style:var(--display-1-regular-font-style)]"
          } ${
            color === "primary-color"
              ? "text-primary-paletteblue"
              : color === "white"
              ? "text-neutral-colors100"
              : "text-neutral-colors600"
          } ${
            size === "small" && weight === "semi-bold"
              ? "font-[number:var(--display-1-semi-bold-font-weight)]"
              : weight === "extra-bold" && size === "small"
              ? "font-[number:var(--display-1-extra-bold-font-weight)]"
              : weight === "regular" && size === "default"
              ? "font-[number:var(--display-3-regular-font-weight)]"
              : size === "default" && weight === "semi-bold"
              ? "font-[number:var(--display-3-semi-bold-font-weight)]"
              : size === "default" && weight === "extra-bold"
              ? "font-[number:var(--display-3-extra-bold-font-weight)]"
              : "font-[number:var(--display-1-regular-font-weight)]"
          } ${
            size === "small" && weight === "semi-bold"
              ? "leading-[var(--display-1-semi-bold-line-height)]"
              : weight === "extra-bold" && size === "small"
              ? "leading-[var(--display-1-extra-bold-line-height)]"
              : weight === "regular" && size === "default"
              ? "leading-[var(--display-3-regular-line-height)]"
              : size === "default" && weight === "semi-bold"
              ? "leading-[var(--display-3-semi-bold-line-height)]"
              : size === "default" && weight === "extra-bold"
              ? "leading-[var(--display-3-extra-bold-line-height)]"
              : "leading-[var(--display-1-regular-line-height)]"
          }`}
        >
          {text}
        </div>
      )}

      {((color === "default" && iconLeft && size === "small" && weight === "regular") ||
        (color === "white" && iconLeft && size === "small" && weight === "regular") ||
        (color === "white" && iconLeft && size === "small" && weight === "semi-bold")) && (
        <LineRoundedHome11 className="!relative !w-[11px] !h-[11px]" color={color === "white" ? "white" : "#6D758F"} />
      )}

      {((color === "default" && iconLeft && size === "small" && weight === "regular") ||
        (color === "white" && iconLeft && size === "small" && weight === "regular") ||
        (color === "white" && iconLeft && size === "small" && weight === "semi-bold") ||
        iconRight) && (
        <div
          className={`w-fit relative text-center whitespace-nowrap ${
            size === "small" && weight === "semi-bold"
              ? "font-display-1-semi-bold"
              : weight === "extra-bold" && size === "small"
              ? "font-display-1-extra-bold"
              : weight === "regular" && size === "default"
              ? "font-display-3-regular"
              : size === "default" && weight === "semi-bold"
              ? "font-display-3-semi-bold"
              : weight === "extra-bold" && size === "default"
              ? "font-display-3-extra-bold"
              : "font-display-1-regular"
          } ${
            size === "small" && weight === "semi-bold"
              ? "tracking-[var(--display-1-semi-bold-letter-spacing)]"
              : weight === "extra-bold" && size === "small"
              ? "tracking-[var(--display-1-extra-bold-letter-spacing)]"
              : weight === "regular" && size === "default"
              ? "tracking-[var(--display-3-regular-letter-spacing)]"
              : size === "default" && weight === "semi-bold"
              ? "tracking-[var(--display-3-semi-bold-letter-spacing)]"
              : weight === "extra-bold" && size === "default"
              ? "tracking-[var(--display-3-extra-bold-letter-spacing)]"
              : "tracking-[var(--display-1-regular-letter-spacing)]"
          } ${
            size === "small" && weight === "semi-bold"
              ? "[font-style:var(--display-1-semi-bold-font-style)]"
              : weight === "extra-bold" && size === "small"
              ? "[font-style:var(--display-1-extra-bold-font-style)]"
              : weight === "regular" && size === "default"
              ? "[font-style:var(--display-3-regular-font-style)]"
              : size === "default" && weight === "semi-bold"
              ? "[font-style:var(--display-3-semi-bold-font-style)]"
              : weight === "extra-bold" && size === "default"
              ? "[font-style:var(--display-3-extra-bold-font-style)]"
              : "[font-style:var(--display-1-regular-font-style)]"
          } ${
            size === "small" && weight === "semi-bold"
              ? "text-[length:var(--display-1-semi-bold-font-size)]"
              : weight === "extra-bold" && size === "small"
              ? "text-[length:var(--display-1-extra-bold-font-size)]"
              : weight === "regular" && size === "default"
              ? "text-[length:var(--display-3-regular-font-size)]"
              : size === "default" && weight === "semi-bold"
              ? "text-[length:var(--display-3-semi-bold-font-size)]"
              : weight === "extra-bold" && size === "default"
              ? "text-[length:var(--display-3-extra-bold-font-size)]"
              : "text-[length:var(--display-1-regular-font-size)]"
          } ${
            color === "primary-color"
              ? "text-primary-paletteblue"
              : color === "white"
              ? "text-neutral-colors100"
              : "text-neutral-colors600"
          } ${
            size === "small" && weight === "semi-bold"
              ? "font-[number:var(--display-1-semi-bold-font-weight)]"
              : weight === "extra-bold" && size === "small"
              ? "font-[number:var(--display-1-extra-bold-font-weight)]"
              : weight === "regular" && size === "default"
              ? "font-[number:var(--display-3-regular-font-weight)]"
              : size === "default" && weight === "semi-bold"
              ? "font-[number:var(--display-3-semi-bold-font-weight)]"
              : weight === "extra-bold" && size === "default"
              ? "font-[number:var(--display-3-extra-bold-font-weight)]"
              : "font-[number:var(--display-1-regular-font-weight)]"
          } ${
            size === "small" && weight === "semi-bold"
              ? "leading-[var(--display-1-semi-bold-line-height)]"
              : weight === "extra-bold" && size === "small"
              ? "leading-[var(--display-1-extra-bold-line-height)]"
              : weight === "regular" && size === "default"
              ? "leading-[var(--display-3-regular-line-height)]"
              : size === "default" && weight === "semi-bold"
              ? "leading-[var(--display-3-semi-bold-line-height)]"
              : weight === "extra-bold" && size === "default"
              ? "leading-[var(--display-3-extra-bold-line-height)]"
              : "leading-[var(--display-1-regular-line-height)]"
          }`}
        >
          {text}
        </div>
      )}

      {((color === "default" && iconLeft && weight === "semi-bold") ||
        (color === "primary-color" && iconLeft && size === "small" && weight === "extra-bold") ||
        (color === "primary-color" && iconLeft && size === "small" && weight === "regular") ||
        (color === "primary-color" && iconLeft && weight === "semi-bold") ||
        (color === "white" && iconLeft && size === "default" && weight === "semi-bold") ||
        (iconLeft && size === "default" && weight === "regular")) && (
        <>
          <LineRoundedHome15
            className={size === "default" ? "!relative !w-[15px] !h-[15px]" : "!relative !w-[11px] !h-[11px]"}
            color={color === "primary-color" ? "#2388FF" : color === "white" ? "white" : "#6D758F"}
          />
          <div
            className={`w-fit text-center whitespace-nowrap relative ${
              weight === "regular" && size === "small"
                ? "font-display-1-regular"
                : weight === "extra-bold"
                ? "font-display-1-extra-bold"
                : weight === "regular" && size === "default"
                ? "font-display-3-regular"
                : size === "default" && weight === "semi-bold"
                ? "font-display-3-semi-bold"
                : "font-display-1-semi-bold"
            } ${
              weight === "regular" && size === "small"
                ? "tracking-[var(--display-1-regular-letter-spacing)]"
                : weight === "extra-bold"
                ? "tracking-[var(--display-1-extra-bold-letter-spacing)]"
                : weight === "regular" && size === "default"
                ? "tracking-[var(--display-3-regular-letter-spacing)]"
                : size === "default" && weight === "semi-bold"
                ? "tracking-[var(--display-3-semi-bold-letter-spacing)]"
                : "tracking-[var(--display-1-semi-bold-letter-spacing)]"
            } ${
              weight === "regular" && size === "small"
                ? "[font-style:var(--display-1-regular-font-style)]"
                : weight === "extra-bold"
                ? "[font-style:var(--display-1-extra-bold-font-style)]"
                : weight === "regular" && size === "default"
                ? "[font-style:var(--display-3-regular-font-style)]"
                : size === "default" && weight === "semi-bold"
                ? "[font-style:var(--display-3-semi-bold-font-style)]"
                : "[font-style:var(--display-1-semi-bold-font-style)]"
            } ${
              weight === "regular" && size === "small"
                ? "text-[length:var(--display-1-regular-font-size)]"
                : weight === "extra-bold"
                ? "text-[length:var(--display-1-extra-bold-font-size)]"
                : weight === "regular" && size === "default"
                ? "text-[length:var(--display-3-regular-font-size)]"
                : size === "default" && weight === "semi-bold"
                ? "text-[length:var(--display-3-semi-bold-font-size)]"
                : "text-[length:var(--display-1-semi-bold-font-size)]"
            } ${
              color === "primary-color"
                ? "text-primary-paletteblue"
                : color === "white"
                ? "text-neutral-colors100"
                : "text-neutral-colors600"
            } ${
              weight === "regular" && size === "small"
                ? "font-[number:var(--display-1-regular-font-weight)]"
                : weight === "extra-bold"
                ? "font-[number:var(--display-1-extra-bold-font-weight)]"
                : weight === "regular" && size === "default"
                ? "font-[number:var(--display-3-regular-font-weight)]"
                : size === "default" && weight === "semi-bold"
                ? "font-[number:var(--display-3-semi-bold-font-weight)]"
                : "font-[number:var(--display-1-semi-bold-font-weight)]"
            } ${
              weight === "regular" && size === "small"
                ? "leading-[var(--display-1-regular-line-height)]"
                : weight === "extra-bold"
                ? "leading-[var(--display-1-extra-bold-line-height)]"
                : weight === "regular" && size === "default"
                ? "leading-[var(--display-3-regular-line-height)]"
                : size === "default" && weight === "semi-bold"
                ? "leading-[var(--display-3-semi-bold-line-height)]"
                : "leading-[var(--display-1-semi-bold-line-height)]"
            }`}
          >
            {text}
          </div>
        </>
      )}

      {((color === "default" && iconLeft && size === "small" && weight === "extra-bold") ||
        (color === "white" && iconLeft && size === "small" && weight === "extra-bold")) && (
        <>
          <LineRoundedHome16
            className="!relative !w-[11px] !h-[11px]"
            color={color === "white" ? "white" : "#6D758F"}
          />
          <div
            className={`font-display-1-extra-bold w-fit tracking-[var(--display-1-extra-bold-letter-spacing)] [font-style:var(--display-1-extra-bold-font-style)] text-[length:var(--display-1-extra-bold-font-size)] font-[number:var(--display-1-extra-bold-font-weight)] text-center whitespace-nowrap leading-[var(--display-1-extra-bold-line-height)] relative ${
              color === "white" ? "text-neutral-colors100" : "text-neutral-colors600"
            }`}
          >
            {text}
          </div>
        </>
      )}

      {size === "default" && weight === "extra-bold" && iconLeft && (
        <>
          <LineRoundedHome3
            className="!relative !w-[15px] !h-[15px]"
            color={color === "primary-color" ? "#2388FF" : color === "white" ? "white" : "#6D758F"}
          />
          <div
            className={`font-display-3-extra-bold w-fit tracking-[var(--display-3-extra-bold-letter-spacing)] [font-style:var(--display-3-extra-bold-font-style)] text-[length:var(--display-3-extra-bold-font-size)] relative font-[number:var(--display-3-extra-bold-font-weight)] text-center whitespace-nowrap leading-[var(--display-3-extra-bold-line-height)] ${
              color === "primary-color"
                ? "text-primary-paletteblue"
                : color === "white"
                ? "text-neutral-colors100"
                : "text-neutral-colors600"
            }`}
          >
            {text}
          </div>
        </>
      )}

      {iconRight && <>{icon}</>}
    </div>
  );
};

Link.propTypes = {
  weight: PropTypes.oneOf(["extra-bold", "regular", "semi-bold"]),
  size: PropTypes.oneOf(["default", "small"]),
  color: PropTypes.oneOf(["primary-color", "white", "default"]),
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  text: PropTypes.string,
};
