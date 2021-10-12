import React from "react";

export default function Stars() {
  const getStars = () => {
    let content = [];
    for (let i = 0; i < 50; i++) {
      content.push(<div className="star" key={i}></div>);
    }
    return content;
  };
  return (
    <div>
      <div>{getStars()}</div>
    </div>
  );
}
