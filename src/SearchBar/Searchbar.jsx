import React from "react";
import SearchStyle from "./Searchbar.module.css";

export default function SearchBar() {
  return (
    <div>
      <form>
        <div className={SearchStyle.containerSearch}>
          <div className={SearchStyle.inputAndBtn}>
            <input
              type="text"
              className={SearchStyle.inputSearch}
              placeholder="Agregá país o ciudad . . ."
            />
            <button className={SearchStyle.searchBarBtn} type="submit">
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
