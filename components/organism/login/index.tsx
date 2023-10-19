"use client";
import React, { ChangeEvent, useState } from "react";
import "./loginStyles.scss";
import AuthLayout from "../../layouts/AuthLayout";
import { Input } from "../../atoms/Inputs";
import GoogleIcon from "../../atoms/vectors/GoogleIcon";
import GoogleIconCircled from "../../atoms/vectors/GoogleIconCircled";
import CaretDown from "../../atoms/vectors/CaretDown";
import "./loginStyles.scss";
import Button from "../../atoms/Buttons/Button";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <AuthLayout>
      <form className="form">
        <h3 className="title">Log in with your socials below</h3>
        <Input
          backgroundColor="white"
          textColor="#000"
          value={"Choose account"}
          prefixIcon={<GoogleIconCircled />}
          suffixIcon={<CaretDown />}
          readOnly
        />
        <div className="email-login-cont">
          <h3>Log in with email.</h3>
          <Input
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="cta-cont">
          <Button
            backgroundColor="#7B61FF"
            textColor="#000"
            className="login-btn"
          >
            Login
          </Button>
          <Link href="#" className="forgot-password">
            Forgot password?
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
