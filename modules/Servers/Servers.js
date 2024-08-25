"use client";
import styles from "./Servers.module.scss";
import { Carousel } from "rsuite";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowLeftLine from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLine from "@rsuite/icons/ArrowRightLine";

const serverList = [
  {
    name: "classic",
    version: "Версия 1.12.2",
    description:
      "Любитель Industrial Craft2?<br/>Здесь основным модом является TechReborn<br/>Это продолжение IC2 для новый версий",
  },
  {
    name: "classic2",
    version: "Версия 1.12.2",
    description:
      "Любитель Industrial Craft2?<br/>Здесь основным модом является TechReborn<br/>Это продолжение IC2 для новый версий",
  },
  {
    name: "classic3",
    version: "Версия 1.12.2",
    description:
      "Любитель Industrial Craft2?<br/>Здесь основным модом является TechReborn<br/>Это продолжение IC2 для новый версий",
  },
  {
    name: "classic4",
    version: "Версия 1.12.2",
    description:
      "Любитель Industrial Craft2?<br/>Здесь основным модом является TechReborn<br/>Это продолжение IC2 для новый версий",
  },
];
const Servers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectNext = () => {
    setActiveIndex((activeIndex + 1) % serverList.length);
  };
  const selectBack = () => {
    if (activeIndex === 0) {
      return setActiveIndex(serverList.length - 1);
    }
    setActiveIndex((activeIndex - 1) % serverList.length);
  };
  return (
    <Carousel
      className={styles.slider}
      activeIndex={activeIndex}
      onSelect={(index) => setActiveIndex(index)}
    >
      {serverList.map((server, serverId) => {
        return (
          <div key={serverId} className={styles.servers}>
            <div className={styles.server}>
              <div className={styles.name}>{server.name}</div>
              <div className={styles.version}>{server.version}</div>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: server.description }}
              />
              <div className={styles.links}>
                <Link href={`$servers/${server.name}`}>Подробнее</Link>
                <Link href={"servers"} className={styles.about}>
                  Список серверов
                </Link>
              </div>
            </div>
            <div className={styles.image}>
              <div onClick={selectBack}>
                <ArrowLeftLine />
              </div>
              <Image
                quality={100}
                width={1026}
                height={478}
                src={"/altromon_about.png"}
                alt="server"
              />
              <div onClick={selectNext}>
                <ArrowRightLine />
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Servers;
