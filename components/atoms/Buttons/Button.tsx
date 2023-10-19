import clsx from "clsx";
import React, { DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  children: ReactNode;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}
const Button = ({
  backgroundColor,
  className,
  textColor,
  children,
  prefixIcon,
  suffixIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx("button", className)}
      style={{ backgroundColor, color: textColor }}
      {...props}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </button>
  );
};

export default Button;
