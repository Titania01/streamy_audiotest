import clsx from "clsx";
import React, { DetailedHTMLProps, ReactNode } from "react";

type InputProps = {
  suffixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLDivElement
>;

const Input = ({
  value,
  onChange,
  prefixIcon,
  suffixIcon,
  placeholder,
  backgroundColor,
  textColor,
  ...props
}: InputProps) => {
  return (
    <div style={{ backgroundColor, color: textColor }} className="input">
      {prefixIcon}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          suffixIcon && "mr-4",
          prefixIcon && "ml-4",
          "flex-grow"
        )}
      />
      {suffixIcon}
    </div>
  );
};

export default Input;
