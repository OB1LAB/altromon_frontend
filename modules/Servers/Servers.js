import styles from "./Servers.module.scss";
import { Button, Carousel } from "rsuite";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <Carousel className={styles.slider}>
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
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={"/altromon_about.png"}
              alt="server"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Servers;
