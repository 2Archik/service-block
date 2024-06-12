import React from "react";
import { useGetMoreQuery } from "../../redux/moreApi";
import styles from "./index.module.css";

function More() {
  const { data = [] } = useGetMoreQuery();
  console.log(data);

  return (
    <ul className={styles.more}>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default React.memo(More);
