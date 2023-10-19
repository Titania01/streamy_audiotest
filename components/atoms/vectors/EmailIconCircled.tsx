import * as React from "react";
import { SVGProps } from "react";
const EmailIconCircled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <circle cx={19} cy={19} r={19} fill="#EDE6E5" />
    <g fill="#000" clipPath="url(#a-email)">
      <path d="m27.965 14.156-6.313 6.314a3.755 3.755 0 0 1-5.304 0l-6.313-6.313c-.011.118-.035.225-.035.343v9a3.754 3.754 0 0 0 3.75 3.75h10.5A3.754 3.754 0 0 0 28 23.5v-9c0-.118-.024-.225-.035-.344Z" />
      <path d="m20.591 19.41 6.851-6.852a3.74 3.74 0 0 0-3.192-1.808h-10.5a3.74 3.74 0 0 0-3.192 1.808l6.85 6.852a2.255 2.255 0 0 0 3.183 0Z" />
    </g>
    <defs>
      <clipPath id="a-email">
        <path fill="#fff" d="M10 10h18v18H10z" />
      </clipPath>
    </defs>
  </svg>
);
export default EmailIconCircled;
