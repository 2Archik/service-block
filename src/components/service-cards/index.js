import React from "react";
import Card from ".././card";
import styles from "./index.module.css";

function ServiceCards({ services }) {
  return (
    <div className={styles.services}>
      {services.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default React.memo(ServiceCards);
