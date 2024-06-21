import React from "react";
import style from "./rightSection.module.css";

const RightSection = () => {
  return (
    <div className={style.rightSectionMain}>
      {" "}
      <nav className={style.navbar__links}>
        <a href="/" className={style.navbar__link}>
          Giriş
        </a>
        <a href="/" className={style.navbar__link}>
          Favorilerim
        </a>
        <a href="/" className={style.navbar__link}>
          Sepetim
        </a>
      </nav>
    </div>
  );
};

export default RightSection;
