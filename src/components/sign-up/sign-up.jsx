import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account </h2>
      <span> Sihn up with your email and your password </span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
          label="name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="on"
          required
          label="password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          autoComplete="on"
          required
          label="confirm password"
        />

        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
