import React from "react";
import ServiceCards from ".././service-cards";
import ServiceInfo from ".././service-info";
import styles from "./index.module.css";

function ServiceBlock() {
  return (
    <div className={styles.section}>
      <ServiceInfo />
      <ServiceCards
        services={[
          {
            id: 1,
            src: "/icons/1.svg",
            title: "СТРАТЕГИЯ",
            desc: "Создадим уникальный и удобный дизайн.",
          },
          {
            id: 2,
            src: "/icons/2.svg",
            title: "АНАЛИЗ",
            desc: "Создадим уникальный и удобный дизайн.",
          },
          {
            id: 3,
            src: "/icons/3.svg",
            title: "СОЦ СЕТИ",
            desc: "Создадим уникальный и удобный дизайн.",
          },
          {
            id: 4,
            src: "/icons/4.svg",
            title: "РАЗВИТИЕ",
            desc: "Создадим уникальный и удобный дизайн.",
          },
          {
            id: 5,
            src: "/icons/5.svg",
            title: "КОНТЕНТ",
            desc: "Создадим уникальный и удобный дизайн.",
          },
          {
            id: 6,
            src: "/icons/6.svg",
            title: "ДИЗАЙН UX",
            desc: "Создадим уникальный и удобный дизайн.",
          },
          {
            id: 7,
            src: "/icons/7.svg",
            title: "ТАРГЕТИРОВАННАЯ РЕКЛАМА",
            desc: "Создадим уникальный и удобный дизайн.",
          },
          {
            id: 8,
            src: "/icons/8.svg",
            title: "ПРОДУКТ",
            desc: "Создадим уникальный и удобный дизайн.",
          },
        ]}
      />
    </div>
  );
}

export default React.memo(ServiceBlock);
