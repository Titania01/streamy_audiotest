import * as React from "react";
import { SVGProps } from "react";
const CaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={8}
    fill="none"
    {...props}
  >
    <path
      stroke="#282828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 1 7 7 1 1"
    />
  </svg>
);
export default CaretDown;
