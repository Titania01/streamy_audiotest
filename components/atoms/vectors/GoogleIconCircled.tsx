import * as React from "react";
import { SVGProps } from "react";

const GoogleIconCircled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <circle cx={19} cy={19} r={19} fill="#EDE6E5" />
    <g clipPath="url(#a-google)">
      <path
        fill="#000"
        d="M19.36 20.699v-2.46h8.286c.081.429.123.936.123 1.485 0 1.845-.504 4.126-2.13 5.752-1.581 1.646-3.6 2.524-6.277 2.524-4.96 0-9.131-4.04-9.131-9s4.17-9 9.131-9c2.745 0 4.699 1.077 6.168 2.48l-1.736 1.735c-1.053-.988-2.48-1.756-4.435-1.756-3.622 0-6.454 2.92-6.454 6.541 0 3.622 2.833 6.54 6.454 6.54 2.35 0 3.687-.943 4.544-1.8.696-.695 1.153-1.688 1.333-3.044l-5.877.003Z"
      />
    </g>
    <defs>
      <clipPath id="a-google">
        <path fill="#fff" d="M10 10h18v18H10z" />
      </clipPath>
    </defs>
  </svg>
);
export default GoogleIconCircled;
