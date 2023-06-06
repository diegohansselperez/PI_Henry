import React from "react";
import style from "./Landing.module.css";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate("/home");
  };

  return (
    <div className={style.backgraundLanding}>
      <button onClick={handleClick}>Start</button>
    </div>
  );
};

export default Landing;
