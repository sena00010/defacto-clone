import React from "react";
import style from "./header.module.css";
import SearchBar from "../SearchBar";
import RightSection from "../rightSection";

const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <img src="./de-facto-logo-light-v2.svg" width={140} height={30}></img>
      </div>
      <div className={style.navbar}>
        <nav className={style.navbar__links}>
          <a href="/" className={style.navbar__link}>
            KADIN
          </a>
          <a href="/" className={style.navbar__link}>
            ERKEK
          </a>
          <a href="/" className={style.navbar__link}>
            ÇOCUK
          </a>
          <a href="/" className={style.navbar__link}>
            BEBEK
          </a>
          <a href="/" className={style.navbar__link}>
            DF-FIT
          </a>
        </nav>
      </div>
      <SearchBar />
      <RightSection />
    </div>
  );
};

export default Header;
