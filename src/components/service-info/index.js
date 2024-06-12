import React from "react";
import styles from "./index.module.css";

function ServiceInfo() {
  return (
    <div className={styles.info}>
      <h2>Сервис</h2>
      <div className={styles.desc}>
        <p className={styles.moreInfo}>
          От идеи до незабываемого и измеримого результата.
        </p>
        <img src="./icons/line.svg" />
        <p className={styles.againInfo}>
          Интеграция безупречного производства, передовых технологий и
          тщательного измерения производительности
        </p>
      </div>
    </div>
  );
}

export default React.memo(ServiceInfo);
