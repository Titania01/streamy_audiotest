import * as React from "react"
import { SVGProps } from "react"
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke="#5A5A5A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12ZM16 16l-4.5-4.5"
    />
  </svg>
)
export default SearchIcon
