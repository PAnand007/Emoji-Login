// src/App.js
import React, { useState } from "react";
import { Emoji } from "./Emoji";
import LoginForm from "./LoginForm";
import "./App.css";

function App() {
  const [mood, setMood] = useState("happy");

  const handleEmailChange = (email) => {
    // Update the emoji based on the email input
    if (email === "") {
      setMood("happy");
    } else {
      setMood("looking");
    }
  };

  const handlePasswordChange = (password) => {
    // Update the emoji based on the password input
    if (password === "") {
      setMood("happy");
    } else {
      setMood("covering-eye");
    }
  };

  return (
    <div className="app">
      <div className="emoji-container">
        <Emoji mood={mood} />
      </div>
      <LoginForm
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
      />
    </div>
  );
}

export default App;
