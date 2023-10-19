import * as React from "react";
import { SVGProps } from "react";
const SignUpArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9Zm0 15.75A6.758 6.758 0 0 1 2.25 9 6.758 6.758 0 0 1 9 2.25 6.758 6.758 0 0 1 15.75 9 6.758 6.758 0 0 1 9 15.75ZM13.5 9a4.506 4.506 0 0 1-3.75 4.437v.813a.75.75 0 0 1-1.5 0v-.813A4.506 4.506 0 0 1 4.5 9 .75.75 0 0 1 6 9c0 1.655 1.346 3 3 3 1.655 0 3-1.345 3-3a.75.75 0 0 1 1.5 0Zm-6-.08V5.33c0-.747.51-1.44 1.248-1.56A1.501 1.501 0 0 1 10.5 5.25h-.75a.75.75 0 0 0 0 1.5h.75v.75h-.75a.75.75 0 0 0 0 1.5h.75c0 .911-.812 1.632-1.752 1.48-.737-.12-1.248-.813-1.248-1.56Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SignUpArrowIcon;
