import * as React from "react";
import { SVGProps } from "react";
const ModalCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <circle cx={13.5} cy={13.5} r={13.5} fill="#525252" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17.763 9.237-8.526 8.526M9.237 9.237l8.526 8.526"
    />
  </svg>
);
export default ModalCloseIcon;
