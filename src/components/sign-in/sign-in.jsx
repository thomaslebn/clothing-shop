import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import "./sign-in.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I alreadu have an account</h2>
      <span> Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          autoComplete="on"
          value={email}
          onChange={handleChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          autoComplete="on"
          value={password}
          onChange={handleChange}
          label="password"
        />

        <CustomButton type="submit"> Sign In </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
