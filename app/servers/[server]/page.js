"use client";
import { useParams } from "next/navigation";
import servers from "@/const";
import Image from "next/image";
import styles from "./page.module.scss";
const Page = () => {
  const params = useParams();
  const { server } = params;
  const info = servers[server];
  return (
    <div className={styles.page}>
      <div className={styles.preview}>
        <Image
          src={`/${server}.png`}
          alt={server}
          sizes="100vw"
          width={0}
          height={0}
        />
        <div>{info.name}</div>
      </div>
      <div className={styles.additions}>{info.description}</div>
      <div
        className={styles.additions}
        dangerouslySetInnerHTML={{ __html: info.possibilities }}
      />
      <div className={styles.additions}>
        {info.commands.map((item, itemId) => (
          <div key={itemId}>{item}</div>
        ))}
      </div>
      <div className={styles.install}>Установленные модификации</div>
      <div className={styles.mods}>
        {info.mods.map((item, itemId) => {
          return (
            <div key={itemId} className={styles.mod}>
              <div className={styles.name}>
                <Image
                  src={`/icons/${item.name}.${item.type}`}
                  alt={item.name}
                  width={48}
                  height={48}
                />
                <div>{item.name}</div>
              </div>
              <div>{item.about}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
