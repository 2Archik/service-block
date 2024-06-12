import React from "react";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slice";

function Card({ item }) {
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(openModal());
  };

  return (
    <div className={styles.card}>
      <img className={styles.icon} src={item.src} alt={item.title} />
      <div className={styles.title}>{item.title}</div>
      <div className={styles.desc}>{item.desc}</div>
      <a onClick={handleModalOpen} className={styles.more}>
        ПОДРОБНЕЕ <img src="/icons/arrow.svg" />
      </a>
    </div>
  );
}

export default React.memo(Card);
