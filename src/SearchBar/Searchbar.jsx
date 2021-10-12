import React, { useState, useEffect } from "react";
import SearchStyle from "./Searchbar.module.css";

export default function SearchBar({ onSearch }) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(name);
    setName("");
  }

  useEffect(() => {
    var input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
      input[i].setAttribute(
        "size",
        input[i].getAttribute("placeholder").length
      );
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={SearchStyle.containerSearch}>
          <div className={SearchStyle.inputAndBtn}>
            <input
              type="text"
              value={name}
              className={SearchStyle.inputSearch}
              onChange={(e) => handleChange(e)}
              placeholder="Add city or country . . ."
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
