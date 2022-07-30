import React, { useState } from "react";
import "./darkModeButton.css";
import { DARK_MODE, LIGHT_MODE } from "../../utils/constants";

type Props = {};

const DarkModeButton = (props: Props) => {
  const [toggled, setToggled] = useState("dark");
  const toggleDakMode = () => {
    let store = document.querySelector<HTMLElement>(":root");
    const mode = localStorage.getItem("mode") || "light";

    if (mode === "light") {
      setToggled("dark");
      localStorage.setItem("mode", "dark");
      const darkMode = DARK_MODE as any;
      for (const key in darkMode) {
        store!.style.setProperty(key, darkMode[key]);
      }
    } else {
      setToggled("light");
      localStorage.setItem("mode", "light");
      const lightMode = LIGHT_MODE as any;
      for (const key in lightMode) {
        store!.style.setProperty(key, lightMode[key]);
      }
    }
  };
  return (
    <div
      onClick={toggleDakMode}
      className={`toggle${toggled === "dark" ? " night" : ""}`}
    >
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
};

export default DarkModeButton;
