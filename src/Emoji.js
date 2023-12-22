// src/Emoji.js
import React from "react";
import { ReactComponent as Happy } from "./emojis/happy.svg";
import { ReactComponent as Looking } from "./emojis/looking.svg";
import { ReactComponent as CoveringEye } from "./emojis/covering-eye.svg";

export const Emoji = ({ mood }) => {
  switch (mood) {
    case "happy":
      return <Happy className="emoji" />;
    case "looking":
      return <Looking className="emoji rotate" />;
    case "covering-eye":
      return <CoveringEye className="emoji covering-eye" />;
    default:
      return null;
  }
};
