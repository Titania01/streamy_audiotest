"use client";
import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Input } from "../../atoms/Inputs";
import Link from "next/link";
import GoogleIconCircled from "../../atoms/vectors/GoogleIconCircled";
import CaretDown from "../../atoms/vectors/CaretDown";
import CaretForward from "../../atoms/vectors/CaretForward";
import FacebookIconCircled from "../../atoms/vectors/Facebook";
import AppleIcon from "../../atoms/vectors/AppleIconCircled";
import EmailIconCircled from "../../atoms/vectors/EmailIconCircled";
import "./signupStyles.scss";

export interface SignupProps {
  changeAuthType: (val: "login" | "signup") => void;
}
const SignUp = ({ changeAuthType }: SignupProps) => {
  return (
    <AuthLayout>
      <form className="form">
        <h3 className="create-account-text">Create an account</h3>
        <div className="inputs-cont">
          <Input
            backgroundColor="white"
            textColor="#000"
            value={"Continue with google"}
            prefixIcon={<GoogleIconCircled />}
            suffixIcon={<CaretForward />}
            readOnly
          />
          <Input
            backgroundColor="white"
            textColor="#000"
            value={"Continue with facebook"}
            prefixIcon={<FacebookIconCircled />}
            suffixIcon={<CaretForward />}
            readOnly
          />
          <Input
            backgroundColor="white"
            textColor="#000"
            value={"Continue with apple ID"}
            prefixIcon={<AppleIcon />}
            suffixIcon={<CaretForward />}
            readOnly
          />
          <Input
            backgroundColor="white"
            textColor="#000"
            value={"Create account with your email"}
            prefixIcon={<EmailIconCircled />}
            suffixIcon={<CaretDown />}
            readOnly
          />
        </div>
        <h3>
          Already have an account?{" "}
          <Link
            className="login-cta"
            href={"#"}
            onClick={() => changeAuthType("login")}
          >
            Log in
          </Link>
        </h3>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
