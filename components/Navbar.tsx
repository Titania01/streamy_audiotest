"use client";
import React, { useState } from "react";
import { SearchInput } from "./atoms/Inputs";
import Button from "./atoms/Buttons/Button";
import PhoneIcon from "./atoms/vectors/PhoneIcon";
import SignUpArrowIcon from "./atoms/vectors/SignUpArrowIcon";
import UserIcon from "./atoms/vectors/UserIcon";
import Modal from "./molecules/Modal";
import Login from "./organism/login";
import SignUp from "./organism/SignUp";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [authType, setAuthType] = useState("login");

  const handleOpenAuthModal = (type: "login" | "signup") => {
    setAuthType(type);
    setShowModal(true);
  };
  return (
    <div className="navbar">
      <SearchInput
        width="30rem"
        placeholder="Search by Podcast Name, Host name, Categories, Tags..."
      />
      <div className="nav-buttons-cont">
        <Button className="download-btn" prefixIcon={<PhoneIcon />}>
          Download the app
        </Button>
        <div className="auth-btn-cont">
          <Button
            prefixIcon={<SignUpArrowIcon />}
            className="sign-up-btn"
            onClick={() => handleOpenAuthModal("signup")}
          >
            SIGN UP
          </Button>
          <Button
            onClick={() => handleOpenAuthModal("login")}
            className="login-btn"
            prefixIcon={<UserIcon />}
          >
            LOGIN
          </Button>
        </div>
      </div>
      <Modal openModal={showModal} closeModal={setShowModal}>
        {authType === "login" && <Login />}
        {authType === "signup" && <SignUp changeAuthType={setAuthType} />}
      </Modal>
    </div>
  );
};

export default Navbar;
