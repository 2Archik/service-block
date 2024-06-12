import React from "react";
import "./style.css";

function PageLayout({ children }) {
  return <div className="PageLayout">{children}</div>;
}

export default React.memo(PageLayout);
