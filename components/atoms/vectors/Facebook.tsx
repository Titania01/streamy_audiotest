import * as React from "react";
import { SVGProps } from "react";
const FacebookIconCircled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <circle cx={19} cy={19} r={19} fill="#EDE6E5" />
    <g clipPath="url(#a-facebook)">
      <path
        fill="#000"
        d="M29 19.06c0 4.992-3.662 9.13-8.442 9.88v-6.97h2.325l.442-2.883h-2.767v-1.87c0-.79.387-1.558 1.625-1.558h1.258v-2.455s-1.142-.195-2.233-.195c-2.278 0-3.766 1.381-3.766 3.88v2.198h-2.533v2.883h2.533v6.97C12.662 28.186 9 24.05 9 19.06c0-5.522 4.477-10 10-10s10 4.477 10 10Z"
      />
    </g>
    <defs>
      <clipPath id="a-facebook">
        <path fill="#fff" d="M9 9h20v20H9z" />
      </clipPath>
    </defs>
  </svg>
);
export default FacebookIconCircled;
