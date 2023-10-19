import * as React from "react";
import { SVGProps } from "react";
const AppleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <circle cx={19} cy={19} r={19} fill="#EDE6E5" />
    <g fill="#000" clipPath="url(#a-apple)">
      <path d="M24.455 18.636a4.544 4.544 0 0 1 2.164-3.813 4.652 4.652 0 0 0-3.666-1.982c-1.542-.162-3.037.922-3.823.922-.8 0-2.01-.906-3.314-.88a4.884 4.884 0 0 0-4.109 2.506c-1.775 3.075-.451 7.595 1.25 10.081.852 1.218 1.846 2.577 3.149 2.53 1.274-.053 1.75-.813 3.287-.813 1.524 0 1.97.812 3.299.781 1.366-.022 2.228-1.222 3.05-2.451a10.055 10.055 0 0 0 1.394-2.84 4.392 4.392 0 0 1-2.681-4.041ZM21.946 11.206A4.476 4.476 0 0 0 22.969 8a4.556 4.556 0 0 0-2.946 1.524 4.26 4.26 0 0 0-1.05 3.088 3.768 3.768 0 0 0 2.973-1.406Z" />
    </g>
    <defs>
      <clipPath id="a-apple">
        <path fill="#fff" d="M9 8h20v20H9z" />
      </clipPath>
    </defs>
  </svg>
);
export default AppleIcon;
