import React from "react";
import "./sidebarOption.css";

function SidebarOption({ active, Icon, title }) {
  return (
    <div className={`sidebarOption ${active && "active"} `}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
}

export default SidebarOption;
