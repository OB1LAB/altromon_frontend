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
    name: "Survival",
    version: "Версия 1.21.1",
    img: "Survival_1.21.1.jpg",
    url: "Survival_1.21.1",
    description:
      "Любитель ванильного геймплея?<br/>Хочешь просто поиграть без всяких модов?<br/>Тебе определённо на эту сборку!",
  },
  {
    name: "Hitech",
    version: "Версия 1.12.2",
    img: "Hitech_1.12.2.jpg",
    url: "Hitech_1.12.2",
    description:
      "Комфортная индустриальная сборка<br/>IC2, AE2, Mekanism и множество других модов!<br/>Не перегружена сложными крафтами",
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
                <Link href={`$servers/${server.url}`}>Подробнее</Link>
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
                src={`/${server.img}`}
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
