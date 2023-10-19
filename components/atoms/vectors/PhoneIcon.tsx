import * as React from "react";
import { SVGProps } from "react";
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1EAEA3"
        d="M11.284 0H6.716A3.754 3.754 0 0 0 3 3.75v10.5A3.754 3.754 0 0 0 6.75 18h4.5A3.754 3.754 0 0 0 15 14.25V3.75A3.755 3.755 0 0 0 11.284 0ZM13.5 14.25c0 1.24-1.01 2.25-2.25 2.25h-4.5c-1.24 0-2.25-1.01-2.25-2.25V3.75c0-1.09.779-2 1.808-2.206l.52 1.041A.75.75 0 0 0 7.5 3h3a.75.75 0 0 0 .671-.415l.52-1.041A2.254 2.254 0 0 1 13.5 3.75v10.5ZM9.75 15h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PhoneIcon;
