import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slice";
import styles from "./index.module.css";

function Modal({ modalTitle, children, onCloseCart }) {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{modalTitle}</h2>
          <button onClick={handleCloseModal}>Закрыть</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default React.memo(Modal);
