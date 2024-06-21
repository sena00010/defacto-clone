import React from "react";
import style from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <div className={style.searchBarMain}>
      <input
        type="text"
        className={style.searchInput}
        placeholder="Ara: Tişört, ceket, elbise, pantolon, çanta"
      />
    </div>
  );
};

export default SearchBar;
