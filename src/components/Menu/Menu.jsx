import React from "react";
import "./Menu.css"
export function Menu({ onClick }) {
  return <div className="Menu">
      <button onClick={onClick} className="menu--start-button">
        Start
      </button>
    </div>;
}
  