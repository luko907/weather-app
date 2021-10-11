import React from "react";

export default function SearchBar() {
  return (
    <div>
      <form>
        <div>
          <div>
            <input type="text" placeholder="Agregá país o ciudad . . ." />
            <button type="submit">+</button>
          </div>
        </div>
      </form>
    </div>
  );
}
