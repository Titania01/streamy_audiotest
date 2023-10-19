import * as React from "react";
import { SVGProps } from "react";
const CaretForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#282828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 13 6-6-6-6"
    />
  </svg>
);
export default CaretForward;
