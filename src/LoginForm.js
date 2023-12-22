// src/LoginForm.js
import React, { useState } from "react";

const LoginForm = ({ onEmailChange, onPasswordChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    onEmailChange(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    onPasswordChange(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your validation logic here
    const isValidEmail = /* Add your email validation logic */ true;
    const isValidPassword = /* Add your password validation logic */ true;

    // Update the state based on validation
    setIsValid(isValidEmail && isValidPassword);

    if (isValidEmail && isValidPassword) {
      // Perform form submission logic
      console.log("Form submitted!");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email Label</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password Label</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" disabled={!isValid}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
