/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { DetailedHTMLProps, ReactNode } from "react";

interface AuthLayoutProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="auth-layout">
      <div>{children}</div>
      <div className="img-cont">
        <img src={"/images/auth-illustration.png"} alt="" />
        <p>Join a community of podcast lovers and creators</p>
      </div>
    </div>
  );
};

export default AuthLayout;
