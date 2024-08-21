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
        <div className={styles.serverName}>
          <div>{info.name}</div>
          <div className={styles.previewName}>{info.description}</div>
        </div>
      </div>
      <div className={styles.additions}>
        <div className={styles.descriptionLabel}>Описание</div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: info.possibilities }} />
      </div>
      <div className={styles.additions}>
        <div className={styles.descriptionLabel}>Команды</div>
        <hr />
        {info.commands.map((item, itemId) =>
          item.length > 0 ? (
            <div key={itemId}>{item}</div>
          ) : (
            <br key={itemId} />
          ),
        )}
      </div>
      <div className={styles.install}>Установленные модификации</div>
      <div className={styles.mods}>
        {info.mods.map((item, itemId) => {
          if (itemId === info.mods.length - 1) {
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
          }
          return (
            <>
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
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
