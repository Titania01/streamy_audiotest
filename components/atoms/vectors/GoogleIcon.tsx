import * as React from "react"
import { SVGProps } from "react"

const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M9.36 10.699v-2.46h8.286c.081.429.123.936.123 1.485 0 1.845-.504 4.126-2.13 5.752C14.058 17.122 12.039 18 9.362 18 4.402 18 .231 13.96.231 9s4.17-9 9.131-9c2.745 0 4.699 1.077 6.168 2.48l-1.736 1.735c-1.053-.988-2.48-1.756-4.435-1.756C5.738 2.46 2.905 5.38 2.905 9c0 3.622 2.833 6.54 6.454 6.54 2.35 0 3.687-.943 4.544-1.8.696-.695 1.153-1.688 1.333-3.044l-5.877.003Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default GoogleIcon
